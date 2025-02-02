import { useEffect, useState } from 'react';
import { Calendar, DateInput } from '../internal';
import { InputInternalProps } from '../internal/input/ui/Input';
import { useCalendarToggle, useClickOutside } from '../shared/hook';
import { BaseProps, DateValueType, initFormatDate } from '../shared/type';
import { createProps, isValidFormat, onSetFormatDate } from '../shared/util';
import { CalendarProps } from '../internal/calendar/ui/Calendar';

export interface DatePickerProps
  extends Pick<InputInternalProps, 'placeholder'>,
    Omit<CalendarProps, 'value'>,
    BaseProps {
  /**
   * A callback function that is triggered when the date value changes.
   * It provides the new date value and the formatted string representation.
   *
   * @param dateValue - The selected date as a `DateValueType`.
   * @param formatValue - The formatted date string based on the specified format.
   * @example
   * onChange({ dateValue: new Date(), formatValue: '2025-01-15' })
   */
  onChange?: ({
    dateValue,
    formatValue,
  }: {
    dateValue: DateValueType;
    formatValue: string;
  }) => void;
}

export default function DatePicker(props: DatePickerProps) {
  const {
    mode,
    formatDate = initFormatDate,
    value,
    minDate,
    maxDate,
    ...restProps
  } = createProps(props);

  const { isOpen, onToggleCalendar, onCloseCalendar } = useCalendarToggle();
  const calendarRef = useClickOutside(onCloseCalendar);
  const [inputValue, setInputValue] = useState<string>('');
  const [formatValue, setFormatValue] = useState<string>('');

  const renderInputProps = {
    ...restProps,
    mode,
    value: inputValue,
    onClick: onToggleCalendar,
  };

  const renderCalendarProps = {
    mode,
    value: formatValue ? new Date(formatValue) : new Date(),
    formatDate,
    minDate,
    maxDate,
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const isWithinRange = (date: Date) => {
    if (minDate && date < new Date(minDate)) return false;
    if (maxDate && date > new Date(maxDate)) return false;
    return true;
  };

  const handleSetDate = () => {
    const parsedDate = new Date(inputValue);
    if (isWithinRange(parsedDate)) {
      setFormatValue(inputValue);
      restProps.onChange?.({ dateValue: parsedDate, formatValue: inputValue });
    } else {
      console.warn(
        `Date is out of range. Allowed range: ${minDate} - ${maxDate}`
      );
      setFormatValue(value ? onSetFormatDate(value, formatDate) : '');
    }
  };

  const handleValidateFormat = () => {
    if (isValidFormat(inputValue, formatDate)) {
      handleSetDate();
    } else {
      console.warn(`Invalid date format. Expected format: ${formatDate}`);
      setFormatValue(value ? onSetFormatDate(value, formatDate) : '');
    }
  };

  const handleBlur = () => {
    handleValidateFormat();
  };

  const handleSelect = (value: string) => {
    setInputValue(value);
    setFormatValue(value);
    restProps.onChange?.({
      dateValue: new Date(value),
      formatValue,
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleValidateFormat();
      (document.activeElement as HTMLElement).blur();
      onCloseCalendar();
    }
  };

  useEffect(() => {
    if (value) {
      const formattedValue = onSetFormatDate(value, formatDate);
      setInputValue(formattedValue);
      setFormatValue(formattedValue);
    }
  }, [value]);

  return (
    <div className="relative" ref={calendarRef}>
      <DateInput
        {...renderInputProps}
        onChange={handleChangeValue}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
      {isOpen && <Calendar {...renderCalendarProps} onSelect={handleSelect} />}
    </div>
  );
}
