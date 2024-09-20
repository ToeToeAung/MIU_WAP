import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState<number | string>(''); 
  const [fahrenheit, setFahrenheit] = useState<number | null>(null); 

  const convertToFahrenheit = () => {
    const celsiusValue = parseFloat(celsius as string); 
    if (!isNaN(celsiusValue)) {
      const fahrenheitValue = (celsiusValue * 9/5) + 32;
      setFahrenheit(fahrenheitValue);
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>Temperature Converter (Celsius to Fahrenheit)</h2>
      <input
        type="text"
        value={celsius}
        onChange={(e) => setCelsius(e.target.value)}
        placeholder="Enter temperature in Celsius"
      />
      <button onClick={convertToFahrenheit} style={{ marginLeft: '10px' }}>Convert</button>
     
      {fahrenheit !== null && (
        <div style={{ marginTop: '20px' }}>
          <strong>Fahrenheit: {fahrenheit}°F</strong>
        </div>
      )}
    </div>
  );
};

export default TemperatureConverter;
