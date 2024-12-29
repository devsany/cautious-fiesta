import React, { useState } from "react";

const MultiStepForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorAge, setErrorAge] = useState("");
  const [errorAddress, setErrorAddress] = useState("");

  const [formInputNumber, setFormInputNumber] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, age, address });
  };

  const handleNext = () => {
    if (!name) {
      setErrorName("Require");
      setFormInputNumber(1);
    } else if (!age) {
      setErrorAge("Require");
      setFormInputNumber(2);
    } else if (!address) {
      setErrorAddress("Require");
      setFormInputNumber(3);
    } else {
      setErrorAddress("");
      setErrorName("");
      setErrorAge("");
      setFormInputNumber((prev) => prev + 1);
    }
  };
  return (
    <div className="form-container">
      <h2 className="form-title">MultiStepForm</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Step 1: Name */}
        {formInputNumber === 1 && (
          <div className="form-step">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              required
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-input"
            />
            {<>{errorName}</>}
          </div>
        )}

        {/* Step 2: Age */}
        {formInputNumber === 2 && (
          <div className="form-step">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              required
              type="text"
              id="age"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-input"
            />
            <div>{<>{errorAge}</>}</div>
          </div>
        )}

        {/* Step 3: Address */}
        {formInputNumber === 3 && (
          <div className="form-step">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              required
              type="text"
              id="address"
              placeholder="Enter your address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-input"
            />
            <div>{<>{errorAddress}</>}</div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="form-buttons">
          {formInputNumber > 1 && (
            <button
              type="button"
              onClick={() => setFormInputNumber((prev) => prev - 1)}
              className="form-btn"
            >
              Previous
            </button>
          )}
          {formInputNumber < 3 && (
            <button type="button" onClick={handleNext} className="form-btn">
              Next
            </button>
          )}
          {formInputNumber === 3 && (
            <button type="submit" className="form-btn submit-btn">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
