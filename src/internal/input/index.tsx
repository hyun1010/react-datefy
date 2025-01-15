import { DatePickerProps } from '../../components/DatePicker';
import styles from './input.module.scss';

interface InputInternalProps
  extends Omit<DatePickerProps, 'value' | 'onChange'> {
  value: string;
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
