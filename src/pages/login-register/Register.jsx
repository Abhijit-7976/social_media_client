import { CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../config/axiosInstance";
import "./login-register.scss";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const rePassword = useRef();
  const [inputs, setInputs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!inputs) return;
    if (inputs.password !== inputs.rePassword) {
      setError("passwords don't match");
      return;
    }

    async function registerUser() {
      if (!inputs) return;
      try {
        setIsLoading(true);
        await axios.post("/auth/register", inputs);
        setError(null);
        setIsLoading(false);
        navigate("/");
      } catch (err) {
        setIsLoading(false);
        setError(err.response.data);
      }
    }
    registerUser();
  }, [inputs, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    setInputs({
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      rePassword: rePassword.current.value,
    });
  };

  return (
    <div className="register">
      <div className="card">
        <div className="form">
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              name="username"
              required
              ref={username}
            />
            <input
              type="email"
              placeholder="email"
              name="email"
              required
              ref={email}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              minLength={6}
              required
              ref={password}
            />
            <input
              type="password"
              placeholder="confirm password"
              name="rePassword"
              minLength={6}
              required
              ref={rePassword}
            />
            <span className="err">{error}</span>
            <button className="btn btn--purple">
              {isLoading ? (
                <CircularProgress
                  color="inherit"
                  size="20px"
                />
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
        <div className="greeting">
          <h1>Welcome to Our Friendly Community!</h1>
          <p>
            We&apos;re thrilled to have you become a part of our close-knit
            community. Connect with wonderful people, express yourself, and
            spread positivity.
          </p>
          <span>Already Part of Our Community?</span>
          <Link
            to="/login"
            className="btn btn--white">
            {isLoading ? (
              <CircularProgress
                color="inherit"
                size="20px"
              />
            ) : (
              "Login"
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
