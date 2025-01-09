import { DateValueType, ModeType } from './type';

export interface BaseProps {
  /**
   * @default 'light'
   */
  mode?: ModeType;
  /**
   * The value to be displayed in the date picker input.
   * @example new Date()
   * @example new Date(2025, 0, 1)
   */
  value?: DateValueType;
  /**
   * The placeholder text for the input field.
   * @default 'Select a date.'
   */
  placeholder?: string;
}
