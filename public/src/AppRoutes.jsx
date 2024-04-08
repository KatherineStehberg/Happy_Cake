import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import Contact from "./routes/Contact.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;

