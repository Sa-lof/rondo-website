import React, { useState } from "react";
import "./Nav.css";
import logoImage from '../../assets/logos/LOGO_B.PNG';
import { Link } from "react-router-dom";

function Nav() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <input
        type="checkbox"
        id="active"
        checked={isActive}
        onChange={toggleMenu}
        style={{ display: "none" }}
      />
      <div className="navbar">
        <Link to="/" onClick={toggleMenu}>
          <img src={logoImage} alt="Logo" className="logo" />
        </Link>
        <label htmlFor="active" className="menu-btn">
          <span></span>
        </label>
      </div>
      <label htmlFor="active" className="close"></label>
      <div className={`wrapper ${isActive ? "active" : ""}`}>
      {isActive && <label htmlFor="active" className="close">&#10006;</label>} {/* Close button */}
      <ul>
        <li><a href="/" onClick={toggleMenu}>Inicio</a></li>
        <li><a href="/nosotros" onClick={toggleMenu}>Nosotros</a></li>
        <li><a href="/cine" onClick={toggleMenu}>Audiovisual</a></li>
        <li><a href="/teatro" onClick={toggleMenu}>Teatro</a></li>
        <li><a href="/servicios" onClick={toggleMenu}>Servicios</a></li>
        <li><a href="/contacto" onClick={toggleMenu}>Contacto</a></li>
      </ul>
    </div>
    </>
  );
}

export default Nav;
