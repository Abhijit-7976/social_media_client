import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import "./app.scss";
import Layout from "./components/layout/Layout";
import Loading from "./components/loading/Loading";
import axios from "./config/axiosInstance";
import { useAuth } from "./contexts/AuthContext";
import Home from "./pages/home/Home";
import Login from "./pages/login-register/Login";
import Register from "./pages/login-register/Register";
import Profile from "./pages/profile/Profile";

const ProtectedRoute = ({ children }) => {
  const { setCurUser } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verify = async () => {
      try {
        setIsLoading(true);
        const res = await axios.post("/auth/verify");
        setCurUser(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setCurUser(null);
        navigate("/login");
      }
    };
    verify();
  }, [setCurUser, navigate]);

  if (isLoading) return <Loading />;
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
          <Route
            index
            element={<Home />}
          />
          <Route
            path="profile/:username"
            element={<Profile />}
          />
        </Route>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route
          path="/register"
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
