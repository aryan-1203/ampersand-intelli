import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import ShareholderRow from "./ShareholderRow";
import OwnershipBar from "./OwnershipBar";
import Cookies from "js-cookie";
import { shareholderOptions } from "./shareholderOptions";

const OwnershipForm = ({ companyId, onNext, onBack }) => {
  const [shareholders, setShareholders] = useState([{ type: "", name: "", percentage: "", is_active: true, hasError: false }]);

  const getSelectedTypes = () => {
    return shareholders.map((shareholder) => shareholder.type);
  };

  const getAvailableOptions = (currentType) => {
    const selectedTypes = getSelectedTypes();
    return shareholderOptions.filter(
      (option) => option.value === currentType || !selectedTypes.includes(option.value)
    );
  };

  const handleInputChange = (index, field, value) => {
    const updatedShareholders = [...shareholders];
    updatedShareholders[index][field] = value;
    setShareholders(updatedShareholders);
  };

  const addShareholder = () => {
    const newShareholder = { type: "", name: "", percentage: "", is_active: true, hasError: false };
    const updatedShareholders = [...shareholders, newShareholder];
    setShareholders(updatedShareholders);
  };

  const getTotalPercentage = () =>
    shareholders.reduce((acc, curr) => acc + Number(curr.percentage || 0), 0);

  // Calculate the remaining percentage for dynamic placeholder
  const getRemainingPercentage = (index) => {
    const usedPercentage = shareholders
      .slice(0, index)
      .reduce((acc, curr) => acc + Number(curr.percentage || 0), 0);
    return Math.max(100 - usedPercentage, 0);
  };

  const saveDataToCookies = () => {
    Cookies.set("shareholders", JSON.stringify(shareholders), { expires: 10 / 1440 }); // Expires in 1 minute
  };

  const handleContinue = () => {
    saveDataToCookies();  // Save the shareholders data to cookies
    onNext();  // Move to the next step
  };

  return (
    <div className="ownership-structure-container">
      <h3 className="ownership-title">Ownership Structure</h3>
      <p className="ownership-subtitle">Get started by filling the form below</p>
      
      <OwnershipBar shareholders={shareholders} />

      <div className="label-row" style={{ display: "flex", justifyContent: "space-between", color: "white" }}>
        <div className="label-row" style={{ marginLeft: "5px", flex: 3.5, marginBottom: "10px" }}>Type</div>
        <div className="label-row" style={{ flex: 5.5 }}>Shareholder Name</div>
        <div className="label-row" style={{ flex: 1.5 }}>Holding (%)</div>
      </div>
      
      {shareholders.map((shareholder, index) => (
        <ShareholderRow
          key={index}
          index={index}
          shareholder={shareholder}
          handleInputChange={handleInputChange}
          availableOptions={getAvailableOptions(shareholder.type)}
          hasError={shareholder.hasError}
          placeholder={getRemainingPercentage(index)}  // Pass dynamic placeholder
        />
      ))}

      <button onClick={addShareholder} className="add-shareholder-button" disabled={getSelectedTypes().length >= shareholderOptions.length}>
        + Add a Shareholder
      </button>

      {getTotalPercentage() > 100 && (
        <div className="error-message-container">
          <img src="image/alert-circle.png" alt="Warning" className="warning-icon" />
          <p className="error-message-text">The total holding percentage cannot exceed 100%.</p>
        </div>
      )}

      <div className="d-flex align-items-start" style={{ gap: "5px" }}>
        <Button type="back" id="backbtn" className="btn-dark w-100 mt-3" onClick={onBack}>
          <span id="back">Back</span>
        </Button>
        <Button onClick={handleContinue} type="submit" id="continue" className="btn-dark w-100 mt-3">
          <span id="continuetext">Continue</span>
        </Button>
      </div>
    </div>
  );
};

export default OwnershipForm;
