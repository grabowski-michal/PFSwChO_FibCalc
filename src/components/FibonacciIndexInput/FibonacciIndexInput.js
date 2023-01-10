import React from 'react';
import styles from './FibonacciIndexInput.module.css';

function FibonacciIndexInput({ onSetIndex }) {
  function handleChange (e) {
    onSetIndex(e.target.value);
  }

  return (
    <div className={styles.FibonacciIndexInput}>
      <label>Fibonacci index: </label>
      <input type="number" defaultValue="10" min="0" max="10000"
        onChange={handleChange}/>
    </div>
    );
}

export default FibonacciIndexInput;
