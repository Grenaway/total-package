
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-content">
          <p className="eyebrow">
            TOTAL PACKAGE GENERAL CONTRACTING
          </p>

          <h1>
            Quality Construction.
            <br />
            Complete Solutions.
          </h1>

          <p>
            From renovations to complete construction projects,
            Total Package brings quality workmanship, attention
            to detail, and dependable service to every job.
          </p>

          <div className="hero-buttons">
            <Link href="/quote" className="btn btn-primary">
              Request a Free Estimate
            </Link>

            <Link href="/services" className="btn btn-outline">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">WHAT WE DO</p>
            <h2>Our Construction Services</h2>
            <p>
              Complete construction solutions for projects
              of all sizes.
            </p>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <h3>General Contracting</h3>
              <p>
                Professional coordination and execution
                of construction projects from start to finish.
              </p>
            </div>

            <div className="service-card">
              <h3>Home Renovations</h3>
              <p>
                Transform your existing spaces with
                quality remodeling and renovation services.
              </p>
            </div>

            <div className="service-card">
              <h3>Construction & Improvements</h3>
              <p>
                Reliable construction and property improvements
                tailored to your needs.
              </p>
            </div>
          </div>

          <div className="center">
            <Link href="/services" className="btn btn-dark">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow dark">ABOUT TOTAL PACKAGE</p>
            <h2>
              One Company.
              <br />
              Complete Solutions.
            </h2>
          </div>

          <div>
            <p>
              At Total Package General Contracting, we believe
              every project deserves quality workmanship,
              clear communication, and attention to detail.
            </p>

            <p>
              Whether you are updating your home or planning
              a larger construction project, our goal is
              to deliver results you can feel confident in.
            </p>

            <Link href="/about" className="text-link">
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Next Project?</h2>

          <p>
            Tell us about your project and let Total Package
            help bring your vision to life.
          </p>

          <Link href="/quote" className="btn btn-primary">
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
