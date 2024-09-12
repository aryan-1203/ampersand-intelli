import React from 'react';

const steps = [
  'Company Overview',
  'Funding & Valuation',
  'Ownership Structure',
  'Parametric Scoring',
];

const Sidebar = ({ activeStep }) => {
  return (
    <div className="sidebar">
      {steps.map((step, index) => (
        <div 
          key={index} 
          className={`sidebar-item ${activeStep >= index + 2 ? 'active' : ''}`} 
        >
          <div className="box">
            <div className={`dot ${activeStep >= index + 2 ? 'completed' : ''}`} />
          </div>
          {step}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
