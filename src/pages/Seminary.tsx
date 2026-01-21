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

const stats = [
  { value: "120+", label: "Lectures" },
  { value: "24", label: "Professors" },
  { value: "8K+", label: "Students" },
];

export default function Seminary() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse 80% 50% at 50% -20%, hsl(45 76% 56% / 0.15) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 80%, hsl(45 76% 56% / 0.08) 0%, transparent 40%),
              radial-gradient(ellipse 50% 30% at 20% 70%, hsl(216 50% 20% / 0.5) 0%, transparent 50%),
              linear-gradient(180deg, hsl(216 50% 7%) 0%, hsl(216 56% 10%) 50%, hsl(216 50% 7%) 100%)
            `,
          }}
        />
        
        {/* Floating Ornamental Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 md:left-20 w-32 h-32 md:w-48 md:h-48 border border-primary/10 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-40 right-10 md:right-32 w-20 h-20 md:w-32 md:h-32 border border-primary/5 rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
          <div className="absolute bottom-32 left-1/4 w-16 h-16 md:w-24 md:h-24 border border-primary/10 rounded-full animate-pulse" style={{ animationDuration: '5s' }} />
          
          {/* Decorative Cross Pattern */}
          <div className="absolute top-1/3 right-10 md:right-20 text-primary/10">
            <span className="material-symbols-outlined text-6xl md:text-8xl">add</span>
          </div>
          <div className="absolute bottom-1/4 left-5 md:left-16 text-primary/5">
            <span className="material-symbols-outlined text-4xl md:text-6xl">add</span>
          </div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 md:space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card border-primary/30">
                <span className="material-symbols-outlined text-primary text-lg">school</span>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Sacred Knowledge</span>
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                <span className="text-foreground">Theological</span>
                <br />
                <span className="gold-glow text-primary italic">Seminary</span>
                <br />
                <span className="text-foreground/80 text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light">Archive</span>
              </h1>
              
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
                Immerse yourself in centuries of wisdom. From the early church fathers to contemporary theologians, 
                discover the depth of Christian intellectual tradition.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Button className="btn-primary btn-shine rounded-full px-8 py-4 h-auto text-sm group">
                  <span className="material-symbols-outlined mr-2 text-lg">play_circle</span>
                  Start Learning
                </Button>
                <Button variant="outline" className="btn-ghost rounded-full px-8 py-4 h-auto text-sm">
                  <span className="material-symbols-outlined mr-2 text-lg">library_books</span>
                  Browse Catalog
                </Button>
              </div>
            </div>

            {/* Right Content - Stats & Featured */}
            <div className="hidden md:flex flex-col gap-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-4 lg:gap-6">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="glass-card-hover rounded-2xl p-4 lg:p-6 text-center group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="font-serif text-3xl lg:text-4xl font-bold text-primary gold-glow group-hover:scale-110 transition-transform">
                      {stat.value}
                    </p>
                    <p className="text-[10px] lg:text-xs uppercase tracking-widest text-muted-foreground mt-2 font-semibold">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Featured Card */}
              <div className="glass-card rounded-3xl p-6 lg:p-8 relative overflow-hidden group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="premium-foil text-primary-foreground text-[10px] font-black px-3 py-1.5 rounded-md tracking-widest uppercase">
                      Featured
                    </div>
                    <span className="text-muted-foreground text-xs">New this week</span>
                  </div>
                  
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-foreground mb-2">
                    The Architecture of Genesis
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                    Exploring the structural symmetry and cosmic temple motifs in the creation narrative.
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-full bg-secondary flex items-center justify-center ring-2 ring-primary/20">
                        <span className="material-symbols-outlined text-primary">person</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-foreground">Dr. Elias Thorne</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-wide">48:22 duration</p>
                      </div>
                    </div>
                    <button className="size-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center hover:bg-primary/20 transition-colors group/play">
                      <span className="material-symbols-outlined text-primary text-xl group-hover/play:scale-110 transition-transform">
                        play_arrow
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Main Content Area */}
      <div className="flex max-w-[1600px] mx-auto">
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
        <section className="flex-1 p-6 md:p-10 lg:p-14 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-10">
            {/* Search & Filter Header */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h2 className="text-foreground font-serif text-2xl md:text-3xl font-bold">
                    Video Lectures
                  </h2>
                  <p className="text-muted-foreground text-sm mt-1">
                    {videos.length} lectures available
                  </p>
                </div>
                <div className="w-full md:w-80">
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <span className="material-symbols-outlined text-muted-foreground group-focus-within:text-primary transition-colors text-lg">
                        search
                      </span>
                    </div>
                    <Input
                      type="text"
                      placeholder="Search lectures..."
                      className="block w-full glass-card rounded-xl py-3 pl-12 pr-4 h-auto text-sm text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary/80 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Filters */}
              <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
                {filters.map((filter, index) => (
                  <button
                    key={filter}
                    className={`flex h-10 shrink-0 items-center gap-2 rounded-full px-5 text-[10px] font-bold uppercase tracking-widest transition-all ${
                      index === 0
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                        : "bg-secondary/50 border border-border text-foreground/70 hover:border-primary hover:bg-primary/5 hover:text-foreground"
                    }`}
                  >
                    {filter}
                    {filter === "Recently Added" && (
                      <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Video Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
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
                      <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground size-12 rounded-full flex items-center justify-center shadow-2xl">
                        <span className="material-symbols-outlined text-2xl font-bold">play_arrow</span>
                      </div>
                    </div>
                    
                    {/* Premium Badge */}
                    {video.premium && (
                      <div className="premium-foil absolute top-3 left-3 text-primary-foreground text-[9px] font-black px-2.5 py-1 rounded-md tracking-widest uppercase shadow-lg">
                        Premium
                      </div>
                    )}
                    
                    {/* Duration */}
                    <span className="absolute bottom-3 right-3 bg-background/80 backdrop-blur-md text-foreground text-[10px] font-bold px-2 py-0.5 rounded">
                      {video.duration}
                    </span>
                  </div>
                  
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-foreground font-serif text-lg font-bold group-hover:text-primary transition-colors leading-tight">
                      {video.title}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-2 line-clamp-2 leading-relaxed font-light italic">
                      {video.description}
                    </p>
                    <div className="mt-auto pt-4 flex items-center justify-between border-t border-border">
                      <div className="flex items-center gap-2">
                        <div className="size-7 rounded-full ring-1 ring-primary/30 overflow-hidden bg-secondary flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-xs">person</span>
                        </div>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                          {video.author}
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-muted-foreground text-base hover:text-primary cursor-pointer transition-colors">
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
