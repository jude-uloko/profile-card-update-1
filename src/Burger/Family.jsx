import {
  ArrowRight,
  Check,
} from "lucide-react";

import { images } from "./images";

export default function Family() {
  return (
    <section className="family" id="story">
      <div className="family-image">
        <img src={images.family} alt="Fresh ingredients and beef" />
      </div>
      <div className="family-copy">
        <span className="section-tag gold">OUR PHILOSOPHY</span>
        <h2>Family is<br /><em>everything.</em></h2>
        <p className="large-copy">
          Great food brings people together. We believe every burger should
          be made with care, served with a smile and remembered long after
          the last bite.
        </p>
        <p>
          From our kitchen to your table, we put people first — our team,
          our farmers, our neighbours and, most importantly, you.
        </p>
        <div className="family-actions">
          <a className="green-btn" href="#contact">Meet the family <ArrowRight size={16} /></a>
          <a className="light-link" href="#contact">Contact us</a>
        </div>
        <div className="values">
          <span><Check /> Fresh daily</span>
          <span><Check /> Honest food</span>
          <span><Check /> Made with love</span>
        </div>
      </div>
    </section>
  );
}
