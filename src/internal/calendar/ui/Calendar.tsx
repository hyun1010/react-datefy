import { useEffect, useState } from 'react';
import { DateValueType } from '../../../shared/types';
import { LocaleContentType } from '../../../shared/types/locale';
import { BaseProps } from '../../../shared/types/props';
import { onSetFormatDate } from '../../../shared/utils';
import { mapLocaleData } from '../../../shared/utils/mapLocale';
import styles from '../style/calendar.module.scss';
import { CalendarDays } from './CalendarDays';
import { CalendarHeader } from './CalendarHeader';

export interface CalendarProps extends BaseProps {
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
