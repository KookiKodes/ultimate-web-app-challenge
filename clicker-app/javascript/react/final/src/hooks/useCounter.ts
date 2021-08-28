import { useState, useRef } from "react";

type Callback = () => void;

interface UseCounterMethods {
  reset: Callback;
  increment: Callback;
  decrement: Callback;
}

type UseCounterReturn = [number, UseCounterMethods];

const useCounter = ({
  starting = 0,
  min = -Infinity,
  max = Infinity,
}): UseCounterReturn => {
  if (min > max) [min, max] = [max, min];
  if (min === max) min = Math.abs(min - max) - min;
  if (starting > max || starting < min) starting = min;
  const [number, setNumber] = useState(starting);

  function increment() {
    setNumber((number) => {
      const newNumber = number + 1;
      if (newNumber <= max) {
        return newNumber;
      }
      return number;
    });
  }

  function decrement() {
    setNumber((number) => {
      const newNumber = number - 1;
      if (newNumber >= min) {
        return newNumber;
      }
      return number;
    });
  }

  function reset() {
    setNumber(starting);
  }

  return [number, { increment, decrement, reset }];
};

export default useCounter;
