import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import "./nav.css";

const Navigation = () => {
  return (
    <Navbar className="navbar">
      <Navbar.Brand>
        <h1>Happy Cake</h1>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Link to="/" style={{ textDecoration: "none", color: "white", fontSize: "1.3rem", marginRight: "1rem" }}>Home</Link>
        <Link to="/Contact" style={{ textDecoration: "none", color: "white", fontSize: "1.3rem" }}>Contact</Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
