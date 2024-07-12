import React from "react";

const Step2 = ({ formData, errors, handleChange }) => {
  return (
    <div>
      <div className="form-group">
        <label>Address Line 1</label>
        <input
          type="text"
          name="address1"
          className={`form-control ${errors.address1 ? "is-invalid" : ""}`}
          value={formData.address1}
          onChange={handleChange}
        />
        {errors.address1 && (
          <div className="invalid-feedback">{errors.address1}</div>
        )}
      </div>
      <div className="form-group">
        <label>Address Line 2</label>
        <input
          type="text"
          name="address2"
          className="form-control"
          value={formData.address2}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>City</label>
        <input
          type="text"
          name="city"
          className={`form-control ${errors.city ? "is-invalid" : ""}`}
          value={formData.city}
          onChange={handleChange}
        />
        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
      </div>
      <div className="form-group">
        <label>State</label>
        <input
          type="text"
          name="state"
          className={`form-control ${errors.state ? "is-invalid" : ""}`}
          value={formData.state}
          onChange={handleChange}
        />
        {errors.state && <div className="invalid-feedback">{errors.state}</div>}
      </div>
      <div className="form-group">
        <label>Zip Code</label>
        <input
          type="text"
          name="zip"
          className={`form-control ${errors.zip ? "is-invalid" : ""}`}
          value={formData.zip}
          onChange={handleChange}
        />
        {errors.zip && <div className="invalid-feedback">{errors.zip}</div>}
      </div>
    </div>
  );
};

export default Step2;
