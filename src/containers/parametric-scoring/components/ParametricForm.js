import React, { useState } from "react";
import { Button } from "reactstrap";
import { useRouter } from "next/router"; // Import useRouter
import Cookies from 'js-cookie'; // Import js-cookie
import ParameterRow from "./ParameterRow";
import { parameters, subtexts } from "./constants";

const ParametricForm = ({ initialScores = parameters.map(() => 5), onSubmit, onBack, formData }) => {
  const [scores, setScores] = useState(initialScores);
  const router = useRouter(); // Initialize useRouter

  const handleSliderChange = (index, value) => {
    const updatedScores = [...scores];
    updatedScores[index] = value;
    setScores(updatedScores);
  };

  const handleCalculate = async () => {
    console.log("Selected scores:", scores);
    Cookies.set("parametricScores", JSON.stringify(scores)); // Store scores in cookies
    const finalData = {
      ...formData,
      parametricScores: scores,
    };

    try {
      // const response = await axios.post('YOUR_FINAL_ENDPOINT_URL', finalData);
      // console.log('Submit response:', response.data);
      // if (onSubmit) {
      //   onSubmit(response.data);
      // }
      router.push("/report");
    } catch (error) {
      console.error('Submit error:', error);
    }
  };

  return (
    <div className="parametric-scoring-container">
      <h3 className="parametric-title">Parametric Scoring</h3>
      <p className="parametric-subtitle">Use the slider and set the required field attributes</p>

      {parameters.map((param, index) => (
        <ParameterRow
          key={index}
          param={param}
          subtext={subtexts[index]}
          score={scores[index]}
          onSliderChange={(value) => handleSliderChange(index, value)}
        />
      ))}

      <div className="d-flex align-items-start" style={{ gap: "5px" }}>
        <Button type="button" id="backbtn" className="btn-dark w-100 mt-3" onClick={onBack}>
          <span id="back">Back</span>
        </Button>
        <Button
          type="button"
          id="continue"
          className="btn-dark w-100 mt-3"
          onClick={handleCalculate}
        >
          <span id="continuetext">Generate Report</span>
        </Button>
      </div>
    </div>
  );
};

export default ParametricForm;
