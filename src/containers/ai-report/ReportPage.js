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
import VideoAnimation from "./components/VideoAnimation";

const ReportPage = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
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
  const handleAnimationEnd = () => {
    setIsAnimationComplete(true);
  };

  const handleDownload = () => {
    // Hide the sidebar by setting its display to none
    const sidebarElement = document.querySelector(".contact-content-col");
    const shareButton = document.querySelector(".report-button"); // Select the Share Report button
  
    if (sidebarElement) {
      sidebarElement.style.display = "none";
    }
    
    if (shareButton) {
      shareButton.style.display = "none"; // Hide the Share Report button
    }
  
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
  
      // Show the sidebar and Share Report button again after generating the PDF
      if (sidebarElement) {
        sidebarElement.style.display = "block";
      }
  
      if (shareButton) {
        shareButton.style.display = "block"; // Show the Share Report button again
      }
    });
    Cookies.remove("overviewFormData");
    Cookies.remove("shareholders");
    Cookies.remove("fundingValuationFormData");
    Cookies.remove("parametricScores");
  };
  

  return (
    <>
      <Head>
        <title>Ampersand Report</title>
      </Head>
      {!isAnimationComplete && <VideoAnimation onAnimationEnd={handleAnimationEnd} />}  {/* Show video until it's done */}
      {isAnimationComplete && (
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
            <Col
              className="contact-form-col d-flex justify-content-start "
              lg={7}
            >
              <div className="contact-content-form w-100">
                <div
                  className="d-flex contact-form-center"
                  style={{
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "start",
                  }}
                >
                  <div className="card">
                    <div className="card-body">
                      <div className="report-heading">
                        <div className="title-section">
                          <h2>
                            AI Report <span className="icon">✦</span>
                          </h2>
                          <p>Generated by Ampersand Proprietary Algorithm</p>
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
                            <div
                              key={option.value}
                              className="color-scheme-item"
                            >
                              <div
                                className={`color-box ${option.color}`}
                              ></div>
                              <span className="color-label">
                                {option.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="spider-structure-container">
                        <div className="title-line-wrapper">
                          <p id="report-spider-title">
                            Investment Readiness Graph
                          </p>
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
                      <Button
                        className="report-button"
                        onClick={handleDownload}
                        style={{
                          width: "700px",
                          height: "60px",
                          color: "black",
                          fontWeight: 600,
                          backgroundColor: "#C7F83F", // Initial background color
                          border: "1px solid #000", // Optional border
                          boxShadow: "2px #1D201F", // Optional shadow
                          transition: "background-color 0.3s, color 0.3s", // Smooth transition
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "white"; // Change background color on hover
                          e.target.style.color = "black"; // Ensure text color remains black
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "#C7F83F"; // Revert background color on hover end
                          e.target.style.color = "black"; // Ensure text color remains black
                        }}
                      >
                        Share Report
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col className="reach-out-col px-0" lg={3} md={3} xs={12}>
              <div className="reach-out-content">
                <img className="reach-out-image" src="image/report.png" alt="Form Image" />
              </div>
            </Col>
          </Row>
          <div>
            <img className="gradient" src="image/gradient.png" />
          </div>
        </div>
      </section>
      )}
    </>
  );
};

export default ReportPage;
