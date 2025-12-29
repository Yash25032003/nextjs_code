import React from "react";
import { useCounterStore } from "../store/counterStore";

const Counter = () => {
  const { count, increase, decrease, reset } = useCounterStore();
  return (
    <div>
      <h2>Count is {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
