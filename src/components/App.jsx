import { Counter } from './Counter/Counter';
import { Component } from 'react';

export class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  static defaultProps = {
    name: 'React',
  };

  static propTypes = {
    name: String,
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Counter />
        
      </div>
    );
  }
}
