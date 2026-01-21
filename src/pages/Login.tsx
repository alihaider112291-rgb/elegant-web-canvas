import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-library.jpg";

export default function Login() {
  return (
    <div className="flex h-screen w-full">
      {/* Left Side - Image */}
      <div className="hidden lg:flex lg:w-3/5 h-full relative overflow-hidden">
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover scale-105"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-background/40 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />

        {/* Logo on image */}
        <div className="absolute top-12 left-12 flex items-center gap-4 z-20">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="material-symbols-outlined text-primary text-3xl">token</span>
            <h1 className="font-serif text-2xl font-bold tracking-widest uppercase text-foreground drop-shadow-2xl">
              The Foundation
            </h1>
          </Link>
        </div>

        {/* Quote */}
        <div className="absolute bottom-24 left-12 max-w-lg z-20">
          <p className="font-serif italic text-4xl text-foreground/90 leading-tight">
            "The pursuit of wisdom is the foundation of all virtue."
          </p>
          <div className="mt-6 h-[2px] w-24 bg-gradient-to-r from-primary to-transparent" />
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-2/5 h-full bg-card flex flex-col justify-center px-8 sm:px-16 lg:px-20 relative">
        {/* Mobile Logo */}
        <div className="lg:hidden absolute top-8 left-8 flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">token</span>
            <span className="font-serif font-bold text-foreground uppercase tracking-widest text-sm">
              The Foundation
            </span>
          </Link>
        </div>

        <div className="max-w-md w-full mx-auto space-y-10">
          <div className="space-y-3">
            <h2 className="font-serif text-5xl font-normal text-foreground">Welcome Back</h2>
            <p className="text-muted-foreground text-sm tracking-wide font-light">
              Enter the sanctuary of theological discourse.
            </p>
          </div>

          <form className="space-y-7" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2.5">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-primary/80">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="archivist@foundation.org"
                className="w-full bg-secondary border-primary/20 focus:border-primary text-foreground p-4 h-auto rounded-sm"
              />
            </div>

            <div className="space-y-2.5">
              <div className="flex justify-between items-center">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-primary/80">
                  Password
                </label>
              </div>
              <div className="relative group input-gold-glow">
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-secondary border-primary/20 focus:border-primary text-foreground p-4 pr-12 h-auto rounded-sm"
                />
                <button
                  type="button"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-primary/40 hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="size-4 rounded-none border-primary/40 bg-secondary text-primary focus:ring-primary"
                />
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                  Remember Me
                </span>
              </label>
              <a
                href="#"
                className="text-[10px] font-bold uppercase tracking-widest text-primary/70 hover:text-primary transition-colors"
              >
                Recovery
              </a>
            </div>

            <Button
              type="submit"
              className="btn-primary btn-shine w-full py-5 h-auto text-xs"
            >
              Authorize Access
            </Button>
          </form>

          <div className="pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-medium">
            <span className="text-muted-foreground uppercase tracking-widest text-[10px]">
              New to The Foundation?
            </span>
            <Link to="/signup">
              <Button variant="outline" className="btn-ghost px-8 py-2.5 h-auto text-[10px]">
                Create Account
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-20 lg:translate-x-0 opacity-20">
          <span className="font-serif italic text-[10px] tracking-widest-xl uppercase">
            Est. MMXXIV • The Foundation
          </span>
        </div>
      </div>
    </div>
  );
}
