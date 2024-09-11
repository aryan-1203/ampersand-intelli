import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "reactstrap";
import Link from "next/link";
import Head from "next/head";
import Sidebar from "../../components/sidebar/sidebar";
import OverviewFundingCards from "./components/OverviewFundingCards";
import OwnershipBar from "../ownership-structure/components/OwnershipBar";
import Cookies from "js-cookie";
import Report from "./components/Report";
import { shareholderOptions } from "../ownership-structure/components/shareholderOptions";
import ParameterLevelComponent from "./components/InvestmentReadiness";
import InvestmentReadiness from "./components/UniqueInvestmentReadiness";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const ReportPage = () => {
  const [currentStep, setCurrentStep] = useState(5);
  const [companyDescription, setCompanyDescription] = useState("");
  const [shareholders, setShareholders] = useState([]);

  // Fetch company description and shareholders data from cookies
  useEffect(() => {
    const storedData = Cookies.get("overviewFormData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setCompanyDescription(
        parsedData.companyDescription || "No description available"
      );
    }

    const savedShareholders = Cookies.get("shareholders");
    if (savedShareholders) {
      setShareholders(JSON.parse(savedShareholders));
    }
  }, []);

  const handleDownload = () => {
    const element = document.querySelector(".company-overview-page"); // Select the entire content
    html2canvas(element, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait", // Set orientation to landscape
        unit: "px",
        format: [canvas.width, canvas.height], // Adjust the format to match screen size
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("report.pdf"); // Save as PDF
    });
  };

  return (
    <>
      <Head>
        <title>Company Overview</title>
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
                <div className="d-flex contact-form-center" style={{ display: "flex", alignItems: "start", justifyContent: "start" }}>
                  <div className="card">
                    <div className="card-body">
                      <div className="report-heading">
                        <div className="title-section">
                          <h2>AI Report <span className="icon">✦</span></h2>
                          <p>Get started by filling the form below</p>
                        </div>
                        <div className="company-code">
                          <p>Company code</p>
                          <p className="code">#AMP0124</p>
                        </div>
                      </div>
                      <div className="report-companyDescription">
                        <p id="report-p">{companyDescription}</p>
                      </div>
                      <div className="ofcards">
                        <OverviewFundingCards />
                      </div>
                      <div className="report-ownership-structure-container">
                        <div className="title-line-wrapper">
                          <p id="report-ownership-title">Ownership Structure</p>
                          <div className="title-line"></div>
                        </div>
                        <OwnershipBar shareholders={shareholders} />
                        <div className="color-scheme-grid">
                          {shareholderOptions.map((option) => (
                            <div key={option.value} className="color-scheme-item">
                              <div className={`color-box ${option.color}`}></div>
                              <span className="color-label">{option.label}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="spider-structure-container">
                        <div className="title-line-wrapper">
                          <p id="report-spider-title">Investment Readiness Graph</p>
                          <div className="title-line"></div>
                        </div>
                        <Report />
                        <section className="combined-container">
                          <div className="left-section">
                            <div className="investment-readiness-container">
                              <ParameterLevelComponent />
                            </div>
                          </div>
                          <div className="right-section">
                            <InvestmentReadiness />
                          </div>
                        </section>
                      </div>
                      <Button style={{ color: "black", fontWeight : 600 }} id="continue" className="btn-dark w-100 mt-3" onClick={handleDownload}>
                        Share Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="reach-out-col px-0" lg={3} md={3} xs={12}>
              <div className="reach-out-content"></div>
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

export default ReportPage;
