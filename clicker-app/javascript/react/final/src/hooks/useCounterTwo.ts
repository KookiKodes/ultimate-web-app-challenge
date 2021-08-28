import { RefObject, useRef, useEffect } from "react";

type Callback = () => void;

interface UseCounterReturn<T> {
  ref: RefObject<T>;
  reset: Callback;
  increment: Callback;
  decrement: Callback;
}

const useCounter = <T extends Element>({
  starting = 0,
  min = -Infinity,
  max = Infinity,
}): UseCounterReturn<T> => {
  if (min > max) [min, max] = [max, min];
  if (min === max) min = Math.abs(min - max) - min;
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      starting = parseInt(ref.current.textContent as string);
      if (starting > max || starting < min) starting = min;
      ref.current.textContent = starting.toString();
    }
  }, []);

  function increment() {
    if (ref.current) {
      const newNum = parseInt(ref.current.textContent as string) + 1;
      if (newNum <= max) {
        ref.current.textContent = newNum.toString();
      }
    }
  }

  function decrement() {
    if (ref.current) {
      const newNum = parseInt(ref.current.textContent as string) - 1;
      if (newNum >= min) {
        ref.current.textContent = newNum.toString();
      }
    }
  }

  function reset() {
    if (ref.current) {
      ref.current.textContent = starting.toString();
    }
  }

  return { ref, increment, decrement, reset };
};

export default useCounter;
