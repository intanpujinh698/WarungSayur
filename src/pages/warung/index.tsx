import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, MapPin, Star, Filter, ShieldCheck, Package, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/warung/Navbar";
import Footer from "@/components/warung/Footer";

const warungList = [
  { id: 1, name: "Warung Bu Sari", avatar: "B", avatarColor: "bg-primary", banner: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80", location: "Jakarta Barat", rating: 4.9, products: 145, sold: "12K+", tags: ["Organik", "Grosir"], verified: true, topSeller: true, distance: "0.3 km", open: true },
  { id: 2, name: "Kebun Pak Budi", avatar: "K", avatarColor: "bg-harvest", banner: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=80", location: "Bogor, Jawa Barat", rating: 4.8, products: 87, sold: "8.5K+", tags: ["Lokal", "Petani Langsung"], verified: true, topSeller: false, distance: "0.8 km", open: true },
  { id: 3, name: "Farm Fresh ID", avatar: "F", avatarColor: "bg-green-600", banner: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=600&q=80", location: "Jakarta Selatan", rating: 4.9, products: 203, sold: "20K+", tags: ["Premium", "Hidroponik"], verified: true, topSeller: true, distance: "1.2 km", open: true },
  { id: 4, name: "UD Segar Jaya", avatar: "U", avatarColor: "bg-amber-600", banner: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80", location: "Bekasi", rating: 4.7, products: 62, sold: "4K+", tags: ["Rempah & Bumbu"], verified: true, topSeller: false, distance: "2.1 km", open: false },
  { id: 5, name: "Pasar Subuh Cikaret", avatar: "P", avatarColor: "bg-emerald-600", banner: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&q=80", location: "Garut, Jawa Barat", rating: 4.8, products: 120, sold: "9K+", tags: ["Pre-order", "Grosir"], verified: true, topSeller: false, distance: "1.5 km", open: true },
  { id: 6, name: "Tani Mandiri", avatar: "T", avatarColor: "bg-blue-600", banner: "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=600&q=80", location: "Depok", rating: 4.6, products: 54, sold: "3K+", tags: ["Organik"], verified: false, topSeller: false, distance: "3.0 km", open: true },
];

const filters = ["Semua", "Terdekat", "Terpopuler", "Terverifikasi", "Buka Sekarang"];

export default function WarungPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = warungList.filter((w) => {
    const matchSearch = w.name.toLowerCase().includes(search.toLowerCase()) || w.location.toLowerCase().includes(search.toLowerCase());
    if (activeFilter === "Terverifikasi") return matchSearch && w.verified;
    if (activeFilter === "Buka Sekarang") return matchSearch && w.open;
    if (activeFilter === "Terpopuler") return matchSearch && w.topSeller;
    return matchSearch;
  });

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-warm-dark mb-1">Warung Sayur</h1>
          <p className="text-muted-foreground text-sm">{warungList.length} warung ditemukan di sekitarmu</p>
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Cari nama warung atau lokasi..." className="pl-9 rounded-xl h-10" />
          </div>
          <Button variant="outline" className="flex items-center gap-2 rounded-xl h-10 border-border">
            <Filter className="w-4 h-4" /> Filter
          </Button>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 flex-wrap mb-8">
          {filters.map((f) => (
            <button key={f} onClick={() => setActiveFilter(f)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${activeFilter === f ? "bg-primary text-white" : "bg-card border border-border text-foreground hover:border-primary hover:text-primary"}`}>
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((warung) => (
            <div key={warung.id} onClick={() => navigate(`/warung/${warung.id}`)}
              className="bg-card rounded-2xl border border-border overflow-hidden cursor-pointer group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200">
              {/* Banner */}
              <div className="relative h-32 overflow-hidden">
                <img src={warung.banner} alt={warung.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                {warung.topSeller && <div className="absolute top-2 right-2 bg-harvest text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Top Seller</div>}
                <div className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${warung.open ? "bg-emerald-500 text-white" : "bg-gray-400 text-white"}`}>
                  {warung.open ? "Buka" : "Tutup"}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className={`w-9 h-9 rounded-full ${warung.avatarColor} flex items-center justify-center text-sm font-bold text-white -mt-6 border-2 border-white shadow-sm`}>
                      {warung.avatar}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-warm-dark group-hover:text-primary transition-colors">{warung.name}</h3>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{warung.location}</span>
                      </div>
                    </div>
                  </div>
                  {warung.verified && <ShieldCheck className="w-4 h-4 text-primary shrink-0" />}
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1"><Star className="w-3 h-3 fill-amber-400 text-amber-400" /><span className="text-xs font-semibold">{warung.rating}</span></div>
                  <div className="flex items-center gap-1"><Package className="w-3 h-3 text-muted-foreground" /><span className="text-xs text-muted-foreground">{warung.products} produk</span></div>
                  <span className="text-xs text-muted-foreground">{warung.distance}</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {warung.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full">{tag}</span>
                  ))}
                </div>

                <button className="w-full flex items-center justify-center gap-1 text-xs font-semibold text-primary border border-primary/30 hover:border-primary rounded-xl py-2 hover:bg-primary-light/30 transition-all">
                  Kunjungi Warung <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
