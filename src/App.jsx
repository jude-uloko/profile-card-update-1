import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  Facebook,
  Instagram,
  MapPin,
  Menu,
  Phone,
  X
} from "lucide-react";
import { useState } from "react";

const images = {
  hero: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=90",
  burger2: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=85",
  burger3: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=700&q=85",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=85",
  hotdog: "https://images.unsplash.com/photo-1612392062631-94dd858cba88?auto=format&fit=crop&w=800&q=85",
  dessert: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=85",
  ingredients: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1100&q=85",
  family: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1100&q=85"
};

function Logo() {
  return (
    <a className="logo" href="#home">
      <span className="logo-mark">G</span>
      <span>
        <strong>GRILL</strong>
        <small>HOUSE</small>
      </span>
    </a>
  );
}

function Navbar() {
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

function Hero() {
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

function Delivery() {
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

const categories = [
  { title: "Sand-wiches", text: "Loaded with fresh ingredients and big flavour.", image: images.burger2, color: "green" },
  { title: "House Burgers", text: "Hand-pressed beef. Toasted buns. Zero shortcuts.", image: images.hero, color: "orange" },
  { title: "Fresh Salads", text: "Crisp, colourful and made fresh every day.", image: images.salad, color: "lime" },
  { title: "For All Kids", text: "Small hands deserve seriously tasty food.", image: images.hotdog, color: "blue" },
  { title: "Sweet Desserts", text: "Finish your meal on a very sweet note.", image: images.dessert, color: "pink" },
  { title: "And Much, Much More...", text: "There is always something new to love.", image: images.burger3, color: "cream" }
];

function CategoryGrid() {
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

function Ingredients() {
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

function Family() {
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

function Footer() {
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
            <span><MapPin size={15} /> Lagos, Nigeria</span>
            <span><Clock3 size={15} /> Mon – Sun · 10am – 11pm</span>
            <span><Phone size={15} /> +234 800 123 4567</span>
          </div>
          <div>
            <h4>Follow along</h4>
            <div className="socials">
              <a href="#"><Instagram /></a>
              <a href="#"><Facebook /></a>
              <a href="#"><Twitter /></a>
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

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Delivery />
        <CategoryGrid />
        <Ingredients />
        <Family />
      </main>
      <Footer />
    </>
  );
}
