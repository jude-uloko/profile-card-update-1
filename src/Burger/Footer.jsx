import './style.css';
import {Logo} from './Logo'
export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div>
            <Logo />
            <p>Big flavour. Fresh ingredients.<br />Good people.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <a href="#menu">Menu</a>
            <a href="#about">About us</a>
            <a href="#story">Our story</a>
          </div>
          <div>
            <h4>Visit us</h4>
            <span>{/* <MapPin size={15} /> */} Lagos, Nigeria</span>
            <span>{/* <Clock3 size={15} /> */} Mon – Sun · 10am – 11pm</span>
            <span>{/* <Phone size={15} /> */} +234 800 123 4567</span>
          </div>
          <div>
            <h4>Follow along</h4>
            <div className="socials">
              <a href="#">{/* <Instagram />*/}</a>
              <a href="#">{/* <Facebook /> */}</a>
              <a href="#">{/* < X /> */}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 GrillHouse. All rights reserved.</span>
          <span>Made for people who love burgers.</span>
        </div>
      </div>
    </footer>
  );
}