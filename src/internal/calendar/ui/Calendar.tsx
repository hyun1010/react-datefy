import { useEffect, useState } from 'react';
import {
  BaseProps,
  DateValueType,
  LocaleContentType,
} from '../../../shared/type';
import { mapLocaleData, onSetFormatDate } from '../../../shared/util';
import styles from '../style/calendar.module.scss';
import { CalendarDays } from './CalendarDays';
import { CalendarHeader } from './CalendarHeader';

export interface CalendarProps extends Omit<BaseProps, 'value'> {
  value: string;
  onSelect: (value: string) => void;
}
export default function Calendar({
  value,
  formatDate,
  mode,
  onSelect,
}: CalendarProps) {
  const initialDate = value ? new Date(value) : new Date();
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [locale, setLocale] = useState<LocaleContentType>({
    weekdays: [],
    monthNames: [],
  });

  const baseProps = {
    locale,
    currentDate,
  };

  const handleSetCurrentDate = (value: DateValueType) => {
    setCurrentDate(value);
  };

  const handleSelect = (value: DateValueType) => {
    setCurrentDate(value);
    const formattedDate = onSetFormatDate(value, formatDate);
    onSelect(formattedDate);
  };

  useEffect(() => {
    if (value) {
      setCurrentDate(new Date(value));
    }
  }, [value]);

  useEffect(() => {
    const fetchLocaleData = async () => {
      const data = await mapLocaleData<LocaleContentType>();
      setLocale(data);
    };

    fetchLocaleData();
  }, []);

  return (
    <div data-mode={mode} className={styles['datepicker-calendar']}>
      <CalendarHeader {...baseProps} onChangeDate={handleSetCurrentDate} />
      <CalendarDays {...baseProps} onSelect={handleSelect} />
    </div>
  );
}
