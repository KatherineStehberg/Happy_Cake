import React from "react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
import Navigation from "./src/components/Navbar"; // Correct import path for Navigation
import AppRoutes from "./AppRoutes"; // Correct import path for AppRoutes
import 'bootstrap/dist/css/bootstrap.min.css'; // Import CSS file before custom components

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <AppRoutes /> 
      </div>
    </Router>
  );
};

export default App;

