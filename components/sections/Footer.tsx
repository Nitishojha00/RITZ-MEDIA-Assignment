const connect = ["Get in touch", "Instagram", "LinkedIn", "Twitter", "YouTube"];
const navLinks = ["Home", "Work", "About", "Services"];
const partners = ["INS", "Meta Business Partner", "Google", "MSME"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-ritz-navy text-white">
      <div className="grid gap-12 px-6 py-20 sm:px-10 lg:grid-cols-3 lg:px-16">
        <div>
          <p className="mb-4 text-sm uppercase tracking-widest text-white/40">
            Connect
          </p>
          <ul className="space-y-2 text-lg font-medium uppercase">
            {connect.map((c) => (
              <li key={c}>
                <a href="#" className="transition-opacity hover:opacity-60">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center justify-center">
          {/* decorative faded aperture/compass mark behind the nav links */}
          <svg
            viewBox="0 0 200 200"
            className="pointer-events-none absolute h-48 w-48 text-white/10"
          >
            <polygon
              points="100,10 190,140 10,140"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <polygon
              points="100,190 10,60 190,60"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <ul className="relative space-y-2 text-center text-2xl font-extrabold uppercase">
            {navLinks.map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="transition-opacity hover:opacity-70">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-right">
          <p className="mb-2 text-sm uppercase tracking-widest text-white/40">
            Email
          </p>
          <a href="mailto:info@ritzmediaworld.com" className="text-lg font-medium hover:opacity-70">
            info@ritzmediaworld.com
          </a>
          <p className="mb-2 mt-6 text-sm uppercase tracking-widest text-white/40">
            Phone No.
          </p>
          <p className="text-lg font-medium">
            +91 92205 16777 &nbsp;|&nbsp; +91 72900 02168
          </p>
        </div>
      </div>

      {/* partner logo strip — TODO: swap for real logo assets from Figma */}
      <div className="flex flex-wrap items-center justify-center gap-8 border-t border-white/10 px-6 py-8 text-sm font-medium uppercase tracking-wide text-white/50">
        {partners.map((p) => (
          <span key={p}>{p}</span>
        ))}
      </div>

      {/* giant wordmark bottom bar */}
      <div className="border-t border-white/10 px-6 py-10 sm:px-10 lg:px-16">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <span className="text-5xl font-extrabold sm:text-7xl">RITZ</span>
          <div className="text-center text-xs uppercase tracking-widest text-white/50 sm:text-sm">
            <p>Digital Marketing • Content Marketing • Influencer Marketing</p>
            <p>Web Development • Creative Services • Print Advertisement</p>
          </div>
          <span className="text-5xl font-extrabold sm:text-7xl">
            Media<span className="text-ritz-gold">World</span>
          </span>
        </div>
        <p className="mt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} Ritz Media World. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
