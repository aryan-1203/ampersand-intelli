export const years = Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i);
export const totalFoundersOptions = [...Array(10).keys()].map((num) => (
  <option key={num + 1} value={num + 1}>
    {num + 1}
  </option>
));

export const employeesOptions = [
  <option key="1-10" value="1-10">1-10 employees</option>,
  <option key="11-50" value="11-50">11-50 employees</option>,
  <option key="51-100" value="51-100">51-100 employees</option>,
  <option key="101-500" value="101-500">101-500 employees</option>,
  <option key="501-1000" value="501-1000">501-1000 employees</option>,
];

export const industryOptions = [
  <option key="AG Tech" value="AG Tech">AG Tech</option>,
  <option key="Apparel" value="Apparel">Apparel</option>,
  <option key="Deep Tech" value="Deep Tech">Deep Tech</option>,
  <option key="EV" value="EV">EV</option>,
  <option key="F&B" value="F&B">F&B</option>,
  <option key="Fashion Beauty" value="Fashion Beauty">Fashion Beauty</option>,
  <option key="Fin Tech" value="Fin Tech">Fin Tech</option>,
  <option key="Health Care" value="Health Care">Health Care</option>,
  <option key="Health Tech" value="Health Tech">Health Tech</option>,
  <option key="SAAS" value="SAAS">SAAS</option>,
  <option key="Others" value="Others">Others</option>,
];

export const geographyOptions = [
  <option key="Developed Markets" value="Developed Markets">Developed Markets</option>,
  <option key="Developing Markets" value="Developing Markets">Developing Markets</option>,
  <option key="Emerging Markets" value="Emerging Markets">Emerging Markets</option>,
  <option key="Frontier Markets" value="Frontier Markets">Frontier Markets</option>,
  <option key="Global Markets" value="Global Markets">Global Markets</option>,
  <option key="Local or Domestic Markets" value="Local or Domestic Markets">Local or Domestic Markets</option>,
  <option key="Regional Markets" value="Regional Markets">Regional Markets</option>,
];

