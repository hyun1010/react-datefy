import { DateValueType, FormatDateType } from '../type';

export function onSetFormatDate(
  date: DateValueType,
  format: FormatDateType = 'yyyy-mm-dd'
) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  const formatMap: Record<FormatDateType, string> = {
    'yyyy-mm-dd': `${year}-${month}-${day}`,
    'yyyy.mm.dd': `${year}.${month}.${day}`,
    'yyyy/mm/dd': `${year}/${month}/${day}`,
  };

  return formatMap[format];
}

export function isValidFormat(
  inputValue: string,
  format: FormatDateType
): boolean {
  const regexMap: Record<FormatDateType, RegExp> = {
    'yyyy-mm-dd': /^\d{4}-\d{2}-\d{2}$/,
    'yyyy.mm.dd': /^\d{4}\.\d{2}\.\d{2}$/,
    'yyyy/mm/dd': /^\d{4}\/\d{2}\/\d{2}$/,
  };
  return regexMap[format]?.test(inputValue) ?? false;
}
