import React, { useState, useEffect } from "react";
import { Card, CardBody, Button, Form, Alert } from "reactstrap";
import { useFormik } from "formik";
import Cookies from "js-cookie";
import FundingFormFields from "./FundingFormFields";
import { validationSchema } from "./validationSchema";

const FundingForm = ({ data, onNext, onBack }) => {
  const [formMessage, setFormMessage] = useState(null);
  const [submitForm, setSubmitForm] = useState(null);
  
  const formik = useFormik({
    initialValues: {
      stage: data.stage || "",
      raisedToDate: data.raisedToDate || "",
      currency: data.currency || "USD",
      amountRaised: data.amountRaised || "",
      amountUnit: data.amountUnit || "Th",
      lastValuation: data.lastValuation || "",
      lvcurrency: data.lvcurrency || "USD",
      lvamountUnit: data.lvamountUnit || "Th",
      currentValuation: data.currentValuation || "",
      cvamountUnit: data.cvamountUnit || "Th",
      capitalRequirements: data.capitalRequirements || "",
      crcurrency: data.crcurrency || "USD",
      cramountUnit: data.cramountUnit || "Th",
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      // Concatenate values to desired format
      const formattedValues = {
        stage: values.stage,
        raisedToDate: `${values.currency} ${values.amountRaised} ${values.amountUnit}`,
        lastValuation: `${values.lvcurrency} ${values.lastValuation} ${values.lvamountUnit}`,
        currentValuation: `${values.lvcurrency} ${values.currentValuation} ${values.cvamountUnit}`,
        capitalRequirements: `${values.crcurrency} ${values.capitalRequirements} ${values.cramountUnit}`,
      };

      Cookies.set('fundingValuationFormData', JSON.stringify(formattedValues));
      console.log('Form data stored in cookies:', Cookies.get('fundingValuationFormData'));
      onNext(formattedValues);
    },
  });

  return (
    <Card>
      <CardBody>
        <h3 className="overview-form-title">Funding & Valuation</h3>
        <p className="overview-form-subtitle">Enter the details below</p>

        {formMessage && (
          <div className="mt-4">
            <Alert color="danger">{formMessage.message}</Alert>
          </div>
        )}
        {submitForm && (
          <div className="mt-4">
            <Alert color="success">{submitForm.message}</Alert>
          </div>
        )}

        <Form onSubmit={formik.handleSubmit} noValidate>
          <FundingFormFields formik={formik} />
          <div className="d-flex align-items-start" style={{ gap: "5px" }}>
            <Button
              type="button"
              className="btn-dark w-100 mt-3"
              onClick={onBack}
            >
              Back
            </Button>
            <Button
              onClick={() => {
                formik.validateForm().then((errors) => {
                  if (Object.keys(errors).length === 0) {
                    formik.handleSubmit();
                    onNext(formik.values);
                  } else {
                    formik.setTouched({
                      stage: true,
                      raisedToDate: true,
                      lastValuation: true,
                      currentValuation: true,
                      capitalRequirements: true,
                    });
                  }
                });
              }}
              type="button"
              id="continue"
              className="btn-dark w-100 mt-3"
            >
              <span id="continuetext">Continue</span>
            </Button>
          </div>
        </Form>
      </CardBody>
    </Card>
  );
};

export default FundingForm;
