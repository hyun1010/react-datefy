import styles from './input.module.scss';
import { ValueType } from '../../../shared/config';
import { useDisplayContext } from '../../context/DisplayContext';

interface InputProps {
  /**
   * The value to be displayed in the date picker input.
   * @example new Date()
   * @example new Date(2025, 0, 1)
   */
  value: ValueType;
  /**
   * The placeholder text for the input field.
   * @default 'Select a date.'
   */
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({ value, placeholder }) => {
  const { toggleDisplay } = useDisplayContext();
  const inputValue = value?.toLocaleDateString() || '';

  const handleClick = () => {
    toggleDisplay();
  };

  return (
    <input
      className={styles['date-input']}
      type="text"
      value={inputValue}
      onClick={handleClick}
      placeholder={placeholder || 'Select a date'}
      readOnly
    />
  );
};
