import { useState } from 'react';
import ko from '../../locales/ko.json';
import en from '../../locales/en.json';
import ja from '../../locales/ja.json';
import fr from '../../locales/fr.json';

type Locale = 'ko' | 'en' | 'ja' | 'fr';

export function useLocale(initialLocale: Locale = 'ko') {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const getLocaleData = () => {
    switch (locale) {
      case 'ko':
        return ko;
      case 'en':
        return en;
      case 'ja':
        return ja;
      case 'fr':
        return fr;
      default:
        return ko;
    }
  };

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
  };

  return { locale, getLocaleData, changeLocale };
}
