import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-library.jpg";

const features = [
  {
    icon: "menu_book",
    title: "Theological Seminary",
    description: "Deep academic exploration into historical divinity and doctrine.",
  },
  {
    icon: "videocam",
    title: "Creative Studios",
    description: "Cinematic storytelling and digital media for the sacred arts.",
  },
  {
    icon: "crossword",
    title: "Bible Study",
    description: "Interactive scripture engagement and deep hermeneutic tools.",
  },
  {
    icon: "verified_user",
    title: "About Us",
    description: "Our foundational mission and the legacy of our contributors.",
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative flex min-h-screen w-full items-center justify-center px-6 pt-20 md:px-16 lg:px-20">
        {/* Background Image */}
        <div
          className="hero-zoom absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 30, 55, 0.85) 0%, rgba(15, 30, 55, 0.6) 50%, rgba(15, 30, 55, 0.95) 100%), url(${heroImage})`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 flex max-w-4xl flex-col items-center gap-8 text-center animate-fade-in">
          <div className="flex flex-col gap-4">
            <span className="text-xs font-black uppercase tracking-widest-2xl text-primary/80">
              Est. MMXXIV
            </span>
            <h1 className="gold-glow font-serif text-5xl font-light leading-tight text-foreground md:text-7xl lg:text-8xl">
              Order the Chaos <br />
              <span className="italic">of Wisdom</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-foreground/70 md:text-xl">
              A sanctuary for the modern seeker. Immerse yourself in premium theological curricula and cinematic explorations of the eternal.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link to="/signup">
              <Button className="btn-primary btn-shine group relative flex min-w-[200px] items-center justify-center overflow-hidden rounded-full px-8 py-4 h-auto text-sm">
                <span className="truncate">Begin Journey</span>
                <span className="material-symbols-outlined absolute right-4 opacity-0 transition-all group-hover:opacity-100">
                  arrow_forward
                </span>
              </Button>
            </Link>
            <Link to="/seminary">
              <Button variant="outline" className="btn-ghost min-w-[200px] rounded-full px-8 py-4 h-auto text-sm">
                Explore Seminary
              </Button>
            </Link>
          </div>
        </div>

        {/* Feature Cards - Desktop */}
        <div className="absolute -bottom-32 z-20 hidden w-full max-w-6xl grid-cols-1 gap-6 px-4 md:grid md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card-hover flex flex-col gap-4 rounded-xl p-8"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-primary">
                <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-sm font-normal leading-relaxed text-foreground/60">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer for floating cards on desktop */}
      <div className="h-48 w-full md:block hidden" />

      {/* Mobile Feature Cards */}
      <section className="mt-12 grid grid-cols-1 gap-4 px-6 md:hidden">
        {features.map((feature) => (
          <div key={feature.title} className="glass-card flex items-center gap-6 rounded-xl p-6">
            <span className="material-symbols-outlined text-3xl text-primary">{feature.icon}</span>
            <h3 className="font-serif text-lg font-bold text-foreground">{feature.title}</h3>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="mt-24 w-full px-6 py-20 md:px-16 lg:px-20">
        <div className="glass-card rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl">
            Experience the Foundation
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/60">
            Join a global community dedicated to the pursuit of eternal wisdom through art and study.
          </p>
          <div className="mt-10 flex justify-center">
            <Link to="/signup">
              <Button className="btn-primary rounded-full px-10 py-4 h-auto text-sm">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
