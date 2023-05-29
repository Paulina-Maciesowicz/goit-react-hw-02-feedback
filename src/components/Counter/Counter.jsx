import React from 'react';

export class Counter extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.good = this.good.bind(this);
    this.neutral = this.neutral.bind(this);
    this.bad = this.bad.bind(this);
  }

  state = {
    // counter: 0,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  good() {
    this.setState(prevStateGood => ({ good: prevStateGood.good + 1 }));
  }
  neutral() {
    this.setState(prevStateNeutral => ({
      neutral: prevStateNeutral.neutral + 1,
    }));
  }
  bad() {
    this.setState(prevStateBad => ({ bad: prevStateBad.bad + 1 }));
  }
  // decrement() {
  //   this.setState ({ counter: this.state.counter - 1})
  // }

  render() {
    return (
      <>
        <h2>
          Please leave feedback
          {/* {this.state.counter} */}
        </h2>
        <button onClick={this.good}>good</button>
        <button onClick={this.neutral}>neutral</button>
        <button onClick={this.bad}>bad</button>
        <ul>
          <li>good {this.state.good}</li>
          <li>neutral {this.state.neutral}</li>
          <li>bad {this.state.bad}</li>
        </ul>
      </>
    );
  }
}

// import { useState } from 'react';

// export function Counter() {
//   const [count, setCount] = useState(0);
//   const [neutral, setNeutral] = useState(0);
//   const [bad, setBad] = useState(0);
//   const total = count + neutral + bad;
//   const percentage = count / total ;

//   return (
//     <div>
//       <h2>Please leave feedback</h2>
//       <button onClick={() => setCount(count + 1)}>Good</button>
//       <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
//       <button onClick={() => setBad(bad + 1)}>Bad</button>
//       <p>Good: {count}</p>
//       <p>Neutral: {neutral}</p>
//       <p>Bad: {bad}</p>
//       <p>Total: {total}</p>
//       <p>Positive feedback: {percentage}</p>
//     </div>
//   );
// }
