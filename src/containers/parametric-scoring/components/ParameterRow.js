import React, { useState } from "react";

const ParameterRow = ({ param, subtext, score, onSliderChange }) => {
  const [editableScore, setEditableScore] = useState(score);

  const calculateTooltipPosition = (score) => {
    const positionPercentage = (score / 10) * 100;
    return `calc(${positionPercentage}% - 10px)`;
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0 && value <= 10) {
      setEditableScore(value);
      onSliderChange(value);
    }
  };

  const handleSliderChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setEditableScore(value);
    onSliderChange(value);
  };

  return (
    <div className="parametric-row">
      <div className="row-header">
        <div className="parametric-label">
          <h3>{param}</h3>
        </div>
        <div className="parametric-slider">
          <div className="slider-container">
            <div className="tooltip-container">
              {Array.from({ length: 11 }).map((_, i) => (
                <div
                  key={i}
                  className={`tooltip ${editableScore === i ? "active" : ""}`}
                  style={{
                    left: calculateTooltipPosition(i),
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={editableScore}
              onChange={handleSliderChange}
            />
          </div>
        </div>
        <div className="parametric-value">
          <input
            type="text"
            value={editableScore.toString().padStart(2, "0")}
            onChange={handleInputChange}
            maxLength={3}
          />
        </div>
      </div>
      {/* <p className="parametric-subtext">{subtext}</p> */}
    </div>
  );
};

export default ParameterRow;
