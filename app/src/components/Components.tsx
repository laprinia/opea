import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Generate from "./pages/Generate";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Components = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/generate" element={<Generate />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Components;
