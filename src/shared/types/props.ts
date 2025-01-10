import { DateValueType, FormatDateType, localeTypes, ModeType } from './type';

export interface BaseProps {
  /**
   * @default 'light'
   */
  mode: ModeType;
  locale: localeTypes;
  /**
   * The value to be displayed in the date picker input.
   * @example new Date()
   * @example new Date(2025, 0, 1)
   */
  value: DateValueType;
  /** */
  formatDate: FormatDateType;
}
