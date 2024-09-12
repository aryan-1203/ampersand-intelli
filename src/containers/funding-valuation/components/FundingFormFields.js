import React from "react";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";



const CurrencySelect = ({ id, name, value, onChange, error }) => (
  <div style={{ position: "relative", maxWidth: "98px", width: "100%" }}>
    <select
      className={`form-control ${error ? "border-danger" : ""}`}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      style={{ width: "100%", paddingRight: "30px" }}
    >
      {["USD", "EUR", "INR", "AED", "CAD", "GBP"].map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
    <img
      src="image/Vector.png"
      alt="Dropdown"
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
        height: "8px",
        width: "13px",
      }}
    />
  </div>
);

const AmountUnitSelect = ({ id, name, value, onChange, error }) => (
  <div
    style={{
      position: "absolute",
      right: "0",
      top: "0",
      height: "100%",
      display: "flex",
      alignItems: "center",
    }}
  >
    <select
      className={`form-control ${error ? "border-danger" : ""}`}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      style={{ height: "100%", width: "80px", paddingRight: "30px" }}
    >
      {["Th", "Mn"].map((unit) => (
        <option key={unit} value={unit}>
          {unit}
        </option>
      ))}
    </select>
    <img
      src="image/Vector.png"
      alt="Dropdown"
      style={{
        position: "absolute",
        right: "10px",
        top: "50%",
        transform: "translateY(-50%)",
        pointerEvents: "none",
        height: "8px",
        width: "13px",
      }}
    />
  </div>
);

const FundingFormFields = ({ formik }) => (
  <div>
    <FormGroup className="form-group">
      <Label className="overview-form-labels" for="stage">
        Stage
      </Label>
      <div className="custom-select-wrapper">
        <select
          id="stage"
          className={`form-control ${
            formik.errors.stage ? "border-danger" : ""
          }`}
          name="stage"
          value={formik.values.stage}
          onChange={formik.handleChange}
        >
          {[
            "Select Stage",
            "Pre-Seed",
            "Seed",
            "Bridging",
            "Series A",
            "Series B",
            "Secondary",
            "Venture Debt",
          ].map((stage) => (
            <option key={stage} value={stage}>
              {stage}
            </option>
          ))}
        </select>
        <span className="dropdown-icon">
          <img src="image/Vector.png" alt="Dropdown" />
        </span>
      </div>
      <FormFeedback className="d-block">{formik.errors.stage}</FormFeedback>
    </FormGroup>
    <FormGroup className="form-group">
      <Label className="overview-form-labels" for="raisedToDate">
        Raised to Date
      </Label>
      <div className="d-flex align-items-start" style={{ gap: "5px" }}>
        <CurrencySelect
          id="currency"
          name="currency"
          value={formik.values.currency}
          onChange={formik.handleChange}
          error={formik.errors.currency}
        />
        <div
          className="amountRaised"
          style={{ position: "relative", width: "100%" }}
        >
          <input
            className={`form-control ${
              formik.errors.amountRaised ? "border-danger" : ""
            }`}
            id="amountRaised"
            type="text"
            placeholder="Enter amount"
            name="amountRaised"
            value={formik.values.amountRaised}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ paddingRight: "80px" }}
          />
          <AmountUnitSelect
            id="amountUnit"
            name="amountUnit"
            value={formik.values.amountUnit}
            onChange={formik.handleChange}
            error={formik.errors.amountUnit}
          />
        </div>
      </div>
      {formik.errors.currency && (
        <FormFeedback className="d-block">
          {formik.errors.currency}
        </FormFeedback>
      )}
      {formik.errors.amountRaised && (
        <FormFeedback className="d-block">
          {formik.errors.amountRaised}
        </FormFeedback>
      )}
      {formik.errors.amountUnit && (
        <FormFeedback className="d-block">
          {formik.errors.amountUnit}
        </FormFeedback>
      )}
    </FormGroup>
    <div className="grid-container">
      <FormGroup className="form-group">
        <Label className="overview-form-labels" for="lastValuation">
          Last Valuation
        </Label>
        <div className="d-flex align-items-start" style={{ gap: "5px" }}>
          <CurrencySelect
            id="lvcurrency"
            name="lvcurrency"
            value={formik.values.lvcurrency}
            onChange={formik.handleChange}
            error={formik.errors.lvcurrency}
          />
          <div
            className="lastValuation"
            style={{ position: "relative", width: "100%" }}
          >
            <input
              className={`form-control ${
                formik.errors.lastValuation ? "border-danger" : ""
              }`}
              id="lastValuation"
              type="text"
              placeholder="Enter Amount"
              name="lastValuation"
              value={formik.values.lastValuation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ paddingRight: "80px" }}
            />
            <AmountUnitSelect
              id="lvamountUnit"
              name="lvamountUnit"
              value={formik.values.lvamountUnit}
              onChange={formik.handleChange}
              error={formik.errors.lvamountUnit}
            />
          </div>
        </div>
        {formik.errors.lvcurrency && (
          <FormFeedback className="d-block">
            {formik.errors.lvcurrency}
          </FormFeedback>
        )}
        {formik.errors.lastValuation && (
          <FormFeedback className="d-block">
            {formik.errors.lastValuation}
          </FormFeedback>
        )}
        {formik.errors.lvamountUnit && (
          <FormFeedback className="d-block">
            {formik.errors.lvamountUnit}
          </FormFeedback>
        )}
      </FormGroup>
      <FormGroup className="form-group">
        <Label className="overview-form-labels" for="currentValuation">
          Current Valuation
        </Label>
        <div className="d-flex align-items-start" style={{ gap: "5px" }}>
          <div
            className="currentValuation"
            style={{ position: "relative", width: "100%" }}
          >
            <input
              className={`form-control ${
                formik.errors.currentValuation ? "border-danger" : ""
              }`}
              id="currentValuation"
              type="text"
              placeholder="Enter Amount"
              name="currentValuation"
              value={formik.values.currentValuation}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{ paddingRight: "80px" }}
            />
            <AmountUnitSelect
              id="cvamountUnit"
              name="cvamountUnit"
              value={formik.values.cvamountUnit}
              onChange={formik.handleChange}
              error={formik.errors.cvamountUnit}
            />
          </div>
        </div>
        {formik.errors.currentValuation && (
          <FormFeedback className="d-block">
            {formik.errors.currentValuation}
          </FormFeedback>
        )}
        {formik.errors.cvamountUnit && (
          <FormFeedback className="d-block">
            {formik.errors.cvamountUnit}
          </FormFeedback>
        )}
      </FormGroup>
    </div>
    <FormGroup className="form-group">
      <Label className="overview-form-labels" for="capitalRequirements">
        Capital Requirements
      </Label>
      <div className="d-flex align-items-start" style={{ gap: "5px" }}>
        <CurrencySelect
          id="crcurrency"
          name="crcurrency"
          value={formik.values.crcurrency}
          onChange={formik.handleChange}
          error={formik.errors.crcurrency}
        />
        <div
          className="capitalRequirements"
          style={{ position: "relative", width: "100%" }}
        >
          <input
            className={`form-control ${
              formik.errors.capitalRequirements ? "border-danger" : ""
            }`}
            id="capitalRequirements"
            type="text"
            placeholder="Enter amount"
            name="capitalRequirements"
            value={formik.values.capitalRequirements}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ paddingRight: "80px" }}
          />
          <AmountUnitSelect
            id="cramountUnit"
            name="cramountUnit"
            value={formik.values.cramountUnit}
            onChange={formik.handleChange}
            error={formik.errors.amountUnit}
          />
        </div>
      </div>
      {formik.errors.crcurrency && (
        <FormFeedback className="d-block">
          {formik.errors.crcurrency}
        </FormFeedback>
      )}
      {formik.errors.capitalRequirements && (
        <FormFeedback className="d-block">
          {formik.errors.capitalRequirements}
        </FormFeedback>
      )}
      {formik.errors.amountUnit && (
        <FormFeedback className="d-block">
          {formik.errors.amountUnit}
        </FormFeedback>
      )}
    </FormGroup>
  </div>
);

export default FundingFormFields;
