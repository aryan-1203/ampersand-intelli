import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
// import styles from './ParameterLevelComponent.module.css';

const parameters = [
  'Product Viability',
  'Financial Health',
  'Market Potential',
  'Sustainability',
  'Innovation',
  'Exit Potential',
  'Risk Factors',
  'Customer Traction',
  'Competitive Advantage',
  'Team Strength'
];

function ParameterLevelComponent() {
  // State to store values fetched from cookies
  const [levels, setLevels] = useState([]);

  useEffect(() => {
    // Fetch levels from the cookie
    const dataFromCookie = Cookies.get('parametricScores');
    if (dataFromCookie) {
      const fetchedLevels = JSON.parse(dataFromCookie);
      setLevels(fetchedLevels);
    }
  }, []);

  return (
    <section className="uniqueContainer">
    <header className="uniqueHeader">
      <div className="uniqueParameter">Parameter</div>
      <div className="uniqueLevel">Level</div>
    </header>
    <hr className="uniqueDivider" />
    <div className="uniqueContent">
      <div className="uniqueParameterList">
        {parameters.map((param, index) => (
          <p id='investmentgrid' key={index} className="uniqueItem">{param}</p>
        ))}
      </div>
      <div className="uniqueLevelList">
        {levels.map((level, index) => (
          <p id='numberinvestmentgrid' key={index} className="uniqueItem">{level}</p>
        ))}
      </div>
    </div>
  </section>
  );
}

export default ParameterLevelComponent;
