import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

const OverviewFundingCards = () => {
  const [overviewData, setOverviewData] = useState({});
  const [fundingData, setFundingData] = useState({});

  // Fetch data from cookies for the Overview form
  useEffect(() => {
    const storedOverviewData = Cookies.get("overviewFormData");
    if (storedOverviewData) {
      setOverviewData(JSON.parse(storedOverviewData));
    }
  }, []);

  // Fetch data from cookies for the Funding Valuation form
  useEffect(() => {
    const storedFundingData = Cookies.get("fundingValuationFormData");
    if (storedFundingData) {
      setFundingData(JSON.parse(storedFundingData));
    }
  }, []);

  return (
    <div className="of-grid">
      {/* Cards for Overview Form */}
      <div className="of-card">
        <p id="report-h">Company Name</p>
        <p id="report-p">{overviewData.companyName || "Ampersand Inc"}</p>
      </div>
      <div className="of-card">
        <p id="report-h">Industry</p>
        <p id="report-p">{overviewData.industryType || "Tech"}</p>
      </div>
      <div className="of-card">
        <p id="report-h">Location</p>
        <p id="report-p">{overviewData.country || "USA"}</p>
      </div>
      <div className="of-card">
        <p id="report-h">Business Model</p>
        <p id="report-p">{overviewData.geography || "B2B"}</p>
      </div>
      <div className="of-card">
        <p id="report-h">Year Founded</p>
        <p id="report-p">{overviewData.yearOfIncorporation || "2020"}</p>
      </div>

      {/* of-cards for Funding Valuation Form */}
      <div className="of-card">
        <p id="report-h">Stage</p>
        <p id="report-p">{fundingData.stage || "Seed"}</p>
      </div>
      <div className="of-card">
        <p id="report-h">Raised to Date</p>
        <p id="report-p">{fundingData.raisedToDate || "USD 20 Th"}</p>
      </div>
      <div className="of-card">
        <p id="report-h">Last Valuation</p>
        <p id="report-p">{fundingData.lastValuation || "USD 1.4 Mn"}</p>
      </div>
      <div className="of-card">
        <p id="report-h">Current Valuation</p>
        <p id="report-p">{fundingData.currentValuation || "USD 2.0 Mn"}</p>
      </div>
      <div className="of-card">
        <p id="report-h">Capital Requirements</p>
        <p id="report-p">{fundingData.capitalRequirements || "USD 500 Th"}</p>
      </div>
    </div>
  );
};

export default OverviewFundingCards;
