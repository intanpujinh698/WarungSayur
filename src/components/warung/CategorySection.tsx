import { useState } from "react";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "all",
    label: "Semua",
    emoji: "🛒",
    bg: "bg-primary-light/60",
    activeBg: "bg-primary",
    count: 1240,
  },
  {
    id: "sayuran-hijau",
    label: "Sayuran Hijau",
    emoji: "🥬",
    bg: "bg-primary-light/50",
    activeBg: "bg-primary",
    count: 342,
  },
  {
    id: "umbi",
    label: "Umbi-umbian",
    emoji: "🥕",
    bg: "bg-harvest-light/60",
    activeBg: "bg-harvest",
    count: 186,
  },
  {
    id: "buah-sayur",
    label: "Buah Sayur",
    emoji: "🍅",
    bg: "bg-red-50",
    activeBg: "bg-primary",
    count: 215,
  },
  {
    id: "rempah",
    label: "Rempah & Bumbu",
    emoji: "🌶️",
    bg: "bg-harvest-light/50",
    activeBg: "bg-harvest",
    count: 298,
  },
  {
    id: "kacang",
    label: "Kacang-kacangan",
    emoji: "🫘",
    bg: "bg-amber-50",
    activeBg: "bg-primary",
    count: 143,
  },
  {
    id: "herbal",
    label: "Herbal & Jamu",
    emoji: "🌿",
    bg: "bg-primary-light/40",
    activeBg: "bg-primary",
    count: 87,
  },
  {
    id: "jamur",
    label: "Jamur Segar",
    emoji: "🍄",
    bg: "bg-stone-100",
    activeBg: "bg-primary",
    count: 56,
  },
];

const featuredCategories = [
  {
    label: "Sayuran Hijau",
    emoji: "🥬",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80",
    count: "342 produk",
    color: "from-primary/80 to-primary-dark/90",
  },
  {
    label: "Umbi-umbian",
    emoji: "🥕",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80",
    count: "186 produk",
    color: "from-harvest/80 to-harvest-dark/90",
  },
  {
    label: "Buah Sayur",
    emoji: "🍅",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80",
    count: "215 produk",
    color: "from-red-500/80 to-red-700/90",
  },
  {
    label: "Rempah & Bumbu",
    emoji: "🌶️",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80",
    count: "298 produk",
    color: "from-harvest/80 to-amber-700/90",
  },
];

export default function CategorySection() {
  const [active, setActive] = useState("all");

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Jelajahi</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-warm-dark">Kategori Sayuran</h2>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors link-underline">
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Category Cards - Large Featured */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {featuredCategories.map((cat) => (
            <div
              key={cat.label}
              className="relative overflow-hidden rounded-2xl cursor-pointer group aspect-[4/3]"
            >
              {/* Background Image */}
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="text-2xl mb-1">{cat.emoji}</div>
                <div className="text-base font-bold text-white leading-tight">{cat.label}</div>
                <div className="text-xs text-white/80 mt-0.5">{cat.count}</div>
              </div>

              {/* Hover Arrow */}
              <div className="absolute top-3 right-3 w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Category Chips Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 whitespace-nowrap shrink-0 snap-start
                ${active === cat.id
                  ? "bg-primary text-primary-foreground shadow-btn scale-[1.02]"
                  : "bg-card border border-border text-foreground hover:border-primary hover:text-primary hover:bg-primary-light/30"
                }
              `}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
              <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${active === cat.id ? "bg-white/20 text-white" : "bg-muted text-muted-foreground"}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
