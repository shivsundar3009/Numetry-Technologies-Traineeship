// src/components/ColorPicker.js
import React, { useState, useEffect } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import axios from 'axios';

const ColorPicker = () => {
  const [colors, setColors] = useState([]);
  const [hoveredColor, setHoveredColor] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/colors');
        setColors(response.data);
      } catch (error) {
        console.error('Error fetching colors:', error);
      }
    };

    fetchColors();
  }, []);

  const handleMouseEnter = (color) => {
    setHoveredColor(color);
    setCopied(false);
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copy status after 2 seconds
  };

  return (
    <div className="flex mt-10 justify-center">
      <div className="grid grid-cols-4 gap-4">
        {colors.map((color) => (
          <div
            key={color.hex}
            className="w-24 h-24"
            style={{ backgroundColor: color.hex }}
            onMouseEnter={() => handleMouseEnter(color)}
          ></div>
        ))}
      </div>
      <div className="ml-10 text-center h-32 flex flex-col justify-center items-center">
        {hoveredColor ? (
          <>
            <p className="text-lg font-semibold">Name: {hoveredColor.name}</p>
            <CopyToClipboard text={hoveredColor.name} onCopy={handleCopy}>
              <button className="px-2 py-1 mt-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-700">
                Copy Name
              </button>
            </CopyToClipboard>
            <p className="text-lg font-semibold mt-2">Hex: {hoveredColor.hex}</p>
            <CopyToClipboard text={hoveredColor.hex} onCopy={handleCopy}>
              <button className="px-2 py-1 mt-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-700">
                Copy Hex
              </button>
            </CopyToClipboard>
            {copied && <p className="text-green-500 mt-2">Copied to clipboard!</p>}
          </>
        ) : (
          <p className="text-lg font-semibold">Hover over a color</p>
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
