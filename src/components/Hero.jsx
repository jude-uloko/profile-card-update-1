export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* Left content */}
        <div className="hero-content">

          <div className="rating">
            <span>★★★★★</span>
            <small> 4.9/5 (1,200+ Reviews)</small>
          </div>

          <h1>
            Because Email
            <br />
            Is Complicated
            <br />
            Enough. <span>🔥</span>
          </h1>

          <p className="hero-description">
            Try Email Finder, find your leads database
            faster with Smart.io Email Finder. Start using
            it for free.
          </p>

          <div className="hero-buttons">
            <a href="#courses" className="app-store">
              <span className="apple">●</span>
              <div>
                <small>Download on the</small>
                <strong>App Store</strong>
              </div>
            </a>

            <a href="#courses" className="watch-btn">
              <span>▶</span>
              Watch Demo
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>20M+</strong>
              <span>Trusted users on<br />our platform</span>
            </div>

            <div>
              <strong>120+</strong>
              <span>Experienced<br />instructors</span>
            </div>

            <div>
              <strong>80+</strong>
              <span>Programs &<br />courses</span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="hero-image-area">
          <div className="glow-circle"></div>

          <div className="sparkle sparkle-one">✦</div>
          <div className="sparkle sparkle-two">✦</div>

          <img
            src="/images/hero-person.png"
            alt="Learn at House instructor"
            className="hero-person"
          />

          <div className="small-dot"></div>
        </div>

      </div>

      {/* Bottom curved shape */}
      <div className="hero-bottom-shape"></div>
    </section>
  );
};