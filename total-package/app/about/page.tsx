
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            TOTAL PACKAGE GENERAL CONTRACTING
          </p>
          <h1>About Us</h1>
          <p>
            Quality workmanship. Dependable service.
            Complete construction solutions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container about-grid">
          <div>
            <p className="eyebrow dark">WHO WE ARE</p>
            <h2>
              One Company.
              <br />
              Complete Solutions.
            </h2>
          </div>

          <div>
            <p>
              At Total Package General Contracting, our goal is
              simple: to help homeowners and property owners
              bring their construction and renovation projects
              to life.
            </p>

            <p>
              We understand that every project is different.
              That's why we believe in clear communication,
              careful planning, and attention to detail
              throughout the construction process.
            </p>

            <p>
              Whether you're updating one room or planning
              a larger improvement, Total Package is
              committed to delivering a professional
              experience from beginning to end.
            </p>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">OUR APPROACH</p>
            <h2>What Matters to Us</h2>
          </div>

          <div className="service-grid">
            <div className="service-card">
              <h3>Quality Workmanship</h3>
              <p>
                We believe in paying attention to the details
                and approaching every project with care.
              </p>
            </div>

            <div className="service-card">
              <h3>Clear Communication</h3>
              <p>
                We believe clients should understand their
                projects and feel informed throughout the process.
              </p>
            </div>

            <div className="service-card">
              <h3>Complete Solutions</h3>
              <p>
                Our goal is to make construction and renovation
                projects simpler through thoughtful planning
                and coordinated services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Let's Talk About Your Project</h2>
          <p>
            Have a construction or renovation project in mind?
            We'd love to learn more about it.
          </p>

          <Link href="/quote" className="btn btn-primary">
            Request a Free Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
