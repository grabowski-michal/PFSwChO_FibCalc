import React, { useState } from "react";

import './App.css';
import FibonacciIndexInput from './components/FibonacciIndexInput/FibonacciIndexInput';
import FibonacciSubmit from './components/FibonacciSubmit/FibonacciSubmit';
import FibonacciShowResult from './components/FibonacciShowResult/FibonacciShowResult';
import FibonacciFooter from './components/FibonacciFooter/FibonacciFooter';

function App() {
  const [index, setIndex] = useState(10);
  const [lastFib, setLastFib] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <FibonacciIndexInput onSetIndex={setIndex} />
        <FibonacciSubmit index={index} onSetLastFib={setLastFib} />
        <FibonacciShowResult lastFib={lastFib} />
      </header>
      <footer>
        <FibonacciFooter />
      </footer>
    </div>
  );
}

export default App;
