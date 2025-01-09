import styles from './calendar.module.scss';
export default function Calendar() {
  const currentDate = new Date();
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return (
    <div className={styles['datepicker-calendar']}>
      <div className={styles['grid']}>
        {days.map((day) => (
          <button key={day} className={styles['day-button']} onClick={() => {}}>
            {day}
          </button>
        ))}
      </div>
    </div>
  );
}
