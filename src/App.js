import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('Option 1');

  const handleButtonClick = () => {
    alert('wygrales skrzynke wina');
  };

  const handleComboBoxChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <h1>wapienna street </h1>
      <button onClick={handleButtonClick}>KPierdolnij w przycisk</button>
      <select value={selectedOption} onChange={handleComboBoxChange}>
        <option value="Option 1">Uretek</option>
        <option value="Option 2">Geremek</option>
        <option value="Option 3">Artuditu</option>
      </select>
    </div>
  );
}

export default App;