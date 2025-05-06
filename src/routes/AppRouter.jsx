import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../features/auth/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { useSelector } from "react-redux";

const AppRouter = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Routes>
      <Route path="/login" element={!token ? <Login /> : <Navigate to="/" />} />
      <Route path="/" element={token ? <Home /> : <Navigate to="/login" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
