import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ParameterLevelComponent from './ParameterLevelComponent';
import UniqueInvestmentReadiness from './UniqueInvestmentReadiness'; // Updated name

function CombinedComponent() {
  return (
    <section className="combined-container">
      <div className="left-section">
        <ParameterLevelComponent />
      </div>
      <div className="right-section">
        <UniqueInvestmentReadiness />
      </div>
    </section>
  );
}

export default CombinedComponent;
