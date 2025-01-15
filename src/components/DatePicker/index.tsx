import { useEffect, useState } from 'react';
import { Calendar, Input } from '../../internal';
import { useCalendarToggle, useClickOutside } from '../../shared/hook';
import { DateValueType, initFormatDate } from '../../shared/types';
import { BaseProps } from '../../shared/types/props';
import {
  createProps,
  isValidFormat,
  onSetFormatDate,
} from '../../shared/utils';

export interface DatePickerProps extends BaseProps {
  /**
   * The placeholder text for the date picker input field.
   * This text will appear when the input field is empty.
   * @example "Select a date"
   */
  placeholder?: string;
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
    ...restProps
  } = createProps(props);

  const { isOpen, onToggleCalendar, onCloseCalendar } = useCalendarToggle();
  const calendarRef = useClickOutside(onCloseCalendar);
  const [formatValue, setFormatValue] = useState<string>('');

  const renderInputProps = {
    ...restProps,
    mode,
    value: formatValue,
    onClick: onToggleCalendar,
  };

  const renderCalendarProps = {
    mode,
    value,
    formatDate,
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormatValue(e.target.value);
  };

  const handleValidateFormat = () => {
    if (isValidFormat(formatValue, formatDate)) {
      setFormatValue(formatValue);
      restProps.onChange?.({ dateValue: new Date(formatValue), formatValue });
    } else {
      console.warn(`Invalid date format. Expected format: ${formatDate}`);
      setFormatValue(value ? onSetFormatDate(value, formatDate) : ''); // 포맷이 틀리면 기존 값을 복구
    }
  };

  const handleBlur = () => {
    handleValidateFormat();
  };

  const handleSelect = (value: string) => {
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
      setFormatValue(formattedValue);
    }
  }, [value]);

  return (
    <div className="relative" ref={calendarRef}>
      <Input
        {...renderInputProps}
        onChange={handleChangeValue}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
      {isOpen && <Calendar {...renderCalendarProps} onSelect={handleSelect} />}
    </div>
  );
}
