import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setvalue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaultValue)
      );
    } catch (e) {
      console.log(e);
      currentValue = defaultValue;
    }
    return currentValue;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setvalue];
}
