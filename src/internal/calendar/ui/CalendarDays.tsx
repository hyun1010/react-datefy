import { useMemo } from 'react';
import { DateValueType } from '../../../shared/type';
import styles from '../style/calendar.module.scss';
import { CalendarBaseProps } from '../type';

interface CalendarDaysProps extends CalendarBaseProps {
  onSelect: (value: DateValueType) => void;
  /**
   * The maximum selectable date.
   * Prevents the user from selecting a date beyond this value.
   * @example new Date(2030, 11, 31) // December 31, 2030
   */
  maxDate?: DateValueType;

  /**
   * The minimum selectable date.
   * Prevents the user from selecting a date earlier than this value.
   * @example new Date(2020, 0, 1) // January 1, 2020
   */
  minDate?: DateValueType;
}
export function CalendarDays(props: CalendarDaysProps) {
  const { locale, currentDate, onSelect, maxDate, minDate } = props;
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const weekDays = useMemo(() => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    return days;
  }, [currentDate]);

  const blankDays = useMemo(() => {
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    return Array(firstDayOfMonth).fill(null);
  }, [currentDate]);

  const isDisabled = (day: number) => {
    const date = new Date(year, month, day);
    if (maxDate && date > maxDate) return true;
    if (minDate && date < minDate) return true;
    return false;
  };

  const handlePick = (day: number) => {
    if (isDisabled(day)) return;
    const selectedDate = new Date(year, month, day);
    onSelect(selectedDate);
  };

  return (
    <>
      <div className={styles['weekdays']}>
        {locale.weekdays.map((weekday) => (
          <div key={weekday} className={styles['weekday']}>
            {weekday}
          </div>
        ))}
      </div>
      <div className={styles['grid']}>
        {blankDays.map((_, index) => (
          <div key={index} className={styles['empty-day']}></div>
        ))}
        {weekDays.map((day) => {
          const isSelected =
            currentDate.getFullYear() === year &&
            currentDate.getMonth() === month &&
            currentDate.getDate() === day;

          const disabled = isDisabled(day);

          return (
            <button
              key={day}
              className={`${styles['day-button']} ${
                isSelected ? styles['selected'] : ''
              } ${disabled ? styles['disabled'] : ''}`}
              onClick={() => handlePick(day)}
              disabled={disabled}
            >
              {day}
            </button>
          );
        })}
      </div>
    </>
  );
}
