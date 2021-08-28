import "./App.css";
// import { useState } from "react";

//* components
// import Counter from "./components/Counter";

// hooks
// import useCounter from "./hooks/useCounter";
import useCounterTwo from "./hooks/useCounterTwo";

function App() {
  // const [number, counter] = useCounter({});
  const { ref, increment, decrement, reset } =
    useCounterTwo<HTMLHeadingElement>({ min: 5, max: 2 });

  //{current: Element}

  return (
    <div className="App">
      <h1 className="counter" ref={ref}>
        1000
      </h1>
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
    </div>
  );
}

export default App;
