import { Counter } from './Widget/Widget';
import { Component } from 'react';

export class App extends Component {
  static defaultProps = {};

  static propTypes = {};

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
