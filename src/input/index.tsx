import { useState } from 'react';
import { ValueType } from '../shared';
import styles from './input.module.scss';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputValue = value?.toLocaleDateString() || '';

  const handleToggle = () => {
    const toggle = !isOpen;
    setIsOpen(toggle);
  };

  return (
    <input
      className={styles['datepicker-input']}
      type="text"
      value={inputValue}
      onClick={handleToggle}
      placeholder={placeholder || 'Select a date'}
      readOnly
    />
  );
};
