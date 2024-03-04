import React, { useState } from 'react';
import './App.css';
const App = () => {
  const [formData, setFormData] = useState({
    inputValue: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      inputValue: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Przesłane dane:', formData);
  };

  return (
    <div>
      <h1>React Formularz</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Wprowadź dane:
          <input
            type="text"
            value={formData.inputValue}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
