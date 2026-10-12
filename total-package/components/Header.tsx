
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">

        {/* Company Logo */}
        <Link href="/" className="logo">
          <Image
            src="/total-package-logo.png"
            alt="Total Package General Contracting"
            width={220}
            height={95}
            style={{
              width: "180px",
              height: "auto",
            }}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Get a Quote Button */}
        <Link href="/quote" className="header-cta">
          Get a Quote
        </Link>

      </div>
    </header>
  );
}
