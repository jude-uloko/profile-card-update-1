import {
  ArrowRight,
  ChevronRight,
} from "lucide-react";

// import { Categories } from "./Categories";

<Categories />

export default function CategoryGrid() {
  return (
    <section className="categories" id="menu">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-tag">EXPLORE THE MENU</span>
            <h2>Something for <em>everyone.</em></h2>
          </div>
          <a className="text-link" href="#menu">View full menu <ChevronRight size={18} /></a>
        </div>

        <div className="category-grid">
          {categories.map((item) => (
            <article className={`category-card ${item.color}`} key={item.title}>
              <div className="category-text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button className="dark-pill">Explore <ArrowRight size={13} /></button>
              </div>
              <img src={item.image} alt={item.title} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
