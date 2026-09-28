import { useState } from "react";
import "./Form.css";

export default function SignupPage() {
  const [ formData, setFormData ] = useState( {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors ] uses

  return (
    <form className="signup-form" onSubmit={hSubmit}>
      <h2>Create Account</h2>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          onChange={(e) => console.log(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={(e) => console.log(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

