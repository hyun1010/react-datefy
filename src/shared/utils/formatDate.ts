import { FormatDateType } from '../types';

export function setFormatDate(date: Date | null, format: FormatDateType) {
  if (!date) return '';

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const formatMap: Record<string, string> = {
    'yyyy-mm-dd': `${year}-${month}-${day}`,
    'yyyy.mm.dd': `${year}.${month}.${day}`,
    'yyyy/mm/dd': `${year}/${month}/${day}`,
  };

  return formatMap[format] || formatMap['yyyy.mm.dd'];
}
