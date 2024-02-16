import React, { useState } from "react";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [colorCodes, setColorCodes] = useState({
    red: { hex: "FF", beginningIndex: 1, endIndex: 3, increment: 0 },
    green: { hex: "FF", beginningIndex: 3, endIndex: 5, increment: 0 },
    blue: { hex: "FF", beginningIndex: 5, endIndex: 7, increment: 0 },
  });
  // const [isRunning, setIsRunning] = useState(false);

  // const beginColorChange = () => {
  //   setIsRunning(!isRunning);
  // };

  const handleColorCodeInput = (color, hexValue) => {
    if (hexValue !== "" && !isValidHex(hexValue)) return;

    hexValue = hexValue.toUpperCase();

    setColorCodes({
      ...colorCodes,
      [color]: {
        ...colorCodes[color],
        hex: hexValue,
      },
    });

    if (hexValue === "") return;

    const newBackgroundColor =
      backgroundColor.slice(0, colorCodes[color].beginningIndex) +
      hexValue.padStart(2, "0") +
      backgroundColor.slice(colorCodes[color].endIndex, backgroundColor.length);

    setBackgroundColor(newBackgroundColor);
  };

  const isValidHex = (hex) => {
    const hexRegex = /^[0-9a-fA-F]+$/;

    return hexRegex.test(hex);
  };

  const handleIncrementInput = (color, incrementValue) => {
    if (isNaN(incrementValue)) return;
    setColorCodes({
      ...colorCodes,
      [color]: {
        ...colorCodes[color],
        increment: incrementValue,
      },
    });
  };

  return (
    <div style={{ height: "100vh", backgroundColor: backgroundColor }}>
      <div className="header">
        <h1>React Color Cycle App</h1>
        <h2>Color: {backgroundColor}</h2>
      </div>
      <div className="options">
        {Object.keys(colorCodes).map((color) => {
          return (
            <div className="colorCode" key={color}>
              <label htmlFor={color}>Color Code </label>
              <input
                type="text"
                id={color}
                maxLength={2}
                value={colorCodes[color].hex}
                onChange={(e) => handleColorCodeInput(color, e.target.value)}
              />
              <label htmlFor={color + "IncrementValue"}>Increment Value</label>
              <input
                type="text"
                id={color + "IncrementValue"}
                value={colorCodes[color].increment}
                onChange={(e) => handleIncrementInput(color, e.target.value)}
              />
              {/* <button onClick={beginColorChange}>
            {isRunning ? "Stop" : "Start"}
          </button> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
