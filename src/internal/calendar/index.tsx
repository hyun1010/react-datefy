import { useEffect, useMemo, useState } from 'react';
import styles from './calendar.module.scss';
import { BaseProps } from '../../shared/types/props';
import { mapLocaleData } from '../../shared/utils/mapLocale';
import { onSetFormatDate } from '../../shared/utils';

interface CalendarProps extends BaseProps {
  onSelect: (value: string) => void;
}
export default function Calendar(props: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [locale, setLocale] = useState<{ weekdays: string[] }>({
    weekdays: [],
  });

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

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handlePick = (day: number) => {
    const selectedDate = new Date(year, month, day);
    const formattedDate = onSetFormatDate(selectedDate, props.formatDate);
    props.onSelect(formattedDate);
  };

  useEffect(() => {
    const fetchLocaleData = async () => {
      const data = await mapLocaleData<{ weekdays: string[] }>();
      setLocale(data);
    };

    fetchLocaleData();
  }, []);

  return (
    <div data-mode={props.mode} className={styles['datepicker-calendar']}>
      <div className={styles['header']}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>
          {year}년 {month + 1}월
        </span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
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
        {weekDays.map((day) => (
          <button
            key={day}
            className={styles['day-button']}
            onClick={() => handlePick(day)}
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
