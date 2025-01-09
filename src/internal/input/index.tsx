import { BaseProps } from '../../shared/types/props';
import { formatDate } from '../../shared/utils';
import styles from './input.module.scss';

interface InputProps extends BaseProps {
  onClick?: () => void;
}
export default function Input({
  mode,
  value,
  placeholder,
  onClick,
}: InputProps) {
  const inputValue = formatDate(value || null, 'yyyy-mm-dd');

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
