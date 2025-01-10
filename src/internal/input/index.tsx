import { BaseProps } from '../../shared/types/props';
import { setFormatDate } from '../../shared/utils';
import styles from './input.module.scss';

export interface InputProps extends BaseProps {
  onClick?: () => void;
  placeholder?: string;
}
export default function Input({
  mode,
  value,
  placeholder,
  formatDate,
  onClick,
}: InputProps) {
  const inputValue = setFormatDate(value || null, formatDate);

  return (
    <input
      data-mode={mode}
      className={styles['datepicker-input']}
      type="text"
      defaultValue={inputValue}
      onClick={onClick}
      onChange={(e) => {
        console.log(e);
      }}
      placeholder={placeholder || 'Select a date'}
    />
  );
}
