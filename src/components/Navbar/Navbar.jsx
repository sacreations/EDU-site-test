import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  
  const navItems = [
    { name: "Home", isButton: false },
    { name: "Program", isButton: false },
    { name: "About Us", isButton: false },
    { name: "Campus", isButton: false },
    { name: "Testimonials", isButton: false },
    { name: "Contact Us", isButton: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Edusity Logo" className="logo" />
      <ul>
        {navItems.map((item, index) => (
          <li key={index}>
            {item.isButton ? (
              <button className="btn">{item.name}</button>
            ) : (
              item.name
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
