import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function InvestmentReadiness() {
  const [readinessScore, setReadinessScore] = useState(0);

  useEffect(() => {
    // Fetch the parametric scores from cookies
    const parametricScores = Cookies.get("parametricScores");
    if (parametricScores) {
      const scores = JSON.parse(parametricScores);

      // Calculate the investment readiness score
      const totalScore = scores.reduce((sum, score) => sum + score, 0);
      const averageScore = totalScore / scores.length;
      const calculatedScore = (averageScore / 10) * 100;

      setReadinessScore(calculatedScore.toFixed(0));
    }
  }, []);

  const getInvestmentTypeText = (score) => {
    if (score >= 80) {
      return "Exceptional Result";
    } else if (score >= 60) {
      return "Strong Performance";
    } else if (score >= 50) {
      return "Moderate Risk";
    } else {
      return "Low Potential";
    }
  };
  
  return (
    <section className="investment-readiness-container">
      <div className="investment-score-wrapper">
        <img
          src="image/Line.png"
          alt=""
        />
        <div className="investment-score-content">
          <p id="investment-score-description">
            Ampersand has Investment readiness of
          </p>
          <p id="investment-readiness-score">{readinessScore}%</p>
        </div>
      </div>
      <div className="investment-type">
        <div className="investment-graph-container">
          <div 
            className="investment-graph-fill" 
            style={{ width: `${readinessScore}%` }}
          />
        </div>
        <p id="investment-type-text">{getInvestmentTypeText(readinessScore)}</p>
      </div>
      <div className="investment-ai-powered">
        <div className="investment-ai-icon-wrapper">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1941bc701bdf45e1c4ad4e02923f52b5aad40afba743a3d95415b5b908a8077?placeholderIfAbsent=true&apiKey=fd75920835b44b93a987b107fef3179d"
            className="investment-ai-icon"
            alt=""
          />
        </div>
        <p id="investment-ai-description">
          The Investment score is powered by Ampersand's proprietary AI technology.
        </p>
      </div>
    </section>
  );
}

export default InvestmentReadiness;
