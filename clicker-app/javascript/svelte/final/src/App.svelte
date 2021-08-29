<script>
  // import Counter from "./components/Counter.svelte";
  import { counter } from "./lib/counter";

  let [number, { increment, decrement, reset }] = counter({});
</script>

<main>
  <!-- <Counter starting={100} min={102} max={100} /> -->
  <h1>{$number}</h1>
  <div class="container">
    <button on:click={decrement}>-</button>
    <button on:click={reset}>reset</button>
    <button on:click={increment}>+</button>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: #363636;
    font-size: 10px;
    color: #e8e8e8;
  }

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
