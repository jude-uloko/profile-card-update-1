import {
  ArrowRight,
} from "lucide-react";

import { images } from "./images";


export default function Ingredients() {
  return (
    <section className="ingredients">
      <div className="container ingredients-inner">
        <div className="section-heading centered">
          <span className="section-tag">NO SHORTCUTS</span>
          <h2>Best quality<br /><em>ingredients.</em></h2>
          <p>We keep it simple: premium ingredients, honest cooking and flavours that speak for themselves.</p>
        </div>

        <div className="ingredient-showcase">
          <div className="ingredient-points left">
            <div><b>01</b><strong>Artisan buns</strong><span>Soft, toasted & baked fresh.</span></div>
            <div><b>02</b><strong>Ground beef</strong><span>100% premium beef.</span></div>
          </div>

          <div className="ingredient-image">
            <img src={images.hero} alt="Fresh burger ingredients" />
            <div className="ingredient-ring" />
          </div>

          <div className="ingredient-points right">
            <div><b>03</b><strong>Fresh produce</strong><span>Crisp, local & colourful.</span></div>
            <div><b>04</b><strong>Secret sauce</strong><span>Made in our kitchen.</span></div>
          </div>
        </div>

        <a className="primary-btn centered-btn" href="#menu">See our menu <ArrowRight size={16} /></a>
      </div>
    </section>
  );
}
