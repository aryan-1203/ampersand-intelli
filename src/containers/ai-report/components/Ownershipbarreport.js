// import React, { useEffect, useState } from "react";
// import Cookies from "js-cookie";
// import { shareholderOptions } from "../../ownership-structure/components/OwnershipForm";

// const OwnershipBarReport = () => {
//   const [shareholders, setShareholders] = useState([]);

// //   useEffect(() => {
// //     const storedOwnershipData = Cookies.get("ownershipFormData");
// //     if (storedOwnershipData) {
// //       const parsedData = JSON.parse(storedOwnershipData);
// //       setShareholders(parsedData);
// //     }
// //   }, []);

//   const getBarSections = () =>
//     shareholders
//       .filter((shareholder) => shareholder.st_holding_percentage > 0)
//       .map((shareholder, index) => {
//         const option = shareholderOptions.find(
//           (opt) => opt.value === shareholder.st_type
//         );
//         return (
//           <div
//             key={index}
//             className={`bar-section ${option?.color || "default-color"}`}
//             style={{
//               width: `${shareholder.st_holding_percentage}%`,
//               transition: "width 0.5s ease",
//             }}
//           >
//             <span className="bar-text">{`${shareholder.st_holding_percentage}%`}</span>
//           </div>
//         );
//       });

//   return <div className="ownership-bar-container">{getBarSections()}</div>;
// };

// export default OwnershipBarReport;
