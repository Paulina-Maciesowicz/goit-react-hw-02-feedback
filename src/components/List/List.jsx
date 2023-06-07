import React from 'react';
import { Component } from 'react';

export class List extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  static defaultProps = {
    contents: [],
  };

  static propTypes = {
    contents: Array,
  };

  list = this.props.contents;

  render() {
    return (
      <>
        <ul>
          {this.list.map((elementListy, indeks) => (
            <li key={indeks}>{elementListy}</li>
          ))}
        </ul>
      </>
    );
  }
}
