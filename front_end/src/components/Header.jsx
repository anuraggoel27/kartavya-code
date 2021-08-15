import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import CustomNavbar from "./CustomNavbar";
function Header() {
  return (
    <div className="header">
    <CustomNavbar/>
      <a  href="/"><h1 className="brandName">Kartavya Academy</h1></a>
      <a className="header-link2" href="/Courses">Courses</a>
    </div>
  );
}
export default Header;
