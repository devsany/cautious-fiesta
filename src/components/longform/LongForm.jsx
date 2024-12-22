// src/components/LongForm.js
import React, { useState } from "react";

const LongForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    acceptTerms: false,
    bio: "",
    favoriteColor: "#ff0000",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="long-form">
      <h1>Long Form Example</h1>
      <h2>Section 1</h2>
      <div>
        <img src="hck.jpg" alt="a person with laptop" />
      </div>
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

      {/* Age Field */}
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age"
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Enter your age"
        min="18"
        max="100"
        required
      />

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

      {/* Terms Checkbox */}
      <label>
        <input
          data-testid="term-and-condition"
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={handleChange}
        />
        I accept the terms and conditions
      </label>

      {/* Bio Textarea */}
      <label htmlFor="bio">Bio</label>
      <textarea
        data-testid="select-bio"
        id="bio"
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        placeholder="Tell us about yourself"
        rows="4"
      ></textarea>

      {/* Favorite Color Picker */}
      <label htmlFor="favoriteColor">Favorite Color</label>
      <input
        data-testid="select-color"
        type="color"
        id="favoriteColor"
        name="favoriteColor"
        value={formData.favoriteColor}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <button type="submit">Submit Form</button>

      {/* File Upload */}
      <label htmlFor="fileUpload">Upload your resume</label>
      <input
        type="file"
        id="fileUpload"
        name="fileUpload"
        data-testid="file-upload"
        onChange={handleChange}
      />

      {/* Select Dropdown */}
      <label htmlFor="country">Country</label>
      <select
        id="country"
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="usa">United States</option>
        <option value="canada">Canada</option>
        <option value="uk">United Kingdom</option>
        <option value="india">India</option>
      </select>

      {/* Multiple Select Dropdown */}
      <label htmlFor="languages">Languages Known</label>
      <select
        data-testid="select-language"
        id="languages"
        name="languages"
        value={formData.languages}
        onChange={handleChange}
        multiple
      >
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
        <option value="french">French</option>
        <option value="german">German</option>
      </select>

      {/* Button Group */}
      <fieldset>
        <legend>Preferred Communication</legend>
        <label>
          <input
            type="radio"
            name="communication"
            value="email"
            checked={formData.communication === "email"}
            onChange={handleChange}
          />
          Email
        </label>
        <label>
          <input
            type="radio"
            name="communication"
            value="phone"
            checked={formData.communication === "phone"}
            onChange={handleChange}
          />
          Phone
        </label>
      </fieldset>
    </form>
  );
};

export default LongForm;
