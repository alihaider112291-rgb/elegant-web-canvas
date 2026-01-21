import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const featuredVideo = {
  title: "The Architecture of Transcendence",
  category: "Documentary",
  episode: "Season 1, Episode 4",
  currentTime: "14:22",
  duration: "45:00",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
};

const galleryItems = [
  {
    title: "The Silence of God",
    duration: "24 min",
    category: "Philosophy",
    type: "Series",
    image: "https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?w=600&h=800&fit=crop",
  },
  {
    title: "Echoes of the Liturgy",
    duration: "58 min",
    category: "Worship",
    type: null,
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=600&h=400&fit=crop",
  },
  {
    title: "Into the Wilderness",
    duration: "18 min",
    category: "Reflection",
    type: null,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=700&fit=crop",
  },
  {
    title: "Divine Proportions",
    duration: "42 min",
    category: "Architecture",
    type: null,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=800&fit=crop",
  },
];

const filters = ["All Works", "Biblical", "Doctrinal", "Historical", "Meditations"];

export default function Studios() {
  return (
    <Layout>
      <div className="pt-24">
        <main className="max-w-[1400px] mx-auto w-full px-6 py-16">
          {/* Featured Section */}
          <section className="mb-24">
            <div className="flex flex-col items-center mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-[1px] w-8 bg-primary/40" />
                <span className="text-primary text-[10px] font-black tracking-widest-2xl uppercase">
                  Premiere Production
                </span>
                <div className="h-[1px] w-8 bg-primary/40" />
              </div>
              <h1 className="text-foreground font-serif italic font-black text-5xl lg:text-7xl text-center">
                Featured Production
              </h1>
            </div>

            {/* Featured Video */}
            <div className="relative group max-w-5xl mx-auto">
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-tr from-primary/60 via-primary/10 to-primary/60 opacity-100 p-[1px]">
                <div className="absolute inset-0 blur-2xl bg-primary/10" />
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden glass-card border border-border">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                  style={{ backgroundImage: `url(${featuredVideo.image})` }}
                />
                <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="size-24 rounded-full bg-primary/90 text-primary-foreground flex items-center justify-center transition-transform hover:scale-110 shadow-[0_0_50px_hsl(45_76%_56%_/_0.4)]">
                    <span className="material-symbols-outlined text-[48px]">play_arrow</span>
                  </button>
                </div>

                {/* Video Controls */}
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-background via-background/40 to-transparent">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-6">
                      <div className="h-1 flex-1 rounded-full bg-foreground/10 relative">
                        <div className="absolute inset-y-0 left-0 w-1/3 bg-primary shadow-[0_0_10px_hsl(45_76%_56%_/_0.8)]" />
                        <div className="absolute left-1/3 top-1/2 -translate-y-1/2 size-2 bg-foreground rounded-full" />
                      </div>
                      <span className="text-foreground/50 text-[10px] font-mono tracking-widest">
                        {featuredVideo.currentTime} / {featuredVideo.duration}
                      </span>
                    </div>
                    <div className="flex justify-between items-end">
                      <div>
                        <h3 className="text-foreground font-serif text-3xl font-medium tracking-tight">
                          {featuredVideo.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-2">
                          <span className="text-primary text-[10px] font-black uppercase tracking-widest">
                            {featuredVideo.category}
                          </span>
                          <span className="text-foreground/40 text-[10px]">•</span>
                          <span className="text-foreground/40 text-[10px] font-bold uppercase tracking-widest">
                            {featuredVideo.episode}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-6 pb-2">
                        <button className="text-foreground/50 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-xl">closed_caption</span>
                        </button>
                        <button className="text-foreground/50 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-xl">settings</span>
                        </button>
                        <button className="text-foreground/50 hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-xl">fullscreen</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section className="mb-12">
            <div className="flex items-end justify-between mb-10 border-b border-border pb-6">
              <div>
                <span className="text-primary text-[10px] font-black uppercase tracking-widest-xl block mb-2">
                  The Archive
                </span>
                <h2 className="text-foreground text-3xl font-serif italic">Cinematic Collections</h2>
              </div>
              <button className="text-primary/70 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:text-primary group transition-all">
                Explore Full Library
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_right_alt
                </span>
              </button>
            </div>

            {/* Filters */}
            <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar">
              {filters.map((filter, index) => (
                <div
                  key={filter}
                  className={`flex h-10 shrink-0 items-center justify-center px-8 rounded-full font-bold text-[10px] uppercase tracking-widest cursor-pointer transition-all ${
                    index === 0
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/10"
                      : "bg-secondary/50 border border-border text-foreground/60 hover:text-foreground hover:border-primary/40"
                  }`}
                >
                  {filter}
                </div>
              ))}
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
              {galleryItems.map((item) => (
                <div key={item.title} className="break-inside-avoid mb-8 group cursor-pointer">
                  <div className="relative rounded-lg overflow-hidden border border-border mb-5 bg-background">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent transition-opacity group-hover:opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
                      <div className="size-16 rounded-full bg-primary/20 backdrop-blur-md border border-primary/40 flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary text-3xl">play_arrow</span>
                      </div>
                    </div>
                    {item.type && (
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                        {item.type}
                      </div>
                    )}
                  </div>
                  <h4 className="text-foreground font-serif text-2xl group-hover:text-primary transition-colors px-1">
                    {item.title}
                  </h4>
                  <div className="flex items-center gap-3 mt-3 px-1">
                    <span className="text-foreground/40 text-[10px] font-bold uppercase tracking-widest">
                      {item.duration}
                    </span>
                    <span className="size-1 rounded-full bg-primary/40" />
                    <span className="text-foreground/40 text-[10px] font-bold uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Floating Creative Lens Button */}
        <button className="fixed bottom-10 right-10 size-14 bg-primary text-primary-foreground rounded-full shadow-[0_10px_30px_hsl(45_76%_56%_/_0.3)] flex items-center justify-center group z-50 overflow-hidden ring-1 ring-foreground/20">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-foreground/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="material-symbols-outlined text-2xl">lens_blur</span>
        </button>
      </div>
    </Layout>
  );
}
