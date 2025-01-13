import { Calendar, Input, InputProps } from '../../internal';
import { useCalendarToggle, useClickOutside } from '../../shared/hook';
import { createProps } from '../../shared/utils';

interface DatePickerProps extends InputProps {
  placeholder?: string;
}

export default function DatePicker(props: DatePickerProps) {
  const { mode, formatDate, value, placeholder, ...restProps } =
    createProps(props);

  const renderInputProps = {
    ...restProps,
    mode,
    formatDate,
    value,
    placeholder,
  };

  const renderCalendarProps = {
    mode,
    value,
    formatDate,
  };

  const { isOpen, onToggleCalendar, onCloseCalendar } = useCalendarToggle();
  const calendarRef = useClickOutside(onCloseCalendar);

  return (
    <div className="relative" ref={calendarRef}>
      <Input {...renderInputProps} onClick={onToggleCalendar} />
      {isOpen && <Calendar {...renderCalendarProps} />}
    </div>
  );
}
