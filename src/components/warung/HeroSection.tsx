import { useState } from "react";
import { Search, ArrowRight, MapPin, TrendingUp, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingSearches = ["Kangkung", "Bayam", "Wortel", "Tomat", "Cabai", "Buncis"];

const stats = [
  { icon: <TrendingUp className="w-4 h-4" />, value: "12.000+", label: "Produk Segar" },
  { icon: <ShieldCheck className="w-4 h-4" />, value: "2.400+", label: "Warung Terverifikasi" },
  { icon: <MapPin className="w-4 h-4" />, value: "34 Kota", label: "Se-Indonesia" },
];

export default function HeroSection() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-12 pb-16 md:pt-20 md:pb-24">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-light/30 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-harvest-light/40 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/4" />

      {/* Floating veggie icons */}
      <div className="absolute top-16 right-[10%] text-5xl animate-float hidden lg:block opacity-80" style={{ animationDelay: "0s" }}>🥦</div>
      <div className="absolute top-32 right-[22%] text-3xl animate-float hidden lg:block opacity-70" style={{ animationDelay: "1s" }}>🍅</div>
      <div className="absolute bottom-24 right-[15%] text-4xl animate-float hidden lg:block opacity-75" style={{ animationDelay: "0.5s" }}>🥕</div>
      <div className="absolute top-20 left-[8%] text-4xl animate-float hidden lg:block opacity-70" style={{ animationDelay: "1.5s" }}>🌿</div>
      <div className="absolute bottom-20 left-[12%] text-3xl animate-float hidden lg:block opacity-65" style={{ animationDelay: "2s" }}>🫑</div>

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative">
        <div className="max-w-[680px] mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-light/70 border border-primary/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-primary">Marketplace Sayur No. 1 Indonesia</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-[58px] font-extrabold text-warm-dark leading-[1.1] tracking-tight mb-5 animate-fade-in-up delay-100">
            Sayur Segar,{" "}
            <span className="relative inline-block">
              <span className="text-primary">Langsung</span>
              <span className="absolute bottom-1 left-0 w-full h-2 bg-primary-light rounded-full -z-10" />
            </span>{" "}
            dari Petani
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-[520px] mx-auto animate-fade-in-up delay-200">
            Temukan ribuan produk sayuran segar berkualitas dari warung-warung terpercaya di sekitar kamu. Pesan mudah, harga terbaik!
          </p>

          {/* Search Bar */}
          <div className="flex gap-2 bg-card rounded-2xl p-2 shadow-card-hover max-w-[560px] mx-auto animate-fade-in-up delay-300">
            <div className="flex items-center gap-2 flex-1 px-3">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Mau cari sayuran apa hari ini?"
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
            </div>
            <div className="hidden sm:flex items-center gap-1.5 border-l border-border pl-3 pr-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Jakarta</span>
            </div>
            <Button className="bg-gradient-brand text-primary-foreground shadow-btn hover:opacity-90 rounded-xl font-semibold px-5 shrink-0">
              Cari
            </Button>
          </div>

          {/* Trending */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5 animate-fade-in-up delay-400">
            <span className="text-xs text-muted-foreground font-medium">Populer:</span>
            {trendingSearches.map((item) => (
              <button
                key={item}
                className="text-xs font-medium px-3 py-1 rounded-full bg-card border border-border hover:border-primary hover:text-primary hover:bg-primary-light/30 transition-colors duration-150 text-muted-foreground"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 md:mt-16 grid grid-cols-3 gap-3 sm:gap-6 max-w-[560px] mx-auto animate-fade-in-up delay-500">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-1 bg-card/80 backdrop-blur-sm rounded-2xl px-3 py-4 shadow-card border border-border/60 text-center"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-light text-primary mb-1">
                {stat.icon}
              </div>
              <div className="text-lg sm:text-xl font-bold text-warm-dark">{stat.value}</div>
              <div className="text-[11px] sm:text-xs text-muted-foreground font-medium leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
