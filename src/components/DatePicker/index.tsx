import { Calendar, Input } from '../../internal';
import { useCalendarToggle, useClickOutside } from '../../shared/hook';
import { BaseProps } from '../../shared/types/props';

export default function DatePicker({
  mode = 'light',
  locale = 'en',
  value,
  placeholder,
}: BaseProps) {
  const { isOpen, toggleCalendar, onCloseCalendar } = useCalendarToggle();
  const calendarRef = useClickOutside(onCloseCalendar);

  return (
    <div className="relative" ref={calendarRef}>
      <Input
        mode={mode}
        value={value}
        placeholder={placeholder}
        onClick={toggleCalendar}
      />
      {isOpen && <Calendar mode={mode} locale={locale} />}
    </div>
  );
}
