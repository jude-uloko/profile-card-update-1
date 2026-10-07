import { useState } from "react";
import {Logo} from './Logo'
// import

import {
  ArrowRight,
  Menu,
  Phone,
  X
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["Home", "Menu", "About", "Story", "Contact"];

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Logo />

        <nav className={open ? "nav-links open" : "nav-links"}>
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="phone-link" href="tel:+2348001234567">
            <Phone size={15} />
            +234 800 123 4567
          </a>
          <a className="nav-order" href="#menu">
            Order now
            <ArrowRight size={15} />
          </a>
        </div>

        <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}
