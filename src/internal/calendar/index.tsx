import { useState } from 'react';
import styles from './calendar.module.scss';
import { BaseProps } from '../../shared/types/props';

export default function Calendar({ mode }: BaseProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay(); // 첫 번째 요일

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const weekdays = ['일', '월', '화', '수', '목', '금', '토'];

  const blankDays = Array(firstDayOfMonth).fill(null);

  return (
    <div data-mode={mode} className={styles['datepicker-calendar']}>
      <div className={styles['header']}>
        <button onClick={handlePrevMonth}>&lt;</button>
        <span>
          {year}년 {month + 1}월
        </span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className={styles['weekdays']}>
        {weekdays.map((weekday) => (
          <div key={weekday} className={styles['weekday']}>
            {weekday}
          </div>
        ))}
      </div>
      <div className={styles['grid']}>
        {/* 첫 번째 요일까지 빈 공간 추가 */}
        {blankDays.map((_, index) => (
          <div key={index} className={styles['empty-day']}></div>
        ))}
        {days.map((day) => (
          <button key={day} className={styles['day-button']} onClick={() => {}}>
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
