import { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeType } from '../../shared/config';

interface BaseContextType {
  theme: ThemeType;
  isOpen: boolean;
  toggleIsOpen: () => void;
}

const BaseContext = createContext<BaseContextType>({
  theme: 'light',
  isOpen: false,
  toggleIsOpen: () => {},
});

interface BaseProviderProps {
  theme: ThemeType;
  children: ReactNode;
}

export const BaseProvider: React.FC<BaseProviderProps> = ({
  theme,
  children,
}: BaseProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <BaseContext.Provider value={{ theme, isOpen, toggleIsOpen }}>
      {children}
    </BaseContext.Provider>
  );
};

// `useBaseContext`를 사용하여 BaseContext를 쉽게 사용할 수 있도록 훅을 만듭니다.
export const useBaseContext = (): BaseContextType => {
  const context = useContext(BaseContext);
  if (!context) {
    throw new Error('useBaseContext must be used within a BaseProvider');
  }
  return context;
};
