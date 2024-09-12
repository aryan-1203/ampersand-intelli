import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  stage: Yup.string().required("Stage is required"),
  amountRaised: Yup.string().required("Raised amount is required"),
  lastValuation: Yup.string().required("Last valuation is required"),
  currentValuation: Yup.string().required("Current valuation is required"),
  capitalRequirements: Yup.string().required("Capital requirements are required"),
});
