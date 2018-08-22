import React, { Component } from 'react';
import moment from 'moment';
import './App.css';
import Board from './components/board/Board';

export default class App extends Component {
  render() {
    const ideas = [
      {
        timestamp: moment.now().toString(2),
        title: 'test',
        blurb: 'Woofer doge clouds long woofer, fluffer such treat adorable doggo. Sub woofer wrinkler doggo pats fat boi, big ol pupper pupper. Puggo very ',
      },
      {
        timestamp: moment.now().toString(2),
        title: 'test',
        blurb: 'Woofer doge clouds long woofer, fluffer such treat adorable doggo. Sub woofer wrinkler doggo pats fat boi, big ol pupper pupper. Puggo very ',
      },
      {
        timestamp: moment.now().toString(2),
        title: 'test',
        blurb: 'Woofer doge clouds long woofer, fluffer such treat adorable doggo. Sub woofer wrinkler doggo pats fat boi, big ol pupper pupper. Puggo very ',
      },
      {
        timestamp: moment.now().toString(2),
        title: 'test',
        blurb: 'Woofer doge clouds long woofer, fluffer such treat adorable doggo. Sub woofer wrinkler doggo pats fat boi, big ol pupper pupper. Puggo very ',
      },
    ];

    return (
      <div>
          <Board ideas={ideas} />
      </div>
    );
  }
}
