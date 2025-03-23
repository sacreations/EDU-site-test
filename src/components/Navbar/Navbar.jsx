import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = [
    { name: "Home", isButton: false, href: "#home" },
    { name: "Program", isButton: false, href: "#program" },
    { name: "About Us", isButton: false, href: "#about" },
    { name: "Campus", isButton: false, href: "#campus" },
    { name: "Testimonials", isButton: false, href: "#testimonials" },
    { name: "Contact Us", isButton: true, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""} ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <img src={logo} alt="Edusity Logo" className="logo" />
      <div className="menu-toggle" onClick={toggleMobileMenu}>
        <div className="hamburger"></div>
      </div>
      <ul className="nav-menu">
        {navItems.map((item, index) => (
          <li key={index}>
            {item.isButton ? (
              <button className="btn">{item.name}</button>
            ) : (
              <a href={item.href}>{item.name}</a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
