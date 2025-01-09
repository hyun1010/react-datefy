import { useState, useCallback } from 'react';

export const useCalendarToggle = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const toggleCalendar = useCallback(() => {
    setIsOpen(!isOpen);
  }, []);

  const onCloseCalendar = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    toggleCalendar,
    onCloseCalendar,
  };
};
