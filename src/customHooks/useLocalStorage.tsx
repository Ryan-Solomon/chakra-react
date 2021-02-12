import React, { FC, useEffect, useState } from 'react';

type TProps = {
  key: string;
  defaultValue: string;
};

export function useLocalStorage({ key, defaultValue }: TProps) {
  const [storedValue, setStoredValue] = useState(
    () => localStorage.getItem(key) || null
  );

  useEffect(() => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
    localStorage.setItem(key, storedValue || defaultValue);
  }, [storedValue]);

  return { storedValue, setStoredValue };
}
