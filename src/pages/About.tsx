import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-library.jpg";

const pillars = [
  {
    icon: "auto_stories",
    title: "Sacred Tradition",
    description:
      "We curate the voices of the past, ensuring that historical orthodoxy remains the vibrant foundation for current theological discourse.",
  },
  {
    icon: "workspace_premium",
    title: "Scholarly Excellence",
    description:
      "Our commitment to rigor ensures that every resource, video, and text meets the highest standards of academic and artistic merit.",
  },
  {
    icon: "diversity_3",
    title: "Global Fellowship",
    description:
      "Fostering a borderless communion of seekers, where the exchange of ideas strengthens the collective pursuit of divine truth.",
  },
];

export default function About() {
  return (
    <Layout>
      <div className="pt-24">
        {/* Hero Section */}
        <section className="relative px-6 md:px-20 lg:px-40 py-24 lg:py-40 overflow-hidden">
          {/* Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none z-0 w-full max-w-[800px] text-primary blur-[1px]">
            <span className="material-symbols-outlined text-[600px] w-full flex justify-center select-none">
              history_edu
            </span>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start relative z-10">
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative shadow-2xl -rotate-1 hover:rotate-0 transition-transform duration-1000">
                {/* Gold frame */}
                <div className="p-3 bg-gradient-gold">
                  <div className="border border-background/20 overflow-hidden">
                    <div
                      className="aspect-[4/5] bg-center bg-cover grayscale-[0.4] hover:grayscale-0 transition-all duration-1000 scale-105 hover:scale-100"
                      style={{ backgroundImage: `url(${heroImage})` }}
                    />
                  </div>
                </div>
                {/* Label */}
                <div className="absolute -bottom-8 -left-8 bg-card border border-primary/40 p-6 shadow-2xl backdrop-blur-sm">
                  <p className="text-[11px] tracking-widest-2xl uppercase text-primary font-bold">
                    Chronicles of Truth
                  </p>
                  <p className="text-[9px] tracking-widest text-muted-foreground mt-1 uppercase italic">
                    Anno Domini MCMXCIX
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-12 bg-primary" />
                  <h1 className="text-primary text-xs font-bold tracking-widest-2xl uppercase">
                    The Sacred Archive
                  </h1>
                </div>
                <h2 className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.05] mb-8">
                  Echoes of a{" "}
                  <span className="italic font-serif text-primary">Timeless</span> Calling
                </h2>
              </div>

              <div className="prose prose-invert max-w-none">
                <p className="drop-cap text-foreground/80 leading-relaxed text-lg mb-6">
                  In an age defined by the ephemeral and the immediate, The Foundation stands as a
                  bastion for the enduring. Our story began not in a boardroom, but in a dusty study
                  lined with the leather-bound whispers of centuries past. We recognized that to move
                  forward, one must first understand the ground upon which they stand—a ground
                  enriched by the theological giants and creative visionaries who preceded us.
                </p>
                <p className="italic border-l-2 border-primary/30 pl-8 my-8 text-xl text-foreground/90">
                  "Truth is not a discovery of the moment, but a heritage to be stewarded with
                  reverence and shared with creative clarity."
                </p>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  Today, our mission transcends mere preservation. We are architects of synthesis,
                  bridging the hallowed halls of historical theology with the vibrant, pulsing energy
                  of modern creative expression. Whether through meticulously digitized manuscripts or
                  avant-garde visual resources, we ensure that the light of ancient wisdom continues
                  to illuminate the complexities of the contemporary soul.
                </p>
              </div>

              <div className="pt-6 flex gap-8 items-center">
                <button className="group flex items-center gap-4 text-primary font-bold tracking-widest-xl uppercase text-[11px] border-b-2 border-primary/20 hover:border-primary pb-3 transition-all">
                  Examine the Archives
                  <span className="material-symbols-outlined group-hover:translate-x-3 transition-transform">
                    arrow_right_alt
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="relative py-32 px-6 md:px-20 lg:px-40 bg-card/50">
          <div className="absolute inset-0 bg-secondary/20 pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 opacity-50">
                verified
              </span>
              <h2 className="text-4xl font-bold text-foreground mb-4 tracking-tight">
                Pillars of the Institution
              </h2>
              <div className="flex justify-center items-center gap-4">
                <div className="w-12 h-px bg-primary/30" />
                <p className="text-primary tracking-widest-2xl uppercase text-[10px] font-bold">
                  Our Sacred Commitments
                </p>
                <div className="w-12 h-px bg-primary/30" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className={`glass-card-hover flex flex-col items-center text-center p-12 ${
                    index === 1 ? "transform lg:-translate-y-8" : ""
                  }`}
                >
                  <div className="relative mb-10">
                    <div className="absolute inset-0 bg-primary/10 blur-xl rounded-full scale-150 group-hover:scale-[2] transition-transform duration-700" />
                    <div className="relative text-primary">
                      <span className="material-symbols-outlined text-6xl font-light">
                        {pillar.icon}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-foreground text-2xl font-bold mb-5 tracking-wide font-serif">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                  <div className="w-8 h-px bg-primary/20 group-hover:w-full transition-all duration-700" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 md:px-20 lg:px-40 py-32 text-center bg-background">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-12">
            <div className="relative">
              <span className="material-symbols-outlined text-7xl text-primary/40">castle</span>
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-primary rounded-full animate-pulse" />
            </div>
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
                Become a Steward of the Future
              </h2>
              <p className="text-xl text-foreground/60 max-w-2xl mx-auto italic font-serif">
                "The archive is not a museum, but a laboratory for the soul."
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="btn-primary px-14 py-5 h-auto text-[11px] rounded-sm shadow-2xl shadow-primary/20 hover:-translate-y-1 transition-all">
                Register for Access
              </Button>
              <Button
                variant="outline"
                className="btn-ghost px-14 py-5 h-auto text-[11px] rounded-sm"
              >
                Request Prospectus
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
