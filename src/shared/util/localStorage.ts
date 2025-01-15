/**
 * Save data to localStorage
 * @param key - The key under which the value is stored
 * @param value - The value to store (automatically stringified)
 */
export const setLocalStorage = <T>(key: string, value: T) => {
  try {
    const stringValue = JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  } catch (error) {
    console.error(`Error saving to localStorage: ${error}`);
  }
};

/**
 * Retrieve data from localStorage
 * @param key - The key under which the value is stored
 * @returns Parsed value or null if not found
 */
export const getLocalStorage = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (error) {
    console.error(`Error reading from localStorage: ${error}`);
    return null;
  }
};

/**
 * Remove data from localStorage
 * @param key - The key to remove
 */
export const removeLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage: ${error}`);
  }
};
