import { Link } from "react-router-dom";

const footerLinks = {
  explore: [
    { name: "Seminary", path: "/seminary" },
    { name: "Studios", path: "/studios" },
    { name: "Archives", path: "/dashboard" },
  ],
  support: [
    { name: "Patronage", path: "#" },
    { name: "Contact", path: "#" },
    { name: "FAQ", path: "#" },
  ],
  legal: [
    { name: "Privacy", path: "#" },
    { name: "Terms", path: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-20 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-primary text-3xl">token</span>
              <h2 className="text-xl font-bold tracking-widest uppercase text-foreground font-serif">
                The Foundation
              </h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A global sanctuary for theological inquiry and creative curation. Dedicated to the preservation of classical wisdom in a digital age.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-primary text-[10px] font-bold tracking-widest-xl uppercase mb-6">
                Explore
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.explore.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground text-xs uppercase tracking-widest hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-primary text-[10px] font-bold tracking-widest-xl uppercase mb-6">
                Support
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground text-xs uppercase tracking-widest hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-primary text-[10px] font-bold tracking-widest-xl uppercase mb-6">
                Legal
              </h4>
              <ul className="flex flex-col gap-4">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground text-xs uppercase tracking-widest hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary/40 text-sm">copyright</span>
            <p className="text-[10px] uppercase tracking-widest-xl text-muted-foreground font-bold">
              2024 The Foundation. Preserving the Eternal.
            </p>
          </div>
          <div className="flex gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
