import React from 'react';
import PropTypes from 'prop-types';
import styles from './FibonacciShowResult.module.css';

export class FibonacciShowResult extends React.Component {

  constructor() {
    super();
  }

  render() {
    if (this.props.lastFib != "") {
      
      return (
      <div className={styles.FibonacciShowResult}>
        <span>Fibonacci Value:</span>
        <div>
          {this.props.lastFib}
        </div>
      </div>
      );

    } else {

      return (
        <div></div>
      );

    }
  }
}

export default FibonacciShowResult;
