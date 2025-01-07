import React, { useContext } from 'react';
import { ValueType } from '../../shared/config';
import { DisplayContext } from '../../shared/context/DisplayContext';
import styles from './input.module.scss';

interface InputProps {
  /**
   * The value to be displayed in the date picker input.
   * @example new Date()
   * @example new Date(2025, 0, 1)
   */
  value: ValueType;
  /**
   *
   */
  onClick: () => void;
  /**
   * The placeholder text for the input field.
   * @default 'Select a date.'
   */
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onClick,
  placeholder,
}) => {
  const inputValue = value?.toLocaleDateString() || '';
  // DisplayContext가 사용되지 않으면 에러를 방지하기 위해 조건 추가
  const context = useContext(DisplayContext);

  const handleClick = () => {
    if (context && context.toggleDisplay) {
      context.toggleDisplay();
    }
    onClick?.();
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
