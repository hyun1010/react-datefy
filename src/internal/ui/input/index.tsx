import styles from './input.module.scss';
import { BaseProps } from '../../config';
import { useBaseContext } from '../../context';

export default function Input({ value, placeholder }: BaseProps) {
  const { theme, toggleIsOpen } = useBaseContext();
  const inputValue = value?.toLocaleDateString() || '';

  const handleClick = () => {
    toggleIsOpen();
  };

  return (
    <input
      data-theme={theme}
      className={styles['datepicker-input']}
      type="text"
      value={inputValue}
      onClick={handleClick}
      placeholder={placeholder || 'Select a date'}
      readOnly
    />
  );
}
