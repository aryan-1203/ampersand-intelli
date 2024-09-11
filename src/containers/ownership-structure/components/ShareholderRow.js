import React, { useEffect, useState } from "react";

const ShareholderRow = ({ shareholder, index, handleInputChange, availableOptions, hasError, placeholder }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (!shareholder.type && availableOptions.length > 0) {
      handleInputChange(index, "type", availableOptions[0].value);  // Set to first available option
    }
  }, [shareholder.type, availableOptions, index, handleInputChange]);

  const handleDropdownClick = (value) => {
    handleInputChange(index, "type", value);
    setDropdownOpen(false);
  };

  return (
    <div className="ownership-form-row">
      <div
        className={`custom-dropdown ${dropdownOpen ? "open" : ""}`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <div className="selected-option">
          <span
            className={`color-box ${
              availableOptions.find((option) => option.value === shareholder.type)?.color
            }`}
          ></span>
          <span className="shareholder-option">
            {availableOptions.find((option) => option.value === shareholder.type)?.label}
          </span>
          <span className="vector-icon">
            <img src="image/Vector.png" alt="dropdown icon" />
          </span>
        </div>
        {dropdownOpen && (
          <ul className="dropdown-options">
            {availableOptions.map((option) => (
              <li
                key={option.value}
                className="dropdown-option"
                onClick={() => handleDropdownClick(option.value)}
              >
                <span className={`color-box ${option.color}`}></span>
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
      {shareholder.type !== "others" && (
        <input
          type="text"
          placeholder="Shareholder Name"
          className="ownership-input"
          value={shareholder.name}
          onChange={(e) => handleInputChange(index, "name", e.target.value)}
        />
      )}
      <input
        type="text"
        placeholder={`${placeholder}%`}  // Dynamic placeholder
        className={`percentage-input ${hasError ? "input-error" : ""}`}
        value={shareholder.percentage}
        onChange={(e) => handleInputChange(index, "percentage", e.target.value)}
      />
    </div>
  );
};

export default ShareholderRow;
