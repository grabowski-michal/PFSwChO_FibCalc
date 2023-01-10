import React from 'react';
import styles from './FibonacciSubmit.module.css';

class FibonacciSubmit extends React.Component {
  constructor() {
    super();
    this.state = {
      fibonaccies: [0, 1]
    }

    this.handleClick = this.handleClick.bind(this);
    
  }

  calculateFibonacci (index) {
    if (index < 0) return -1;
    if (this.state.fibonaccies[index] != undefined) return this.state.fibonaccies[index];

    if (index > 30) {
      return this.calculateFibonacciLargeNumbers(index);
    }

    let fib = this.calculateFibonacci(index - 2) + this.calculateFibonacci(index - 1);
    let newFibonaccies = this.state.fibonaccies;
    newFibonaccies[index] = fib;
    this.setState({
      fibonaccies: newFibonaccies
    })
    return fib;
  }

  calculateFibonacciLargeNumbers (index) {
    if (this.state.fibonaccies[index] != undefined) return "" + this.state.fibonaccies[index];
      let A = this.calculateFibonacciLargeNumbers(index - 1);
      let B = this.calculateFibonacciLargeNumbers(index - 2);

      const ABmax = Math.max(A.length, B.length);
    
      let carry = 0, sum = '';
    
      for (let i = 1; i <= ABmax; i++) {
        let a = +A.charAt(A.length - i);
        let b = +B.charAt(B.length - i);
    
        let t = carry + a + b;
        carry = t/10 | 0;
        t %= 10;
    
        sum = (i === ABmax && carry)
          ? carry*10 + t + sum
          : t + sum;
      }
    
      let newFibonaccies = this.state.fibonaccies;
      newFibonaccies[index] = sum;
      this.setState({
        fibonaccies: newFibonaccies
      })
      return sum;
  }

  handleClick () {
    let index = parseInt(this.props.index);
    console.log(this.calculateFibonacci(index));
  }

  render() {
    return <div className={styles.FibonacciSubmit}>
      <input type="submit" value="Check it out" onClick={this.handleClick}/>
    </div>;
  }
}

export default FibonacciSubmit;