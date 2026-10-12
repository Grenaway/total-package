
export default function QuotePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            TOTAL PACKAGE GENERAL CONTRACTING
          </p>
          <h1>Request a Free Estimate</h1>
          <p>
            Tell us about your project and we'll be in touch.
          </p>
        </div>
      </section>

      <section className="section quote-section">
        <div className="container quote-container">
          <div className="quote-intro">
            <p className="eyebrow dark">GET STARTED</p>
            <h2>Tell Us About Your Project</h2>
            <p>
              Complete the form below and we'll follow up
              to discuss your construction project.
            </p>
          </div>

          <form
            className="quote-form"
            action="https://formsubmit.co/jmkirk@totalpackagegc.com"
            method="POST"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Estimate Request - Total Package"
            />

            <input
              type="hidden"
              name="_captcha"
              value="true"
            />

            <input
              type="hidden"
              name="_template"
              value="table"
            />

            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="name">Full Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  autoComplete="tel"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="service">Service Needed *</label>
                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  <option>General Contracting</option>
                  <option>Home Renovations</option>
                  <option>Kitchen Remodeling</option>
                  <option>Bathroom Remodeling</option>
                  <option>Residential Construction</option>
                  <option>Interior / Exterior Improvements</option>
                  <option>Repairs & Property Upgrades</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-field full-width">
                <label htmlFor="address">
                  Project Address / Location
                </label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  placeholder="City, State or Project Address"
                />
              </div>

              <div className="form-field full-width">
                <label htmlFor="details">
                  Project Description *
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={6}
                  placeholder="Tell us about your project..."
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-dark submit-button"
            >
              Submit Estimate Request →
            </button>

            <p className="form-note">
              We'll use your information only to respond
              to your estimate request.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
