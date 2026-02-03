import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount((value) => value + 1)}>
      count is {count}
    </button>
  );
};
