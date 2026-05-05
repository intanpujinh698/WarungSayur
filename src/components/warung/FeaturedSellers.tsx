import { MapPin, ArrowRight, ShieldCheck, Star, Package } from "lucide-react";
import { Button } from "@/components/ui/button";

const sellers = [
  {
    id: 1,
    name: "Warung Bu Sari",
    avatar: "B",
    avatarColor: "bg-primary",
    banner: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80",
    location: "Jakarta Barat",
    rating: 4.9,
    products: 145,
    sold: "12K+",
    tags: ["Sayuran Organik", "Grosir"],
    verified: true,
    topSeller: true,
  },
  {
    id: 2,
    name: "Kebun Pak Budi",
    avatar: "K",
    avatarColor: "bg-harvest",
    banner: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=80",
    location: "Bogor, Jawa Barat",
    rating: 4.8,
    products: 87,
    sold: "8.5K+",
    tags: ["Produk Lokal", "Petani Langsung"],
    verified: true,
    topSeller: false,
  },
  {
    id: 3,
    name: "Farm Fresh ID",
    avatar: "F",
    avatarColor: "bg-green-600",
    banner: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80",
    location: "Jakarta Selatan",
    rating: 4.9,
    products: 203,
    sold: "20K+",
    tags: ["Premium", "Hidroponik"],
    verified: true,
    topSeller: true,
  },
  {
    id: 4,
    name: "UD Segar Jaya",
    avatar: "U",
    avatarColor: "bg-amber-600",
    banner: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80",
    location: "Bekasi",
    rating: 4.7,
    products: 62,
    sold: "4K+",
    tags: ["Rempah & Bumbu"],
    verified: true,
    topSeller: false,
  },
];

export default function FeaturedSellers() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Warung Terbaik</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-warm-dark">Warung Terpercaya</h2>
            <p className="text-muted-foreground text-sm mt-1">Penjual dengan reputasi terbaik dan produk berkualitas</p>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors link-underline">
            Semua Warung <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Sellers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {sellers.map((seller) => (
            <div
              key={seller.id}
              className="bg-card rounded-2xl border border-border overflow-hidden cursor-pointer group transition-all duration-200 hover:shadow-card-hover hover:-translate-y-1"
            >
              {/* Banner */}
              <div className="relative h-24 overflow-hidden bg-primary-light/30">
                <img
                  src={seller.banner}
                  alt={seller.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />

                {/* Top Seller Badge */}
                {seller.topSeller && (
                  <div className="absolute top-2 right-2 bg-harvest text-harvest-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Top Seller
                  </div>
                )}
              </div>

              {/* Avatar - Overlapping */}
              <div className="px-4 pb-4">
                <div className="flex items-end justify-between -mt-5 mb-3">
                  <div className={`w-10 h-10 rounded-full ${seller.avatarColor} border-2 border-white shadow-sm flex items-center justify-center text-sm font-bold text-white`}>
                    {seller.avatar}
                  </div>
                  {seller.verified && (
                    <div className="flex items-center gap-1 bg-primary-light/60 px-2 py-0.5 rounded-full">
                      <ShieldCheck className="w-3 h-3 text-primary" />
                      <span className="text-[10px] font-semibold text-primary">Terverifikasi</span>
                    </div>
                  )}
                </div>

                {/* Name & Location */}
                <h3 className="text-sm font-bold text-warm-dark group-hover:text-primary transition-colors duration-150 mb-0.5">
                  {seller.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  <MapPin className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{seller.location}</span>
                </div>

                {/* Stats */}
                <div className="flex gap-3 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-warm-dark">{seller.rating}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Package className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{seller.products} produk</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {seller.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full flex items-center justify-center gap-1 text-xs font-semibold text-primary hover:text-primary-dark border border-primary/30 hover:border-primary rounded-xl py-2 hover:bg-primary-light/30 transition-all duration-150">
                  Kunjungi Warung <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
