import { useEffect, useRef } from "react";
import {InputChangeEvent} from '../type/type.app'

const useDebounce = (callback:(e:InputChangeEvent) => void, delay:number) => {

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const debouncedCallback = (e:InputChangeEvent) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback(e);
    }, delay);
  };

  return debouncedCallback;
}

export {useDebounce}