import { writable } from "svelte/store";

export const counter = ({ starting = 0, min = -Infinity, max = Infinity }) => {
  if (min > max) min = max - min + max;
  if (starting < min || starting > max) starting = min;
  const number = writable(starting);

  // const decrement = () => (number - 1 >= min ? number-- : number);
  function decrement() {
    number.update((n) => (n - 1 >= min ? n - 1 : n));
  }

  // const reset = () => (number = starting);
  function reset() {
    number.update(() => starting);
  }

  // const increment = () => (number + 1 <= max ? number++ : number);
  function increment() {
    number.update((n) => (n + 1 <= max ? n + 1 : n));
  }

  return [number, { increment, decrement, reset }];
};
