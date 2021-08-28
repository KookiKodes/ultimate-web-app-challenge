import { useState } from "react";

export default function Counter({
  starting = 0,
  min = -Infinity,
  max = Infinity,
}) {
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

  return (
    <>
      <h1 className="counter">{number}</h1>
      <div className="container">
        <button className="btn" onClick={decrement}>
          -
        </button>
        <button className="btn" onClick={reset}>
          reset
        </button>
        <button className="btn" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
}
