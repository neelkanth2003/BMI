import React, { useState } from 'react';
import './App.css';

function App1() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    if (weight && height) {
      const heightMeters = height / 100;
      const bmiValue = weight / (heightMeters * heightMeters);
      setBMI(bmiValue.toFixed(2));
    }
  };


  const getBMICategory = (bmiValue) => {
    if (bmiValue < 18.5) return 'Underweight';
    else if (bmiValue < 24.9) return 'Normal';
    else if (bmiValue < 29.9) return 'Overweight';
    else return 'Obesity';
  };

  return (
    <div className="container">
      <h1 className="title">BMI Calculator</h1>
      <div className="input-container">
        <label className="label">Weight (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="input"
        />
      </div>
      <div className="input-container">
        <label className="label">Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="input"
        />
      </div>
      <button onClick={calculateBMI} className="calculate-button">
        Calculate BMI
      </button>
      {bmi && (
        <div className="result">
          <p>Your BMI is: {bmi}</p>
          <div className="bmi-category">
            <p className="category-title">BMI Category:</p>
            <p className="category">{getBMICategory(parseFloat(bmi))}</p>
          </div>
        </div>
      )}

    
      <h2 className="table-title">BMI Categories</h2>
      <table className="bmi-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>BMI Range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Underweight</td>
            <td>Less than 18.5</td>
          </tr>
          <tr>
            <td>Normal</td>
            <td>18.5 - 24.9</td>
          </tr>
          <tr>
            <td>Overweight</td>
            <td>25.0 - 29.9</td>
          </tr>
          <tr>
            <td>Obesity</td>
            <td>30.0 or greater</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App1;
