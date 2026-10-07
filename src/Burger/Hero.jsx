import {
  ArrowRight,
} from "lucide-react";

import { images } from "./images";
export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <div className="container hero-copy">
          <div className="eyebrow"><span /> OUR SIGNATURE BURGER</div>
          <h1>The<br /><em>Double</em><br />Decker.</h1>
          <p>
            Two juicy beef patties, crisp lettuce, fresh tomato, red onion,
            melted cheese and our secret house sauce — stacked high.
          </p>

          <div className="rating">
            <span className="stars">★★★★★</span>
            <span>4.9 / 5</span>
            <span className="muted">(2.4k reviews)</span>
          </div>

          <div className="hero-bottom">
            <div>
              <span className="price-label">Starting from</span>
              <strong>₦12,900</strong>
            </div>
            <a className="primary-btn" href="#menu">
              Get yours <ArrowRight size={17} />
            </a>
          </div>

          <div className="hero-thumbs">
            {[images.hero, images.burger2, images.burger3].map((img, i) => (
              <img src={img} alt="Burger" key={img} className={i === 0 ? "active" : ""} />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-badge">100%<small>FRESH</small></div>
        <img className="hero-burger" src={images.hero} alt="Double decker burger" />
        <div className="hero-card">
          <span>01</span>
          <strong>DOUBLE<br />DECKER</strong>
          <small>Our most loved</small>
        </div>
        <div className="hero-dots"><span className="selected" /><span /><span /></div>
      </div>
    </section>
  );
}
