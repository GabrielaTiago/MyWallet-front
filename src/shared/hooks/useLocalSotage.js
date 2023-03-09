import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredvalue] = useState(() => {
    if (typeof window === "undefined") return initialValue;

    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredvalue(valueToStore);

      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
}
