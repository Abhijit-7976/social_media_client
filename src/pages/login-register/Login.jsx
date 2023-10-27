import { CircularProgress } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../config/axiosInstance";
import "./login-register.scss";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();
  const [inputs, setInputs] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setInputs({
      email: email.current.value,
      password: password.current.value,
    });
  };

  useEffect(() => {
    async function loginUser() {
      // if (!inputs) return;
      try {
        setIsLoading(true);
        const res = await axios.post("/auth/login", inputs);
        setIsLoading(false);
        console.log(res.data);
        if (res.data) {
          navigate("/");
        }
      } catch (err) {
        setIsLoading(false);
        setError(err.response.data);
      }
    }
    loginUser();
  }, [inputs, navigate]);

  return (
    <div className="login">
      <div className="card">
        <div className="greeting">
          <h1>Back for More Fun? Let&apos;s Dive In!</h1>
          <p>
            Hello again, friend! The fun never stops here. Dive back into the
            action, explore new horizons, and stay connected with your loved
            ones.
          </p>
          <span>Ready to join the fun?</span>
          <Link
            className="btn btn--white"
            to="/register">
            {isLoading ? (
              <CircularProgress
                color="inherit"
                size="20px"
              />
            ) : (
              "Register"
            )}
          </Link>
        </div>
        <div className="form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="email"
              name="email"
              required
              ref={email}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              required
              ref={password}
            />
            <span className="err">{inputs && error}</span>
            <button className="btn btn--purple">
              {isLoading ? (
                <CircularProgress
                  color="inherit"
                  size="20px"
                />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
