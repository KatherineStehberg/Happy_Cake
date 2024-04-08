import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./src/components/Navbar";
import AppRoutes from "./AppRoutes";
import 'bootstrap/dist/css/bootstrap.min.css';

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

