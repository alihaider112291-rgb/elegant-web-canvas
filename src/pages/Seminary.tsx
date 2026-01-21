import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const videos = [
  {
    title: "The Architecture of Genesis",
    description: "Exploring the structural symmetry and cosmic temple motifs in the creation narrative.",
    author: "Dr. Elias Thorne",
    duration: "48:22",
    premium: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
  },
  {
    title: "Classical Hermeneutics",
    description: "A systematic approach to biblical interpretation using the four-fold method of the early church.",
    author: "Prof. Sarah Lancaster",
    duration: "1:12:05",
    premium: false,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
  },
  {
    title: "Patristic Wisdom: Origen",
    description: "Understanding the allegorical depth and philosophical roots of the Alexandrian school.",
    author: "Dr. Marcus Aurel",
    duration: "35:40",
    premium: true,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop",
  },
  {
    title: "The Desert Fathers",
    description: "Asceticism and the origins of monastic spirituality in the Egyptian wilderness.",
    author: "Fr. Julian Rossi",
    duration: "52:15",
    premium: false,
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=600&h=400&fit=crop",
  },
  {
    title: "The Global Church",
    description: "Exploring Christianity's spread across continents and cultures through centuries.",
    author: "Dr. Miriam Chen",
    duration: "1:45:10",
    premium: true,
    image: "https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?w=600&h=400&fit=crop",
  },
  {
    title: "Ethics in Antiquity",
    description: "Moral philosophy from Aristotle to Augustine and its impact on Christian thought.",
    author: "Prof. James Wright",
    duration: "42:30",
    premium: false,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=400&fit=crop",
  },
];

const levels = [
  { name: "Beginner", subtitle: "Faith Foundations", icon: "stat_0", active: false },
  { name: "Intermediate", subtitle: "Systematic Theology", icon: "stat_1", active: true },
  { name: "Advanced", subtitle: "Apologetics & Ethics", icon: "stat_3", active: false },
];

const filters = ["All Lectures", "Recently Added", "Patristic Wisdom", "Hermeneutics", "Church History"];

export default function Seminary() {
  return (
    <Layout>
      <div className="flex max-w-[1600px] mx-auto min-h-screen pt-24">
        {/* Sidebar */}
        <aside className="w-80 border-r border-border bg-sidebar/20 p-10 hidden lg:flex flex-col gap-12 sticky top-24 h-[calc(100vh-96px)]">
          <div>
            <h3 className="text-primary font-serif text-xl font-bold tracking-wide">Path of Learning</h3>
            <div className="h-px w-12 bg-primary/40 mt-3 mb-8" />
            <nav className="flex flex-col gap-6">
              {levels.map((level) => (
                <button
                  key={level.name}
                  className={`flex items-center gap-5 p-1 rounded-2xl group transition-all text-left ${
                    level.active ? "sidebar-item-active" : ""
                  }`}
                >
                  <div
                    className={`size-12 rounded-xl flex items-center justify-center border transition-all ${
                      level.active
                        ? "bg-primary/10 border-primary/40 shadow-[0_0_15px_hsl(45_76%_56%_/_0.15)]"
                        : "bg-secondary/20 border-border group-hover:border-muted-foreground/30"
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-2xl ${
                        level.active ? "text-primary font-bold" : "text-muted-foreground"
                      }`}
                    >
                      {level.icon}
                    </span>
                  </div>
                  <div>
                    <p
                      className={`text-sm font-bold tracking-wide ${
                        level.active ? "text-primary" : "text-foreground/80 group-hover:text-foreground"
                      }`}
                    >
                      {level.name}
                    </p>
                    <p
                      className={`text-[10px] uppercase tracking-wider font-semibold ${
                        level.active ? "text-primary/60" : "text-muted-foreground"
                      }`}
                    >
                      {level.subtitle}
                    </p>
                  </div>
                </button>
              ))}
            </nav>
          </div>

          {/* Quote Card */}
          <div className="mt-auto glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute -top-4 -right-4 size-20 bg-primary/5 rounded-full blur-2xl" />
            <p className="text-xs text-foreground/80 leading-relaxed italic font-serif relative z-10">
              "For wisdom is better than rubies; and all the things that may be desired are not to be compared to it."
            </p>
            <p className="text-[10px] text-primary mt-3 font-bold uppercase tracking-widest relative z-10">
              — Proverbs 8:11
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8 md:p-14 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Header */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-10">
              <div className="space-y-2">
                <h1 className="text-foreground font-serif text-5xl font-bold leading-tight tracking-tight">
                  Theological Seminary Archive
                </h1>
                <p className="text-muted-foreground text-xl font-light">
                  Equipping the mind to serve the soul.
                </p>
              </div>
              <div className="w-full max-w-lg">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-muted-foreground group-focus-within:text-primary transition-colors">
                      search
                    </span>
                  </div>
                  <Input
                    type="text"
                    placeholder="Search the sacred archives..."
                    className="block w-full glass-card rounded-2xl py-5 pl-14 pr-6 h-auto text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary/80 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {/* Filters */}
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  className={`flex h-11 shrink-0 items-center gap-2 rounded-full px-6 text-xs font-bold uppercase tracking-widest transition-all ${
                    index === 0
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                      : "bg-secondary/50 border border-border hover:border-primary hover:bg-primary/5"
                  }`}
                >
                  {filter}
                  {filter === "Recently Added" && (
                    <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                  )}
                </button>
              ))}
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-10">
              {videos.map((video) => (
                <div
                  key={video.title}
                  className="video-card-hover group glass-card rounded-2xl overflow-hidden flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground size-14 rounded-full flex items-center justify-center shadow-2xl">
                        <span className="material-symbols-outlined text-3xl font-bold">play_arrow</span>
                      </div>
                    </div>
                    
                    {/* Premium Badge */}
                    {video.premium && (
                      <div className="premium-foil absolute top-4 left-4 text-primary-foreground text-[10px] font-black px-3 py-1.5 rounded-md tracking-widest uppercase shadow-lg">
                        Premium
                      </div>
                    )}
                    
                    {/* Duration */}
                    <span className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-md text-foreground text-[10px] font-bold px-2.5 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                  
                  <div className="p-7 flex flex-col flex-1">
                    <h3 className="text-foreground font-serif text-xl font-bold group-hover:text-primary transition-colors leading-tight">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-3 line-clamp-2 leading-relaxed font-light italic">
                      {video.description}
                    </p>
                    <div className="mt-auto pt-6 flex items-center justify-between border-t border-border">
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-full ring-1 ring-primary/30 overflow-hidden bg-secondary flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-sm">person</span>
                        </div>
                        <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">
                          {video.author}
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-muted-foreground text-lg hover:text-primary cursor-pointer transition-colors">
                        bookmark
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
