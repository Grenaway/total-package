
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            TOTAL PACKAGE GENERAL CONTRACTING
          </p>
          <h1>Contact Us</h1>
          <p>
            Have a question or a project in mind?
            We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div>
            <p className="eyebrow dark">GET IN TOUCH</p>

            <h2>Let's Talk About Your Project</h2>

            <p className="contact-description">
              Whether you're planning a renovation,
              looking for construction services, or
              simply have a question, Total Package
              is here to help.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <h3>Phone</h3>
                <p>Coming Soon</p>
              </div>

              <div className="contact-item">
                <h3>Email</h3>
                <p>
                  <a href="mailto:jmkirk@totalpackagegc.com">
                    jmkirk@totalpackagegc.com
                  </a>
                </p>
              </div>

              <div className="contact-item">
                <h3>Service Area</h3>
                <p>To Be Announced</p>
              </div>

              <div className="contact-item">
                <h3>Business Hours</h3>
                <p>Contact us for availability</p>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <p className="eyebrow">START YOUR PROJECT</p>
            <h2>Request an Estimate</h2>

            <p>
              Ready to get started? Tell us a little
              about your project using our estimate
              request form.
            </p>

            <Link href="/quote" className="btn btn-primary">
              Request a Free Estimate →
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Your Vision. Our Commitment.</h2>

          <p>
            From small improvements to larger
            construction projects, let's discuss
            your next steps.
          </p>

          <Link href="/services" className="btn btn-primary">
            Explore Our Services
          </Link>
        </div>
      </section>
    </main>
  );
}

