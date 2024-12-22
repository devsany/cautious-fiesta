// src/components/ComplexForm.js
import React, { useState } from "react";

const ComplexForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    country: "",
    city: "",
    age: "",
    gender: "",
    acceptTerms: false,
    hobbies: [],
    bio: "",
    education: "",
    profilePicture: null,
    preferredContact: "email",
    agreeToPrivacyPolicy: false,
    skills: "",
    experience: "",
    additionalInfo: "",
    jobInterests: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, multiple } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else if (type === "file") {
      setFormData({
        ...formData,
        [name]: e.target.files[0],
      });
    } else if (multiple) {
      const selectedOptions = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormData({
        ...formData,
        [name]: selectedOptions,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
      console.log("Form Submitted:", formData);
    }
  };

  const validateForm = () => {
    let errors = {};
    let formValid = true;

    if (!formData.name) {
      errors.name = "Name is required";
      formValid = false;
    }
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email is required";
      formValid = false;
    }
    if (!formData.phone || formData.phone.length !== 10) {
      errors.phone = "Phone number must be 10 digits";
      formValid = false;
    }
    if (!formData.password) {
      errors.password = "Password is required";
      formValid = false;
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords must match";
      formValid = false;
    }
    if (!formData.age || formData.age < 18 || formData.age > 100) {
      errors.age = "Please provide a valid age (18-100)";
      formValid = false;
    }
    if (!formData.acceptTerms) {
      errors.acceptTerms = "You must accept the terms";
      formValid = false;
    }
    if (!formData.agreeToPrivacyPolicy) {
      errors.agreeToPrivacyPolicy = "You must agree to the privacy policy";
      formValid = false;
    }

    setFormErrors(errors);
    return formValid;
  };

  return (
    <div>
      <h1>Complex Form Example</h1>
      {formSubmitted ? (
        <div>
          <h2>Thank you for submitting the form!</h2>
          <p data-testid="header-paragraph">We will get back to you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Name Field */}
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
          {formErrors.name && <div className="error">{formErrors.name}</div>}

          {/* Email Field */}
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          {formErrors.email && <div className="error">{formErrors.email}</div>}

          {/* Phone Field */}
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
          {formErrors.phone && <div className="error">{formErrors.phone}</div>}

          {/* Password Field */}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          {formErrors.password && (
            <div className="error">{formErrors.password}</div>
          )}

          {/* Confirm Password Field */}
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
          />
          {formErrors.confirmPassword && (
            <div className="error">{formErrors.confirmPassword}</div>
          )}

          {/* Age Field */}
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
            min="18"
            max="100"
          />
          {formErrors.age && <div className="error">{formErrors.age}</div>}

          {/* Gender Radio Buttons */}
          <fieldset>
            <legend>Gender</legend>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleChange}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={formData.gender === "other"}
                onChange={handleChange}
              />
              Other
            </label>
          </fieldset>

          {/* Accept Terms Checkbox */}
          <label>
            <input
            data-testid='term-condition-checkbox'
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
            />
            I accept the terms and conditions
          </label>
          {formErrors.acceptTerms && (
            <div className="error">{formErrors.acceptTerms}</div>
          )}

          {/* Bio Textarea */}
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            rows="4"
          ></textarea>

          {/* Profile Picture Upload */}
          <label htmlFor="profilePicture">Profile Picture</label>
          <input
          data-testid='file-input-box'
            type="file"
            id="profilePicture"
            name="profilePicture"
            onChange={handleChange}
          />

          {/* Preferred Contact Radio Buttons */}
          <fieldset>
            <legend>Preferred Contact Method</legend>
            <label>
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === "email"}
                onChange={handleChange}
              />
              Email
            </label>
            <label>
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === "phone"}
                onChange={handleChange}
              />
              Phone
            </label>
          </fieldset>

          {/* Privacy Policy Checkbox */}
          <label>
            <input
            data-testid='term-condition-checkbox-2'
              type="checkbox"
              name="agreeToPrivacyPolicy"
              checked={formData.agreeToPrivacyPolicy}
              onChange={handleChange}
            />
            I agree to the privacy policy
          </label>
          {formErrors.agreeToPrivacyPolicy && (
            <div className="error">{formErrors.agreeToPrivacyPolicy}</div>
          )}

          {/* Skills Dropdown */}
          <label htmlFor="skills">Skills</label>
          <select
            id="skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          >
            <option value="">Select your skills</option>
            <option value="javascript">JavaScript</option>
            <option value="react">React</option>
            <option value="node">Node.js</option>
            <option value="css">CSS</option>
            <option value="html">HTML</option>
          </select>

          {/* Experience Field */}
          <label htmlFor="experience">Years of Experience</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            placeholder="Enter your years of experience"
            min="0"
            max="50"
          />

          {/* Job Interests Textarea */}
          <label htmlFor="jobInterests">Job Interests</label>
          <textarea
            id="jobInterests"
            name="jobInterests"
            value={formData.jobInterests}
            onChange={handleChange}
            placeholder="Tell us about your job interests"
            rows="4"
          ></textarea>

          {/* Submit Button */}
          <button type="submit">Submit Form</button>
        </form>
      )}
    </div>
  );
};

export default ComplexForm;
