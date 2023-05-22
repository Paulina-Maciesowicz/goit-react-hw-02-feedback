import { useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = count + neutral + bad;
  const percentage = count / total ;

  return (
    <div>
      <h2>Please leave feedback</h2>
      <button onClick={() => setCount(count + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <p>Good: {count}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percentage}</p>
    </div>
  );
}
