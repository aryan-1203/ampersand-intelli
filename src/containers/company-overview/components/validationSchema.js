import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  companyName: Yup.string().required("Company name is required"),
  companyDescription: Yup.string().required("Company description is required"),
  yearOfIncorporation: Yup.string().required("Year is required"),
  country: Yup.string().required("Country is required"),
  totalFounders: Yup.string().required("Total Founders are required"),
  employeesNumber: Yup.string().required("Employees are required"),
  founderNames: Yup.string().required("Founder Names are required"),
  industryType: Yup.string().required("Industry type is required"),
  geography: Yup.string().required("Geography is required"),
});
