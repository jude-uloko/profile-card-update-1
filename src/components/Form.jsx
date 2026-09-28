import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.name.trim()) nextErrors.name = 'Name is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) nextErrors.email = 'Valid email is required';
    if (!formData.password) nextErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) nextErrors.confirmPassword = 'Passwords do not match';

    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="Enter your name"
          onChange={handleChange}
        />
        {errors.name && <small>{errors.name}</small>}

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        {errors.email && <small>{errors.email}</small>}

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          placeholder="Create a password"
          onChange={handleChange}
        />
        {errors.password && <small>{errors.password}</small>}

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          placeholder="Confirm your password"
          onChange={handleChange}
        />
        {errors.confirmPassword && <small>{errors.confirmPassword}</small>}
      </div>

      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

