import {
  ArrowRight,
} from "lucide-react";

export default function Delivery() {
  return (
    <section className="delivery" id="about">
      <div className="container delivery-grid">
        <div className="delivery-art">
          <div className="sun" />
          <div className="delivery-emoji">🛵</div>
          <div className="speed">FAST<br />DELIVERY</div>
        </div>
        <div className="delivery-copy">
          <span className="section-tag">HOT • FRESH • FAST</span>
          <h2>Really <em>fast</em><br />delivery.</h2>
          <p>Craving something delicious? Your next favourite burger is only a few clicks away.</p>
          <a className="green-btn" href="#menu">Order delivery <ArrowRight size={16} /></a>
        </div>
        <div className="join-card">
          <span className="join-icon">♥</span>
          <span className="section-tag">JOIN THE FAMILY</span>
          <h3>Don't wait.<br />Become one of us.</h3>
          <p>Good food. Good people. Great moments.</p>
          <a className="outline-btn" href="#story">Our story <ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
  );
}