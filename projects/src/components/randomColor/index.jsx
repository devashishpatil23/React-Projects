import { useState, useEffect } from "react";
import "./style.css";

export default function RandomColor() {
  const [color, setColor] = useState("#000");
  const [colorType, SetColorType] = useState("HEX");
  function randomNumber(length) {
    return Math.floor(Math.random() * length);
  }

  const generateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomNumber(hex.length)];
    }
    setColor(hexColor);
  };
  const generateRgbColor = () => {
    const r = randomNumber(256);
    const g = randomNumber(256);
    const b = randomNumber(256);

    setColor(`rgb(${r},${g},${b})`);
  };
  useEffect(() => {
    if (color === "HEX") generateHexColor();
    else generateRgbColor();
  }, [colorType]);
  return (
    <>
      <div style={{ background: color }} className="container">
        <div>
          <button
            className={colorType === "HEX" ? "active" : ""}
            onClick={() => SetColorType("HEX")}
          >
            Create Hex Color
          </button>
          <button
            className={colorType === "RGB" ? "active" : ""}
            onClick={() => SetColorType("RGB")}
          >
            Create rgb color
          </button>
          <div className="cstm-center">
            <button
              onClick={
                colorType === "HEX" ? generateHexColor : generateRgbColor
              }
            >
              Generate random color
            </button>
          </div>
        </div>

        <div className="text-center">
          <h2>{colorType} Color</h2>
          <h2>{color}</h2>
        </div>
      </div>
    </>
  );
}
