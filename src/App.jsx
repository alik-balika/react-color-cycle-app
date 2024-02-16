import React, { useState } from "react";

const RED = "red";
const GREEN = "green";
const BLUE = "blue";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [colorCodes, setColorCodes] = useState({
    [RED]: { hex: "FF", beginningIndex: 1, endIndex: 3 },
    [GREEN]: { hex: "FF", beginningIndex: 3, endIndex: 5 },
    [BLUE]: { hex: "FF", beginningIndex: 5, endIndex: 7 },
  });
  // const [isRunning, setIsRunning] = useState(false);
  // const [increment, setIncrement] = useState("");

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

    if (hexValue.length === 1) hexValue = "0" + hexValue;

    const newBackgroundColor =
      backgroundColor.slice(0, colorCodes[color].beginningIndex) +
      hexValue +
      backgroundColor.slice(colorCodes[color].endIndex, backgroundColor.length);

    setBackgroundColor(newBackgroundColor);
  };

  const isValidHex = (hex) => {
    const hexRegex = /^[0-9a-fA-F]+$/;

    return hexRegex.test(hex);
  };

  // const handleIncrementInput = (e) => {
  //   if (e.target.value.length > 7) return;

  //   setIncrement(e.target.value.toUpperCase());
  // };

  return (
    <div style={{ height: "100vh", backgroundColor: backgroundColor }}>
      <div className="header">
        <h1>React Color Cycle App</h1>
        <h2>Color: {backgroundColor}</h2>
      </div>
      <div className="options">
        {/* COLOR CODES */}
        <div className="colorCode">
          <label htmlFor={RED}>Color Code </label>
          <input
            type="text"
            id={RED}
            maxLength={2}
            value={colorCodes[RED].hex}
            onChange={(e) => handleColorCodeInput(RED, e.target.value)}
          />
          {/* <label htmlFor="incrementValue">Increment Value</label>
          <input
            type="text"
            id="incrementValue"
            value={increment}
            onChange={handleIncrementInput}
          />
          <button onClick={beginColorChange}>
            {isRunning ? "Stop" : "Start"}
          </button> */}
        </div>
        <div className="colorCode">
          <label htmlFor={GREEN}>Color Code </label>
          <input
            type="text"
            id={GREEN}
            maxLength={2}
            value={colorCodes[GREEN].hex}
            onChange={(e) => handleColorCodeInput(GREEN, e.target.value)}
          />
          {/* <label htmlFor="incrementValue">Increment Value</label>
          <input
            type="text"
            id="incrementValue"
            value={increment}
            onChange={handleIncrementInput}
          />
          <button onClick={beginColorChange}>
            {isRunning ? "Stop" : "Start"}
          </button> */}
        </div>
        <div className="colorCode">
          <label htmlFor={BLUE}>Color Code </label>
          <input
            type="text"
            id={BLUE}
            maxLength={2}
            value={colorCodes[BLUE].hex}
            onChange={(e) => handleColorCodeInput(BLUE, e.target.value)}
          />
          {/* <label htmlFor="incrementValue">Increment Value</label>
          <input
            type="text"
            id="incrementValue"
            value={increment}
            onChange={handleIncrementInput}
          />
          <button onClick={beginColorChange}>
            {isRunning ? "Stop" : "Start"}
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default App;
