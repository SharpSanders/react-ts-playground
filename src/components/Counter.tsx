import { useState } from "react";

type CounterProps = {
  initialCount?: number;
};

export function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState<number>(initialCount);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }

  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  function handleReset() {
    setCount(initialCount);
  }

  return (
    <section>
      <h2>Counter</h2>
      <p>Count: {count}</p>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button type="button" onClick={handleDecrement}>
          -1
        </button>
        <button type="button" onClick={handleIncrement}>
          +1
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </section>
  );
}
