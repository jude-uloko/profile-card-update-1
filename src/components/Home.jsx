import Nav from './Nav'
import Hero from './Hero';

export default function Home () {
  return (
    <>
      <Nav />

      <main>
        <Hero />

        {/* Reasons */}
        <section className="reason-section" id="about">
          <div className="section-container">
            <h2>3 Reasons To Choose Us</h2>
            <div className='reason-grid'>
              <div className='reason-card'>
                <div className="reason-icon">
                  S
                </div>
                <h3>24/7 Support</h3>
                <p>
                  Learn quickly in simple learning
                  enviroment and get the support you
                  need throughout your journey.
                </p>
                <a href="#">
                  Read More &ra;
                </a>
              </div>

              <div className='reason-card'>
                <div className="reason-icon">
                  S
                </div>
                <h3>Top Guide</h3>
                <p>
                  Learn from highly skilled instructors
                  and get right guidiance throughout
                  yout learning journey.
                </p>
                <a href="#">
                  Read More &ra;
                </a>
              </div>

              <div className='reason-card'>
                <div className="reason-icon">
                  S
                </div>
                <h3>Best Course</h3>
                <p>
                  Learn from carefully designed courses
                  that help you build pratical skills.
                </p>
                <a href="#">
                  Read More &ra;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Three steps */}

        <section className="step-section">
          <div className="section-container">
            <h2>
              Follow These 3 Simple Steps to
              <br />
              Join Our Class!
            </h2>

            <div className="step-wrapper">
              {/* Left steps */}
              <div className='steps-list'>
                <div className="step">
                  <div className="step-number">01</div>

                  <div>
                    <h3>Choose Best <br /> Course For You</h3>
                    <p>Find the right course</p>
                  </div>
                  <span> --</span>
                </div>

                <div className="step">
                  <div className="step-number">02</div>

                  <div>
                    <h3>Active Learning <br /> Engagement</h3>
                    <p>Learn at your own pace</p>
                  </div>
                  <span> --</span>
                </div>

                <div className="step">
                  <div className="step-number">03</div>

                  <div>
                    <h3>Join Course <br /> Made Easy</h3>
                    <p>Start learning today</p>
                  </div>
                  <span> --</span>
                </div>

              </div>

              {/* Center image */}
              <div className="steps-image">
                <div className="steps-image-circle">
                  <img src="" alt="instructor" />
                </div>
              </div>

              <div className="steps-stats">
                <div>
                  <strong>160+</strong>
                  <span>Courses</span>
                </div>

                <div>
                  <strong>500+</strong>
                  <span>Students</span>
                </div>

                <div>
                  <strong>24 Lakh</strong>
                  <span>Happy Learners</span>
                </div>

                <div>
                  <strong>12K</strong>
                  <span>Reviews</span>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="courses-section" id='courses'>
          <div className="section-container">
            <h2>Our Popular Courses for You</h2>

            <div className="course-grid">
              <div className="course-card">
                <div className="course-icon">s</div>
                <h3>Web Design</h3>
                <p>
                  Learn modern web design
                  and create beautiful websites.
                </p>
                <a href="#">Learn More --</a>
              </div>

              <div className="course-card">
                <div className="course-icon">s</div>
                <h3>Web Development</h3>
                <p>
                  Build responsive and powerfull web
                  application.
                </p>
                <a href="#">Learn More --</a>
              </div>

              <div className="course-card">
                <div className="course-icon">s</div>
                <h3>App Development</h3>
                <p>
                  Learn to build modern
                  mobile application
                </p>
                <a href="#">Learn More --</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Page styles */}

      <style>
        
      </style>
    </>
  )
}