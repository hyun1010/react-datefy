import { useState, useCallback } from 'react';

export const useCalendarToggle = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const onOpenCalendar = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseCalendar = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    onOpenCalendar,
    onCloseCalendar,
  };
};
