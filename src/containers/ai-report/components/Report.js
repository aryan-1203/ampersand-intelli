// import React from "react";
// import RadarChart from "./RadarChart";
// import OwnershipBar from "../../ownership-structure/components/OwnershipBar";

// const ReportPage = ({ formData }) => {
//   return (
//     <div className="report-page">
//       <h1>Company Overview Report</h1>
//       <h3>Summary of Company Details</h3>
//       <div className="grid-container">
//         <div className="grid-item">
//           <h4>Company Name</h4>
//           <p>{formData.form1.companyName}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Company Description</h4>
//           <p>{formData.form1.companyDescription}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Year of Incorporation</h4>
//           <p>{formData.form1.yearOfIncorporation}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Country</h4>
//           <p>{formData.form1.country}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Total Founders</h4>
//           <p>{formData.form1.totalFounders}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Employees Number</h4>
//           <p>{formData.form1.employeesNumber}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Founder Names</h4>
//           <p>{formData.form1.founderNames}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Industry Type</h4>
//           <p>{formData.form1.industryType}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Geography</h4>
//           <p>{formData.form1.geography}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Funding Stage</h4>
//           <p>{formData.form2.stage}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Raised To Date</h4>
//           <p>{formData.form2.raisedToDate}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Last Valuation</h4>
//           <p>{formData.form2.lastValuation}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Current Valuation</h4>
//           <p>{formData.form2.currentValuation}</p>
//         </div>
//         <div className="grid-item">
//           <h4>Capital Requirements</h4>
//           <p>{formData.form2.capitalRequirements}</p>
//         </div>
//       </div>
//       <h3>Ownership Structure</h3>
//       <OwnershipBar shareholders={formData.form3} />
//       <h3>Parametric Scoring</h3>
//       <RadarChart scores={formData.parametricScores} parameters={["Parameter 1", "Parameter 2", "Parameter 3", "Parameter 4", "Parameter 5"]} />
//     </div>
//   );
// };

// export default ReportPage;

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import RadarChart from "./RadarChart";
import { parameters } from "../../parametric-scoring/components/constants";

const Report = () => {
  const [scores, setScores] = useState(null);

  useEffect(() => {
    const dataFromCookie = Cookies.get('parametricScores');
    if (dataFromCookie) {
      setScores(JSON.parse(dataFromCookie));
    }
  }, []);

  if (scores === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="report-container">
      <RadarChart scores={scores} parameters={parameters} />
    </div>

  );

  
};

export default Report;
