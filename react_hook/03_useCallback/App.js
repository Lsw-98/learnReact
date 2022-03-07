import React, { useState, useCallback } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1)
  }, [count])

  return (
    < div className="App" >
      <h2>{count}</h2>
      <button onClick={handleClick}>+1</button>
    </div >
  );
}

export default App;
