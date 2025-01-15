import { DateValueType } from '../../../shared/types';
import styles from '../style/calendar.module.scss';
import { CalendarBaseProps } from '../type';

interface CalendarHeaderProps extends CalendarBaseProps {
  onChangeDate: (date: DateValueType) => void;
}
export function CalendarHeader(props: CalendarHeaderProps) {
  const { locale, currentDate, onChangeDate } = props;
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const handlePrevMonth = () => {
    onChangeDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    onChangeDate(new Date(year, month + 1, 1));
  };

  return (
    <div className={styles['header']}>
      <button onClick={handlePrevMonth}>&lt;</button>
      <span>
        {year} {locale.monthNames[month]}
      </span>
      <button onClick={handleNextMonth}>&gt;</button>
    </div>
  );
}
