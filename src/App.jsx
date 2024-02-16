import React, { useState } from "react";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [isRunning, setIsRunning] = useState(false);

  const beginColorChange = () => {
    setIsRunning(!isRunning);
  };

  const handleUserInput = (e) => {
    if (e.target.value.length > 7) return;

    setBackgroundColor(e.target.value.toUpperCase());
  };

  return (
    <div style={{ height: "100vh", backgroundColor: backgroundColor }}>
      <div className="header">
        <h1>React Color Cycle App</h1>
      </div>
      <div className="options">
        <label htmlFor="colorCode">Color Code: </label>
        <input
          type="text"
          id="colorCode"
          value={backgroundColor}
          onChange={handleUserInput}
        />
        <button onClick={beginColorChange}>
          {isRunning ? "Stop" : "Start"}
        </button>
      </div>
    </div>
  );
};

export default App;
