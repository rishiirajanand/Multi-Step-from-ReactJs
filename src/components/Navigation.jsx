import React from "react";

const Navigation = ({ currentStep, handleNext, handleBack }) => {
  return (
    <div className="d-flex justify-content-between">
      <button
        className="btn btn-secondary"
        onClick={handleBack}
        disabled={currentStep === 1}
      >
        Back
      </button>
      {currentStep < 3 && (
        <button className="btn btn-primary" onClick={handleNext}>
          Next
        </button>
      )}
      {currentStep === 3 && (
        <button
          className="btn btn-success"
          onClick={() => alert("Form submitted successfully!")}
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default Navigation;
