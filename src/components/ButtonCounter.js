import React, { useState } from 'react';

function ButtonCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Button clicked {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default ButtonCounter;
