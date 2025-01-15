import { initLocale, LocaleType } from '../types';
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from './localStorage';

/**
 * Save locale to localStorage
 * @param value - The locale value to store (default is 'en')
 */
export const setLocale = (value: LocaleType = initLocale) => {
  setLocalStorage<LocaleType>('locale', value);
};

/**
 * Retrieve locale from localStorage
 * @returns The stored locale value or null if not found
 */
export const getLocale = (): LocaleType | null => {
  return getLocalStorage<LocaleType>('locale');
};

/**
 * Remove locale from localStorage
 */
export const removeLocale = () => {
  removeLocalStorage('locale');
};

const dictionaries = {
  en: () => import('../../locales/en.json').then((module) => module.default),
  ko: () => import('../../locales/ko.json').then((module) => module.default),
};

/**
 * Retrieve and map locale data based on the current locale
 * @returns The locale data as a Promise
 */
export const mapLocaleData = async <T>(): Promise<T> => {
  const locale = getLocale() || initLocale;

  if (dictionaries[locale]) {
    const data = await dictionaries[locale]();
    return data as T;
  }

  throw new Error(`Locale '${locale}' is not supported.`);
};
