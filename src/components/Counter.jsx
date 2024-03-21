import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [increment_by, setIncrementBy] = useState(1);
  function handleClickIncrement() {
    setCount(count + increment_by);
  }
  function handleClickDecrement() {
    setCount(count - increment_by);
  }
  function handleClickIncrementBy() {
    setIncrementBy(increment_by + 1);
  }
  return (
    <div>
      <h1>Count value = {count}</h1>
      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>

      <h1>We are incrementing value by : {increment_by}</h1>
      <button onClick={handleClickIncrementBy}>Increment</button>
    </div>
  );
}
