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
import { CalendarBaseProps } from '../type';

export interface CalendarProps extends Omit<BaseProps, 'value'> {
  value: DateValueType;
  onSelect: (value: string) => void;
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
export default function Calendar({
  value,
  formatDate,
  mode,
  onSelect,
  maxDate,
  minDate,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(value);
  const [locale, setLocale] = useState<LocaleContentType>({
    weekdays: [],
    monthNames: [],
  });

  const baseProps = {
    locale,
    currentDate,
    maxDate,
    minDate,
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
