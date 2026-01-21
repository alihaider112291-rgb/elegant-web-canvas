import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-library.jpg";

const benefits = [
  {
    title: "Curated Theological Library",
    description: "Access to centuries of rare digital archives and manuscripts.",
  },
  {
    title: "Exclusive Scholar Circles",
    description: "Join live sessions with leading global theological experts.",
  },
  {
    title: "Creative Guild Resources",
    description: "Premium assets for sacred architecture, design, and music.",
  },
];

export default function Signup() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      {/* Left Side - Info */}
      <div className="hidden md:flex md:w-5/12 relative overflow-hidden bg-card border-r border-primary/20">
        <div
          className="absolute inset-0 z-0 grayscale opacity-30 mix-blend-overlay scale-110 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-card/95 to-card/70 z-10" />

        <div className="relative z-20 flex flex-col justify-between p-16 h-full">
          <Link to="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">token</span>
            <span className="font-serif text-2xl font-bold tracking-widest text-foreground uppercase">
              The Foundation
            </span>
          </Link>

          <div className="max-w-md">
            <span className="text-primary text-sm font-bold uppercase tracking-widest-xl mb-4 block">
              Est. MCMXCVIII
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-black leading-tight text-foreground mb-8">
              Preserving Wisdom for Generations
            </h2>

            <div className="space-y-6 mt-12">
              <h3 className="text-primary font-serif text-xl font-semibold mb-4">Why Join?</h3>
              <ul className="space-y-5">
                {benefits.map((benefit) => (
                  <li key={benefit.title} className="flex items-start gap-4">
                    <span className="material-symbols-outlined text-primary mt-1 text-base">
                      auto_awesome
                    </span>
                    <div className="flex flex-col">
                      <span className="text-foreground font-medium">{benefit.title}</span>
                      <span className="text-muted-foreground text-sm">{benefit.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-8 text-muted-foreground text-sm italic font-serif">
            <span>Truth</span>
            <span>Tradition</span>
            <span>Transcendence</span>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-7/12 flex flex-col justify-center items-center px-6 py-12 md:px-20 bg-background relative overflow-y-auto">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 w-full h-1.5 bg-secondary hidden md:block">
          <div className="h-full bg-primary w-1/3 shadow-[0_0_10px_hsl(45_76%_56%_/_0.5)]" />
        </div>

        {/* Mobile Logo */}
        <div className="md:hidden flex items-center gap-3 mb-10">
          <Link to="/" className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">token</span>
            <span className="font-serif text-xl font-bold tracking-widest text-foreground uppercase">
              The Foundation
            </span>
          </Link>
        </div>

        {/* Sign in link - Desktop */}
        <div className="absolute top-8 right-8 hidden md:block">
          <span className="text-muted-foreground text-sm">Already a member?</span>
          <Link
            to="/login"
            className="text-primary hover:text-gold-light font-bold text-sm ml-2 transition-colors"
          >
            Sign In
          </Link>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-lg glass-card p-8 md:p-12 rounded-2xl shadow-2xl relative">
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">
                Step 01/03
              </span>
            </div>
            <h1 className="font-serif text-4xl font-bold text-foreground mb-3">
              Begin Your Journey
            </h1>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Initiate your journey into the inner circle of theological exploration.
            </p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 group">
              <label className="font-serif block text-sm font-medium text-foreground/80 transition-colors group-focus-within:text-primary">
                Full Name
              </label>
              <div className="relative input-gold-glow">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg group-focus-within:text-primary transition-colors">
                  person
                </span>
                <Input
                  type="text"
                  placeholder="Theophilus Clement"
                  className="w-full pl-12 pr-4 py-4 h-auto bg-secondary/50 border-primary/30 focus:border-primary rounded-xl text-foreground"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="font-serif block text-sm font-medium text-foreground/80 transition-colors group-focus-within:text-primary">
                Email Address
              </label>
              <div className="relative input-gold-glow">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg group-focus-within:text-primary transition-colors">
                  mail
                </span>
                <Input
                  type="email"
                  placeholder="name@foundation.org"
                  className="w-full pl-12 pr-4 py-4 h-auto bg-secondary/50 border-primary/30 focus:border-primary rounded-xl text-foreground"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="font-serif block text-sm font-medium text-foreground/80 transition-colors group-focus-within:text-primary">
                Create Password
              </label>
              <div className="relative input-gold-glow">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg group-focus-within:text-primary transition-colors">
                  lock
                </span>
                <Input
                  type="password"
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-4 h-auto bg-secondary/50 border-primary/30 focus:border-primary rounded-xl text-foreground"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground text-lg cursor-pointer hover:text-primary transition-colors">
                  visibility
                </span>
              </div>
            </div>

            <div className="pt-6">
              <Button
                type="submit"
                className="btn-primary btn-shine w-full py-4 h-16 rounded-xl font-serif text-lg tracking-widest"
              >
                Join The Foundation
              </Button>
            </div>

            <p className="text-[10px] text-center text-muted-foreground mt-8 leading-relaxed uppercase tracking-widest">
              By proceeding, you agree to the{" "}
              <a href="#" className="underline decoration-primary/40 hover:text-primary transition-colors">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="underline decoration-primary/40 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              .
            </p>
          </form>

          {/* Mobile sign in */}
          <div className="md:hidden mt-8 text-center pt-6 border-t border-border">
            <span className="text-muted-foreground text-sm">Already a member?</span>
            <Link to="/login" className="text-primary font-bold text-sm ml-2">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
