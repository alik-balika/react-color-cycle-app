import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [colorCodes, setColorCodes] = useState({
    red: {
      hex: "FF",
      beginningIndex: 1,
      endIndex: 3,
      increment: 0,
      running: false,
    },
    green: {
      hex: "FF",
      beginningIndex: 3,
      endIndex: 5,
      increment: 0,
      running: false,
    },
    blue: {
      hex: "FF",
      beginningIndex: 5,
      endIndex: 7,
      increment: 0,
      running: false,
    },
  });
  const [delay, setDelay] = useState(250);

  useInterval(
    () => {
      incrementColor("red");
    },
    colorCodes["red"].running ? delay : null
  );

  useInterval(
    () => {
      incrementColor("green");
    },
    colorCodes["green"].running ? delay : null
  );

  useInterval(
    () => {
      incrementColor("blue");
    },
    colorCodes["blue"].running ? delay : null
  );

  const incrementColor = (color) => {
    const hex = parseInt(colorCodes[color].hex, 16);
    const increment = parseInt(colorCodes[color].increment);
    const sum = (hex + increment) % 255;
    handleColorCodeInput(color, sum.toString(16));
  };

  // big shoutout to my boi Dan Abramov for this article:
  // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
  function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

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

  const toggleStartButton = (color) => {
    setColorCodes({
      ...colorCodes,
      [color]: {
        ...colorCodes[color],
        running: !colorCodes[color].running,
      },
    });
  };

  const handleDelayInput = (delayValue) => {
    if (isNaN(delayValue)) return;
    setDelay(delayValue);
  };

  return (
    <div style={{ height: "100vh", backgroundColor: backgroundColor }}>
      <div className="header">
        <h1>React Color Cycle App</h1>
        <h2 style={{ marginBottom: "10px" }}>Color: {backgroundColor}</h2>
        <label htmlFor="delay">Delay (ms) </label>
        <input
          type="text"
          id="delay"
          value={delay}
          onChange={(e) => handleDelayInput(e.target.value)}
          disabled={Object.keys(colorCodes).some((c) => colorCodes[c].running)}
        />
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
                disabled={colorCodes[color].running}
              />
              <label htmlFor={color + "IncrementValue"}>Increment Value</label>
              <input
                type="text"
                id={color + "IncrementValue"}
                value={colorCodes[color].increment}
                onChange={(e) => handleIncrementInput(color, e.target.value)}
                disabled={colorCodes[color].running}
              />
              <button onClick={() => toggleStartButton(color)}>
                {colorCodes[color].running ? "Stop" : "Start"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
