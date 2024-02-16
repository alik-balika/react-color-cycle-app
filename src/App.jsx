import React, { useState } from "react";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");

  const handleUserInput = (e) => {
    if (e.target.value.length > 7) return;

    console.log(e.target.value);
    console.log(backgroundColor);

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
      </div>
    </div>
  );
};

export default App;
