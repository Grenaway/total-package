
import Link from "next/link";

const services = [
  {
    title: "General Contracting",
    description:
      "Complete project coordination and construction services to help bring your plans to life.",
  },
  {
    title: "Home Renovations",
    description:
      "Update and transform your home with professional renovation and remodeling services.",
  },
  {
    title: "Kitchen & Bathroom Remodeling",
    description:
      "Improve the appearance, comfort, and functionality of your kitchen or bathroom.",
  },
  {
    title: "Interior & Exterior Improvements",
    description:
      "Property improvements designed to enhance the appearance and value of your space.",
  },
  {
    title: "Residential Construction",
    description:
      "Construction solutions tailored to your residential project and individual needs.",
  },
  {
    title: "Repairs & Property Upgrades",
    description:
      "From smaller improvements to larger upgrades, we help keep your property looking its best.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">TOTAL PACKAGE GENERAL CONTRACTING</p>
          <h1>Our Services</h1>
          <p>
            Quality construction and complete solutions for
            your next project.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow dark">WHAT WE OFFER</p>
            <h2>Construction & Remodeling Services</h2>
            <p>
              Explore the ways Total Package can help bring
              your project to life.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Have a Project in Mind?</h2>
          <p>
            Tell us what you're planning and let's discuss
            how Total Package can help.
          </p>

          <Link href="/quote" className="btn btn-primary">
            Request a Free Estimate
          </Link>
        </div>
      </section>
    </main>
  );
}
