import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => setCount(count + 1);

  // Function to decrement the count
  const decrement = () => setCount(count - 1);

  return (
    <div className="Counter">
      <div className="counter-container">
     
        <h1>Counter App</h1>

       
        <div>Count: {count}</div> 
        
        <br />

     
        <button onClick={increment} className="increment-btn">Increment</button>
        <button onClick={decrement} className="decrement-btn">Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
