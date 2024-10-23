"use client";
import { useState } from "react";
import { isColorDark } from "./colors-theme.js"

const Home = () => {
  const [color, setColor] = useState("red");

  const colors = [
    "red",
    "green",
    "blue",
    "olive",
    "gray",
    "yellow",
    "pink",
    "purple",
    "lavender",
    "white",
    "black",
  ];

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setColor(color)}
              className={`outline-none px-4 py-1 rounded-full ${isColorDark(color) ? "text-white" : "text-black"} shadow-lg first-letter:uppercase`}
              style={{ backgroundColor: color, outlineColor: color }}
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
