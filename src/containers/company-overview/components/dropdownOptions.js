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
  <option key="CleanTech" value="CleanTech">CleanTech (Sustainability, Green Energy)</option>,
  <option key="EdTech" value="EdTech">EdTech (Educational Technology)</option>,
  <option key="E-commerce" value="E-commerce">E-commerce (Online Retail, Marketplaces)</option>,
  <option key="Fintech" value="Fintech">Fintech (Financial Technology, Payment Solutions)</option>,
  <option key="FoodTech" value="FoodTech">FoodTech (Alternative Food Sources, Delivery)</option>,
  <option key="Gaming" value="Gaming">Gaming (Video Games, Virtual Reality)</option>,
  <option key="Healthcare" value="Healthcare">Healthcare (Biotech, MedTech, HealthTech)</option>,
  <option key="Logistics" value="Logistics">Logistics (Supply Chain, Transportation)</option>,
  <option key="PropTech" value="PropTech">PropTech (Real Estate Technology)</option>,
  <option key="SaaS" value="SaaS">SaaS (Software as a Service)</option>,
  <option key="Technology" value="Technology">Technology (Software, AI, IoT, Blockchain)</option>
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

