import { BaseProps } from '../../../shared/types/props';
import styles from '../style/input.module.scss';

export interface InputInternalProps extends Omit<BaseProps, 'value'> {
  value: string;
  /**
   * The placeholder text for the date picker input field.
   * This text will appear when the input field is empty.
   * @example "Select a date"
   */
  placeholder?: string;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function Input(props: InputInternalProps) {
  return (
    <input
      type="text"
      className={styles['datepicker-input']}
      data-mode={props.mode}
      value={props.value}
      placeholder={props.placeholder || 'Select a date'}
      onClick={props.onClick}
      onChange={props.onChange}
      onBlur={props.onBlur}
      onKeyDown={props.onKeyDown}
    />
  );
}
