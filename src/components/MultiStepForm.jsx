import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Navigation from "./Navigation";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  const handleNext = () => {
    if (validateForm()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (currentStep === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.phone) newErrors.phone = "Phone is required";
    } else if (currentStep === 2) {
      if (!formData.address1) newErrors.address1 = "Address Line 1 is required";
      if (!formData.city) newErrors.city = "City is required";
      if (!formData.state) newErrors.state = "State is required";
      if (!formData.zip) newErrors.zip = "Zip Code is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h2>Multi-Step Form</h2>
        </div>
        <div className="card-body">
          {currentStep === 1 && (
            <Step1
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />
          )}
          {currentStep === 2 && (
            <Step2
              formData={formData}
              errors={errors}
              handleChange={handleChange}
            />
          )}
          {currentStep === 3 && <Step3 formData={formData} />}
        </div>
        <div className="card-footer">
          <Navigation
            currentStep={currentStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
