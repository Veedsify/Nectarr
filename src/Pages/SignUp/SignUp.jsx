import React from "react";
import "./SignUp.css";
import { NavLink } from "react-router-dom";
import signuplogo from "../../assets/Images/signup-logo.png";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const nav = useNavigate()

  return (
    <section className="signup-wrapper">
      <div className="signup-container">
        <article className="signup-header">
          <div className="signup-logo">
            <img src={signuplogo} alt="Logo" />
          </div>
          <div className="signup-login-link">
            <p>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
          </div>
        </article>

        <section className="signup-form-section">
          <h1>Create an account</h1>
          <p className="signup-subtext">Sign up now and unlock exclusive access!</p>

          <form className="signup-form">
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                aria-label="First name"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                aria-label="Last name"
                required
              />
            </div>
            <div className="input-group">
              <select name="gender" aria-label="Gender" required>
                <option value="" disabled selected>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="prefer_not_to_say">Prefer not to say</option>
              </select>
              <input
                type="tel"
                name="tel"
                placeholder="Tel"
                aria-label="Telephone"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                name="location"
                placeholder="Location"
                aria-label="Location"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email"
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                aria-label="Confirm password"
                required
              />
            </div>
            <div className="signup-btn">
              <Button type="submit"  onClick={()=>nav('./profile')}>Sign Up</Button>
            </div>
          </form>

          <p className="signup-terms-text">
            By Clicking Sign Up, you agree to our{" "}
            <NavLink to="/terms">terms and conditions</NavLink>
          </p>
        </section>
      </div>
    </section>
  );
};

export default SignUp;
