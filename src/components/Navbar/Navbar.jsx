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
    // Toggle aria-expanded attribute on the button
    document.getElementById("menu-toggle").setAttribute("aria-expanded", !mobileMenuOpen);
  };

  return (
    <header className={`site-header ${sticky ? "dark-nav" : ""} ${mobileMenuOpen ? "mobile-open" : ""}`}>
      <div className="container">
        <nav className="main-navigation">
          <a href="#home" className="logo-link">
            <img src={logo} alt="Edusity Logo" className="logo" />
          </a>
          
          <button 
            id="menu-toggle"
            className="menu-toggle" 
            onClick={toggleMobileMenu}
            aria-controls="primary-menu"
            aria-expanded="false"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <span className="hamburger"></span>
            <span className="sr-only">Menu</span>
          </button>
          
          <ul id="primary-menu" className="nav-menu" aria-hidden={mobileMenuOpen ? "false" : "true"}>
            {navItems.map((item, index) => (
              <li key={index} className="menu-item">
                {item.isButton ? (
                  <a href={item.href} className="btn nav-button">
                    {item.name}
                  </a>
                ) : (
                  <a href={item.href} className="nav-link">
                    {item.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Navbar;
