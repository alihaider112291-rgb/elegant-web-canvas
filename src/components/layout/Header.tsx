import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Seminary", path: "/seminary" },
  { name: "Studios", path: "/studios" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "About", path: "/about" },
];

export function Header() {
  const location = useLocation();

  return (
    <header className="fixed top-0 z-50 w-full px-6 py-4 md:px-16 lg:px-20">
      <div className="flex items-center justify-between rounded-full border border-foreground/10 bg-secondary/60 px-8 py-3 backdrop-blur-xl">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-primary transition-transform group-hover:scale-110">
            <span className="material-symbols-outlined text-3xl">token</span>
          </div>
          <h2 className="font-serif text-xl font-bold tracking-tight text-foreground lg:text-2xl">
            The Foundation
          </h2>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link to="/login">
            <Button variant="ghost" className="btn-ghost hidden lg:flex px-6 py-2 h-auto rounded-full">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="btn-primary hidden lg:flex min-w-[120px] rounded-full px-6 py-2 h-auto">
              Join
            </Button>
          </Link>
          <div className="size-10 overflow-hidden rounded-full border-2 border-primary/30 bg-secondary">
            <div className="w-full h-full flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-xl">person</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
