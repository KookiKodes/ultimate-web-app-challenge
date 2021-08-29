<script>
  export let starting = 0;
  export let min = -Infinity;
  export let max = Infinity;
  if (min > max) min = max - min + max;
  if (starting < min || starting > max) starting = min;
  let number = starting;

  // const increment = () => {
  //   const newNum = number + 1;
  //   if (newNum <= max) number++;
  // }
  const increment = () => (number + 1 <= max ? number++ : number);
  const reset = () => (number = starting);
  const decrement = () => (number - 1 >= min ? number-- : number);
</script>

<h1>{number}</h1>
<div class="container">
  <button on:click={decrement}>-</button>
  <button on:click={reset}>reset</button>
  <button on:click={increment}>+</button>
</div>

<style>
  h1 {
    font-size: 5rem;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    font-size: 2rem;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin: 0 0.25rem;
    min-width: 3.5rem;
    background: #999999;
    color: #e8e8e8;
    border: none;
  }
</style>
