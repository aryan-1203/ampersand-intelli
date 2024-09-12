import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  companyName: Yup.string().required("Company name is required"),
  companyDescription: Yup.string().required("Company description is required"),
  yearOfIncorporation: Yup.string()
    .required("Year of Incorporation is required")
    .notOneOf([""], "Please select a valid year"),
  country: Yup.string()
    .required("Country is required")
    .notOneOf([""], "Please select a valid country"),
  totalFounders: Yup.string()
    .required("Total Founders are required")
    .notOneOf([""], "Please select the number of founders"),
  employeesNumber: Yup.string()
    .required("Number of Employees is required")
    .notOneOf([""], "Please select the number of employees"),
    founderNames: Yup.string().required("Founder Names are required"),
  industryType: Yup.string()
    .required("Industry type is required")
    .notOneOf([""], "Please select an industry"),
  geography: Yup.string()
    .required("Geography is required")
    .notOneOf([""], "Please select a geography"),
});
