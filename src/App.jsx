import { useState } from "react";

export default function App() {
  // useState hook to manage counter value
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "1rem", padding: "0.5rem 1rem" }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ padding: "0.5rem 1rem" }}
      >
        Decrement
      </button>
    </div>
  );
}
