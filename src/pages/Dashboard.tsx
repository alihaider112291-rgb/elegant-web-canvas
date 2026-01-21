import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-library.jpg";

const weekSchedule = [
  {
    day: "Mon",
    date: "14",
    title: "Morning Liturgy & Syntax",
    time: "Completed • 06:00 AM",
    status: "completed",
  },
  {
    day: "Tue",
    date: "15",
    title: "Systematic Theology II",
    time: "Active Session • 10:00 AM",
    status: "active",
    live: true,
  },
  {
    day: "Wed",
    date: "16",
    title: "Historical Apologetics",
    time: "Scheduled • 02:00 PM",
    status: "upcoming",
  },
  {
    day: "Thu",
    date: "17",
    title: "Personal Reflection",
    time: "Self-Guided • All Day",
    status: "upcoming",
    italic: true,
  },
  {
    day: "Fri",
    date: "18",
    title: "Greek Exegesis Seminar",
    time: "Scheduled • 06:00 PM",
    status: "upcoming",
  },
];

export default function Dashboard() {
  return (
    <Layout showFooter={false}>
      <div className="flex h-[calc(100vh-80px)] mt-20">
        {/* Left - Hero Image */}
        <section className="flex-1 lg:flex-[1.1] relative overflow-hidden group hidden lg:block">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[20s] ease-out scale-110 group-hover:scale-100"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 z-10 vignette bg-background/40" />

          {/* Greek Text Overlay */}
          <div className="absolute inset-0 z-15 flex flex-wrap gap-4 p-4 text-[10px] uppercase overflow-hidden opacity-5 pointer-events-none select-none font-serif leading-snug">
            <p>
              Ἐν ἀρχῇ ἦν ὁ λόγος καὶ ὁ λόγος ἦν πρὸς τὸν θεόν καὶ θεὸς ἦν ὁ λόγος. In the beginning was the Word, and the Word was with God, and the Word was God. Omnia per ipsum facta sunt et sine ipso factum est nihil quod factum est. In ipso vita erat et vita erat lux hominum.
            </p>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 h-full flex flex-col justify-end p-16 lg:p-24 bg-gradient-to-t from-background via-transparent to-transparent">
            <div className="max-w-2xl animate-fade-in">
              <div className="inline-flex items-center gap-3 border-l-2 border-primary pl-4 mb-8">
                <span className="text-primary text-[10px] font-bold tracking-widest-xl uppercase">
                  This Week's Focal Point
                </span>
              </div>
              <h1 className="font-serif text-6xl lg:text-8xl text-foreground font-normal leading-[0.9] mb-8">
                The <span className="italic text-primary">Logos</span> <br />& Divine Light
              </h1>
              <p className="font-serif text-xl text-foreground/70 leading-relaxed mb-10 max-w-lg italic">
                "The light shines in the darkness, and the darkness has not overcome it."
              </p>
              <div className="flex items-center gap-6">
                <Button className="btn-primary px-10 py-5 h-auto text-xs">
                  Begin Study
                </Button>
                <Button variant="outline" className="btn-ghost px-10 py-5 h-auto text-xs">
                  Library Access
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Right - Schedule */}
        <section className="flex-1 lg:flex-[0.9] bg-card border-l border-border flex flex-col overflow-hidden">
          <div className="p-10 lg:p-14 flex-1 overflow-y-auto custom-scrollbar">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl font-serif text-foreground mb-2">Ecclesial Discipline</h2>
                <p className="text-muted-foreground text-[10px] tracking-widest uppercase">
                  Weekly Session Plan • October 14 — 20
                </p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-primary font-serif text-xl">2024</span>
                <div className="h-px w-12 bg-primary/30 mt-1" />
              </div>
            </div>

            <div className="space-y-3">
              {weekSchedule.map((item) => (
                <div
                  key={item.day}
                  className={`group border p-6 flex items-center justify-between transition-all ${
                    item.status === "active"
                      ? "border-primary/40 bg-secondary/50 shadow-[0_0_30px_hsl(45_76%_56%_/_0.05)]"
                      : item.status === "completed"
                      ? "border-border bg-secondary/20"
                      : "border-border bg-transparent hover:border-muted-foreground/30"
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 text-center">
                      <span
                        className={`block text-[10px] font-bold uppercase mb-1 ${
                          item.status === "active" ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {item.day}
                      </span>
                      {item.status === "completed" ? (
                        <span className="material-symbols-outlined text-primary/40 text-xl">
                          check_circle
                        </span>
                      ) : (
                        <span
                          className={`font-serif text-xl ${
                            item.status === "active" ? "text-foreground" : "text-foreground/60"
                          }`}
                        >
                          {item.date}
                        </span>
                      )}
                    </div>
                    <div className={`h-10 w-px ${item.status === "active" ? "bg-primary/30" : "bg-border"}`} />
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3
                          className={`font-serif text-lg ${
                            item.status === "completed"
                              ? "text-muted-foreground line-through decoration-primary/30"
                              : item.italic
                              ? "italic opacity-60 text-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {item.title}
                        </h3>
                        {item.live && (
                          <div className="flex items-center gap-1.5 bg-primary/10 px-2 py-0.5 rounded-sm border border-primary/20">
                            <span className="size-1.5 bg-primary rounded-full animate-pulse" />
                            <span className="text-primary text-[8px] font-black uppercase tracking-tighter">
                              Live
                            </span>
                          </div>
                        )}
                      </div>
                      <p
                        className={`text-[10px] tracking-wider uppercase ${
                          item.status === "active" ? "text-primary/80" : "text-muted-foreground"
                        }`}
                      >
                        {item.time}
                      </p>
                    </div>
                  </div>
                  {item.status === "active" && (
                    <button className="bg-primary text-primary-foreground size-10 flex items-center justify-center rounded-full hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-sm">play_arrow</span>
                    </button>
                  )}
                </div>
              ))}

              {/* Weekend */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="border border-border p-4 flex flex-col items-center justify-center opacity-40">
                  <span className="text-[10px] uppercase font-bold tracking-widest mb-1">Saturday</span>
                  <span className="font-serif italic text-sm">Sabbath</span>
                </div>
                <div className="border border-primary/20 bg-primary/5 p-4 flex flex-col items-center justify-center">
                  <span className="text-primary text-[10px] uppercase font-bold tracking-widest mb-1">
                    Sunday
                  </span>
                  <span className="text-foreground font-serif text-sm">Community</span>
                </div>
              </div>
            </div>

            {/* Archive Spotlight */}
            <div className="mt-12 p-8 border-t border-border flex items-start gap-6">
              <span className="material-symbols-outlined text-primary text-4xl opacity-50">
                history_edu
              </span>
              <div>
                <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-2 block">
                  Archive Spotlight
                </span>
                <h4 className="text-foreground font-serif text-xl mb-3">
                  Analysis of the Codex Sinaiticus
                </h4>
                <a
                  href="#"
                  className="text-muted-foreground text-[10px] uppercase tracking-widest font-bold hover:text-primary transition-colors flex items-center gap-2"
                >
                  Examine Document{" "}
                  <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Floating AI Button */}
      <button className="fixed bottom-10 right-10 size-14 bg-secondary text-primary border border-primary/30 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all z-50">
        <span className="material-symbols-outlined">auto_awesome</span>
      </button>
    </Layout>
  );
}
