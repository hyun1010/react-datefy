import { DateValueType, FormatDateType, ModeType } from './type';

export interface BaseProps {
  /**
   * The display mode for the date picker.
   * @default 'light'
   * @example 'light'
   * @example 'dark'
   */
  mode?: ModeType;

  /**
   * The value to be displayed in the date picker input.
   * @example new Date()
   * @example new Date(2025, 0, 1)
   */
  value?: DateValueType;

  /**
   * Function to format the displayed date.
   * Accepts a function that takes a Date object and returns a formatted string.
   * @example (date) => date.toLocaleDateString('en-US')
   */
  formatDate?: FormatDateType;
}
