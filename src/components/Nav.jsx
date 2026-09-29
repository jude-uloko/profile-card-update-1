

export default function Nav () {
  return (
    <nav className="site-nav">
      <div className="nav-container">
        <a href="/" className="logo">
          Learn@House
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#resources">Resources</a>

          <a href="#contact" className="contact-btn">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
