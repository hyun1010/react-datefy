import { createContext, ReactNode, useContext, useState } from 'react';

interface DisplayContextType {
  isOpen: boolean;
  toggleDisplay: () => void;
}

export const DisplayContext = createContext<DisplayContextType | undefined>(undefined);

interface DisplayProviderProps {
  children: ReactNode;
}

export const DisplayProvider: React.FC<DisplayProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDisplay = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <DisplayContext.Provider value={{ isOpen, toggleDisplay }}>
      {children}
    </DisplayContext.Provider>
  );
};

// `useDisplayContext`를 사용하여 DisplayContext를 쉽게 사용할 수 있도록 훅을 만듭니다.
export const useDisplayContext = (): DisplayContextType => {
  const context = useContext(DisplayContext);
  if (!context) {
    throw new Error('useDisplayContext must be used within a DisplayProvider');
  }
  return context;
};
