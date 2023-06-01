import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if(count === 0)
     alert("minimum value is 0");
    else
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div className="card">
        <h1>Counter App</h1>
        <div className="counter">
          <button onClick={handleDecrease}>-</button>
          <input type="text" value={count} readOnly />
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
