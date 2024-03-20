import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function handleClickIncrement() {
    setCount(count + 1);
  }
  function handleClickDecrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Count value = {count}</h1>
      <button onClick={handleClickIncrement}>Increment</button>
      <button onClick={handleClickDecrement}>Decrement</button>
    </div>
  );
}
