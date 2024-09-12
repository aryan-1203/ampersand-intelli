import React, { useState } from "react";
import { useFormik } from "formik";
import {
  Alert,
  Button,
  Card,
  CardBody,
  Form,
  FormFeedback,
  FormGroup,
  Label,
} from "reactstrap";
import { countries } from "./countries";
import { validationSchema } from "./validationSchema";
import {
  years,
  totalFoundersOptions,
  employeesOptions,
  industryOptions,
  geographyOptions,
} from "./dropdownOptions";
import Cookies from "js-cookie";

const OverviewForm = ({ data, onNext }) => {
  const [formMessage, setFormMessage] = useState(null);
  const [submitForm, setSubmitForm] = useState(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);

  const handleSelectChange = (e) => {
    formik.handleChange(e);
    setIsOptionSelected(e.target.value !== ""); // Check if an option is selected
  };

  const formik = useFormik({
    initialValues: data,
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      // Store form data in cookies
      Cookies.set("overviewFormData", JSON.stringify(values));
      console.log(
        "Form data stored in cookies:",
        Cookies.get("overviewFormData")
      );
      onNext(values);
    },
  });

  return (
    <Card>
      <CardBody>
        <h3 className="overview-form-title">Company Overview</h3>
        <p className="overview-form-subtitle">
          Get started by filling the form below
        </p>
        {formMessage && (
          <Alert color={formMessage.type}>{formMessage.message}</Alert>
        )}
        {submitForm && <Alert color="success">{submitForm.message}</Alert>}

        <Form onSubmit={formik.handleSubmit} noValidate>
          <FormGroup>
            <Label className="overview-form-labels" for="companyName">
              Company Name
            </Label>
            <input
              className={`form-control ${
                formik.errors.companyName ? "border-danger" : ""
              }`}
              name="companyName"
              value={formik.values.companyName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Ampersand Inc."
            />
            <FormFeedback className="d-block">
              {formik.errors.companyName}
            </FormFeedback>
          </FormGroup>

          <FormGroup>
            <Label className="overview-form-labels" for="companyDescription">
              Company Description
            </Label>
            <textarea
              className={`form-control ${
                formik.errors.companyDescription ? "border-danger" : ""
              }`}
              name="companyDescription"
              id="companyDescription"
              value={formik.values.companyDescription}
              onChange={formik.handleChange}
              placeholder="Write a short description"
              rows={2}
            />
            <FormFeedback className="d-block">
              {formik.errors.companyDescription}
            </FormFeedback>
          </FormGroup>

          <div className="grid-container">
            <FormGroup className="form-group">
              <Label className="overview-form-labels" for="yearOfIncorporation">
                Year of Incorporation
              </Label>
              <div className="input-group">
                <span className="input-group-prepend">
                  <img
                    src="image/calendar.png"
                    alt="Calendar"
                    className="calendar-icon"
                  />
                </span>
                <span className="divider"></span>
                <select
                  id="yearOfIncorporation"
                  className={`form-control ${
                    formik.errors.yearOfIncorporation ? "border-danger" : ""
                  }`}
                  name="yearOfIncorporation"
                  value={formik.values.yearOfIncorporation}
                  onChange={handleSelectChange}
                >
                  <option value="">YYYY</option> {/* Placeholder */}
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
                <span className="dropdown-icon">
                  <img src="image/Vector.png" alt="Dropdown" />
                </span>
              </div>
              <FormFeedback className="d-block">
                {formik.errors.yearOfIncorporation}
              </FormFeedback>
            </FormGroup>

            <FormGroup className="form-group">
              <Label className="overview-form-labels" for="country">
                Country
              </Label>
              <div className="custom-select-wrapper">
                <select
                  className={`form-control ${
                    formik.errors.country ? "border-danger" : ""
                  }`}
                  id="country"
                  name="country"
                  value={formik.values.country}
                  onChange={handleSelectChange}
                >
                  <option value="">Select a country</option>
                  {countries.map((country, index) => (
                    <option key={index} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <span className="dropdown-icon">
                  <img src="image/Vector.png" alt="Dropdown" />
                </span>
              </div>
              <FormFeedback className="d-block">
                {formik.errors.country}
              </FormFeedback>
            </FormGroup>

            <FormGroup className="form-group">
              <Label className="overview-form-labels" for="totalFounders">
                Total Founders
              </Label>
              <div className="custom-select-wrapper">
                <select
                  id="totalFounders"
                  className={`form-control ${
                    formik.errors.totalFounders ? "border-danger" : ""
                  }`}
                  name="totalFounders"
                  value={formik.values.totalFounders}
                  onChange={handleSelectChange}
                >
                  <option value="">Select number of founders</option>{" "}
                  {totalFoundersOptions}
                </select>
                <span className="dropdown-icon">
                  <img src="image/Vector.png" alt="Dropdown" />
                </span>
              </div>
              <FormFeedback className="d-block">
                {formik.errors.totalFounders}
              </FormFeedback>
            </FormGroup>

            <FormGroup className="form-group">
              <Label className="overview-form-labels" for="employeesNumber">
                Number of Employees
              </Label>
              <div className="custom-select-wrapper">
                <select
                  id="employeesNumber"
                  className={`form-control ${
                    formik.errors.employeesNumber ? "border-danger" : ""
                  }`}
                  name="employeesNumber"
                  value={formik.values.employeesNumber}
                  onChange={handleSelectChange}
                >
                  <option value="">Select number of employees</option>{" "}
                  {employeesOptions}
                </select>
                <span className="dropdown-icon">
                  <img src="image/Vector.png" alt="Dropdown" />
                </span>
              </div>
              <FormFeedback className="d-block">
                {formik.errors.employeesNumber}
              </FormFeedback>
            </FormGroup>
          </div>

          <FormGroup className="form-group">
            <Label className="overview-form-labels" for="founderNames">
              Name of the Founder / Co-Founders
            </Label>
            <input
              className={`form-control ${
                formik.errors.founderNames ? "border-danger" : ""
              }`}
              type="name"
              placeholder="John Doe, Dohn Joe"
              name="founderNames"
              value={formik.values.founderNames}
              onChange={formik.handleChange}
            />
            <FormFeedback className="d-block">
              {formik.errors.founderNames}
            </FormFeedback>
          </FormGroup>
          <div className="grid-container">
            <FormGroup className="form-group">
              <Label className="overview-form-labels" for="industryType">
                Industry Type
              </Label>
              <div className="custom-select-wrapper">
                <select
                  id="industryType"
                  className={`form-control ${
                    formik.errors.industryType ? "border-danger" : ""
                  }`}
                  name="industryType"
                  value={formik.values.industryType}
                  onChange={handleSelectChange}
                >
                  <option value="">Select an industry</option> {industryOptions}
                </select>
                <span className="dropdown-icon">
                  <img src="image/Vector.png" alt="Dropdown" />
                </span>
              </div>
              <FormFeedback className="d-block">
                {formik.errors.industryType}
              </FormFeedback>
            </FormGroup>

            <FormGroup className="form-group">
              <Label className="overview-form-labels" for="geography">
                Geography
              </Label>
              <div className="custom-select-wrapper">
                <select
                  id="geography"
                  className={`form-control ${
                    formik.errors.geography ? "border-danger" : ""
                  }`}
                  name="geography"
                  value={formik.values.geography}
                  onChange={handleSelectChange}
                >
                  <option value="">Select geography</option> {/* Placeholder */}
                  {geographyOptions}
                </select>
                <span className="dropdown-icon">
                  <img src="image/Vector.png" alt="Dropdown" />
                </span>
              </div>
              <FormFeedback className="d-block">
                {formik.errors.geography}
              </FormFeedback>
            </FormGroup>
          </div>
          <Button type="submit" id="continue" className="btn-dark w-100 mt-3">
            <span id="continuetext">Continue</span>
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default OverviewForm;
