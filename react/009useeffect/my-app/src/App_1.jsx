import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const handleCountUp = (e) => {
    setCount(count + 1);
  };
  return (
    <>
      <div>{count}</div>
      <button onClick={handleCountUp}>up!</button>
    </>
  );
}
function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
