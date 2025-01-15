import { useMemo } from 'react';
import { DateValueType } from '../../../shared/type';
import styles from '../style/calendar.module.scss';
import { CalendarBaseProps } from '../type';

interface CalendarDaysProps extends CalendarBaseProps {
  onSelect: (value: DateValueType) => void;
}
export function CalendarDays(props: CalendarDaysProps) {
  const { locale, currentDate, onSelect } = props;
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

  const handlePick = (day: number) => {
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

          return (
            <button
              key={day}
              className={`${styles['day-button']} ${
                isSelected ? styles['selected'] : ''
              }`}
              onClick={() => handlePick(day)}
            >
              {day}
            </button>
          );
        })}
      </div>
    </>
  );
}
