import { Calendar, Input, InputProps } from '../../internal';
import { useCalendarToggle, useClickOutside } from '../../shared/hook';
import { createProps } from '../../shared/utils';

interface DatePickerProps extends InputProps {
  placeholder?: string;
}

export default function DatePicker(props: DatePickerProps) {
  const { mode, locale, formatDate, value, placeholder, ...restProps } =
    createProps(props);

  const renderInputProps = {
    ...restProps,
    mode,
    locale,
    formatDate,
    value,
    placeholder,
  };

  const renderCalendarProps = {
    mode,
    locale,
    value,
    formatDate,
  };

  const { isOpen, onOpenCalendar, onCloseCalendar } = useCalendarToggle();
  const calendarRef = useClickOutside(onCloseCalendar);

  return (
    <div className="relative" ref={calendarRef}>
      <Input {...renderInputProps} onClick={onOpenCalendar} />
      {isOpen && <Calendar {...renderCalendarProps} />}
    </div>
  );
}
