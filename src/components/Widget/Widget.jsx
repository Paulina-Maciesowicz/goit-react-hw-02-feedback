import React, { useState } from 'react';

export function Counter() {
  // Zadeklaruj nową zmienną stanu, którą nazwiemy „count”
  const [count, setCount] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h2>Please leave feedback</h2>
      <button onClick={() => setCount(count + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <p>Good: {count}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
    </div>
  );
}
// export const Widget = ({ click }) => {
//   return (
//     <div>
//       <h2>Please leave feedback</h2>
//       <button onClickGood={event => console.log(event)}>good</button>
//       <button onClickNeutral={event => console.log(event)}>neutral</button>
//       <button onClickBad={event => console.log(event)}>bad</button>
//       <div>
//         <h2>Statistics:</h2>
//         {
//           <>
//             <p>Good: {click}</p>
//             <p>Neutral: {click}</p>
//             <p>Bad: {click}</p>
//           </>
//         }
//       </div>
//     </div>
//   );
// };
