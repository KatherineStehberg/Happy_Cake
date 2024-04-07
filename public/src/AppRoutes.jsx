import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./routes/HomePage.jsx";
import Contact from "./routes/Contact.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Route to Home component */}
      <Route path="/" element={<HomePage />} />
      {/* Route to Contact component */}
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;

