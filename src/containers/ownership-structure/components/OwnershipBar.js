import React from "react";
import { shareholderOptions } from "./shareholderOptions";

const OwnershipBar = ({ shareholders }) => {
    
  const getBarSections = () =>
    shareholders
      .filter((shareholder) => shareholder.percentage > 0)
      .map((shareholder, index) => {
        const option = shareholderOptions.find(
          (opt) => opt.value === shareholder.type
        );
        return (
          <div
            key={index}
            className={`bar-section ${option.color}`}
            style={{
              width: `${shareholder.percentage}%`,
              transition: "width 0.5s ease",
            }}
          >
            <span className="bar-text">{`${shareholder.percentage}%`}</span>
          </div>
        );
      });

  return <div className="ownership-bar-container">{getBarSections()}</div>;
};

export default OwnershipBar;
