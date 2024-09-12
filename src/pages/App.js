import React, { useState } from 'react';
import { useRouter } from "next/router"
import OverviewForm from '../containers/company-overview/components/overviewForm';
import FundingForm from "../containers/funding-valuation/components/FundingForm";
import OwnershipForm from "../containers/ownership-structure/components/OwnershipForm";
import ParametricForm from "../containers/parametric-scoring/components/ParametricForm";
import Head from "next/head";
import Link from "next/link";
import { Col, Row } from "reactstrap";
import Sidebar from '../components/sidebar/sidebar';
import axios from "axios";
import Report from '../containers/ai-report/components/Report';

const App = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
    form1: { companyName: "", companyDescription: "", yearOfIncorporation: "", country: "", totalFounders: "", employeesNumber: "", founderNames: "", industryType: "", geography: "" },
    form2: { stage: "", raisedToDate: "", lastValuation: "", currentValuation: "", capitalRequirements: "",},
    form3: { type: "", name: "", percentage: ""},
    parametricScores: [5, 5, 5, 5, 5],
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const updateFormData = (step, data) => {
    setFormData((prev) => ({
      ...prev,
      [`form${step}`]: data,
    }));
  };

  const handleFinalSubmit = async () => {
    try {
      const payload = { ...formData.form1, ...formData.form2, ...formData.form3, ...formData.parametricScores };
      await axios.post("/api/submit", payload);
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  const renderForm = () => {
    if (router.pathname === "/report") {
        return <Report />;
      }
    switch (currentStep) {
      case 1:
        return <OverviewForm data={formData.form1} onNext={(data) => { updateFormData(1, data); setCurrentStep(2); }} />;
      case 2:
        return <FundingForm data={formData.form2} onBack={() => setCurrentStep(1)} onNext={(data) => { updateFormData(2, data); setCurrentStep(3); }} />;
      case 3:
        return <OwnershipForm data={formData.form3} onBack={() => setCurrentStep(2)} onNext={(data) => { updateFormData(3, data); setCurrentStep(4); }} />;
      case 4:
        return <ParametricForm data={formData.parametricScores} onBack={() => setCurrentStep(3)} onSubmit={handleFinalSubmit} />;
      default:
        return null;
    }
  };

  const getImageSrc = () => {
    switch (currentStep) {
      case 1:
        return "image/overview.png";
      case 2:
        return "image/funding.png";
      case 3:
        return "image/ownership.png";
      case 4:
        return "image/parametric.png";
      default:
        return "none";
    }
  };

  return (
    <>
      <Head>
        <title>Ampersand Intelligence</title>
      </Head>
      <section className="section">
        <div className="grain-container">
          <img id="grain" src="image/Rectangle.png" alt="Background Texture" />
        </div>
        <div className="company-overview-page">
          <Row className="header-row mx-0 align-items-center">
            <Col className="company-overview-col" xs={4} lg={2}>
              <Link className="d-inline-block" href="/">
                <img className="d-none d-lg-block" src="image/logo-white.png" />
                <img className="d-lg-none d-block" src="image/logo-white.png" />
              </Link>
            </Col>
            <Col className="empty-col d-none d-lg-block" lg={6}></Col>
            <Col xs={8} className="company-email-col" lg={3}>
              <a href="/">
                <span>Ampersand Intelligence</span>
              </a>
            </Col>
          </Row>
          <Row className="mx-0 w-100 content-row">
            <Col className="contact-content-col px-0" lg={2}>
              <Sidebar activeStep={currentStep} />
            </Col>
            <Col className="contact-form-col d-flex justify-content-start " lg={7}>
              <div className="contact-content-form w-100">
                <div className="contact-form-center">
                  {renderForm()}
                </div>
              </div>
            </Col>
            <Col className="reach-out-col px-0" lg={3} md={3} xs={12}>
              <div className="reach-out-content">
                <img className="reach-out-image" src={getImageSrc()} alt="Form Image" />
              </div>
            </Col>
          </Row>
          <div>
            <img className="gradient" src="image/gradient.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
