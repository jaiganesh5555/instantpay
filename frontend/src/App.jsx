import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup.jsx";
import Home from "./pages/Homepage.jsx";
import Signin from "./pages/signin.jsx";
import { Dashboard } from "./pages/Dashboard.jsx"; 
import { Sendmoney } from "./pages/Sendmoney.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sendmoney" element={<Sendmoney/>}/>
      </Routes>
    </BrowserRouter>
  );
};
