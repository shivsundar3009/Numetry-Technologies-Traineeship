// src/App.js
import React from 'react';
import ColorPicker from './components/ColorPicker';

const App = () => {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-center mt-10">Color Picker</h1>
      <ColorPicker />
    </div>
  );
};

export default App;
