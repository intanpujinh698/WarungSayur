import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Star, ShieldCheck, Package, Clock, ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/warung/Navbar";
import Footer from "@/components/warung/Footer";

const warungData: Record<string, any> = {
  "1": { name: "Warung Bu Sari", avatar: "B", avatarColor: "bg-primary", banner: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=1200&q=80", location: "Jl. Kebon Jeruk No. 12, Jakarta Barat", rating: 4.9, sold: "12K+", products: 145, open: true, hours: "05:00 - 18:00", verified: true, desc: "Warung sayur segar organik terpercaya sejak 2018. Semua produk dipanen langsung dari kebun mitra kami." },
  "2": { name: "Kebun Pak Budi", avatar: "K", avatarColor: "bg-harvest", banner: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=1200&q=80", location: "Jl. Raya Bogor No. 45, Bogor", rating: 4.8, sold: "8.5K+", products: 87, open: true, hours: "06:00 - 17:00", verified: true, desc: "Petani langsung dari Bogor. Sayur dipetik pagi hari, dikirim segar ke rumahmu." },
};

const products = [
  { id: 1, name: "Kangkung Organik Segar", price: "Rp 5.000", unit: "ikat", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&q=80", stock: 50, badge: "segar" },
  { id: 2, name: "Bayam Hijau Premium", price: "Rp 4.500", unit: "ikat", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&q=80", stock: 30, badge: "terlaris" },
  { id: 3, name: "Wortel Baby Manis", price: "Rp 12.000", unit: "kg", image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400&q=80", stock: 20, badge: "promo" },
  { id: 4, name: "Tomat Merah Segar", price: "Rp 8.000", unit: "kg", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=400&q=80", stock: 40 },
  { id: 5, name: "Cabai Merah Keriting", price: "Rp 35.000", unit: "kg", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&q=80", stock: 15 },
  { id: 6, name: "Selada Romaine Crispy", price: "Rp 9.000", unit: "pcs", image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=400&q=80", stock: 25, badge: "segar" },
];

const badgeStyle: Record<string, string> = {
  segar: "bg-primary text-white",
  terlaris: "bg-amber-500 text-white",
  promo: "bg-harvest text-white",
};

export default function WarungDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const warung = warungData[id || "1"] || warungData["1"];
  const [cart, setCart] = useState<Record<number, number>>({});
  const [wishlisted, setWishlisted] = useState<Record<number, boolean>>({});

  const addToCart = (productId: number) => {
    setCart((prev) => ({ ...prev, [productId]: (prev[productId] || 0) + 1 }));
  };

  const totalCartItems = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Banner */}
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <img src={warung.banner} alt={warung.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50" />
        <button onClick={() => navigate("/warung")} className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
          <ArrowLeft className="w-4 h-4 text-gray-700" />
        </button>
      </div>

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Store Info Card */}
        <div className="bg-card rounded-2xl border border-border shadow-card -mt-8 relative z-10 p-5 mb-8">
          <div className="flex items-start gap-4">
            <div className={`w-14 h-14 rounded-2xl ${warung.avatarColor} flex items-center justify-center text-xl font-bold text-white shrink-0 -mt-10 border-4 border-white shadow`}>
              {warung.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-lg font-bold text-warm-dark">{warung.name}</h1>
                {warung.verified && <ShieldCheck className="w-4 h-4 text-primary" />}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                <MapPin className="w-3 h-3" />{warung.location}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{warung.desc}</p>
            </div>
          </div>

          <div className="flex items-center gap-5 mt-4 pt-4 border-t border-border">
            <div className="flex items-center gap-1"><Star className="w-4 h-4 fill-amber-400 text-amber-400" /><span className="text-sm font-bold">{warung.rating}</span></div>
            <div className="flex items-center gap-1"><Package className="w-4 h-4 text-muted-foreground" /><span className="text-sm text-muted-foreground">{warung.products} produk</span></div>
            <div className="flex items-center gap-1"><Clock className="w-4 h-4 text-muted-foreground" /><span className="text-sm text-muted-foreground">{warung.hours}</span></div>
            <div className={`ml-auto text-xs font-bold px-2.5 py-1 rounded-full ${warung.open ? "bg-emerald-100 text-emerald-700" : "bg-gray-100 text-gray-500"}`}>
              {warung.open ? "Buka" : "Tutup"}
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold text-warm-dark">Produk Tersedia</h2>
          <span className="text-sm text-muted-foreground">{products.length} produk</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {products.map((product) => (
            <div key={product.id} onClick={() => navigate(`/produk/${product.id}`)}
              className="bg-card rounded-2xl border border-border overflow-hidden cursor-pointer group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200">
              <div className="relative aspect-[4/3] overflow-hidden bg-primary-light/20">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                {product.badge && (
                  <span className={`absolute top-2 left-2 text-[11px] font-bold px-2 py-0.5 rounded-full ${badgeStyle[product.badge]}`}>
                    {product.badge === "segar" ? "Segar" : product.badge === "terlaris" ? "Terlaris" : "Promo"}
                  </span>
                )}
                <button onClick={(e) => { e.stopPropagation(); setWishlisted((p) => ({ ...p, [product.id]: !p[product.id] })); }}
                  className="absolute top-2 right-2 w-7 h-7 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className={`w-3.5 h-3.5 ${wishlisted[product.id] ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
                </button>
              </div>
              <div className="p-3">
                <h3 className="text-sm font-semibold text-warm-dark mb-1 line-clamp-2 group-hover:text-primary transition-colors">{product.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-base font-bold text-primary">{product.price}</span>
                  <span className="text-xs text-muted-foreground">/{product.unit}</span>
                </div>
                <Button onClick={(e) => { e.stopPropagation(); addToCart(product.id); }}
                  className="w-full h-8 text-xs font-semibold rounded-xl bg-harvest text-white hover:bg-harvest-dark">
                  <ShoppingCart className="w-3.5 h-3.5 mr-1.5" />
                  {cart[product.id] ? `Ditambah (${cart[product.id]})` : "+ Keranjang"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Cart */}
      {totalCartItems > 0 && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
          <Button onClick={() => navigate("/keranjang")} className="bg-primary text-white font-bold px-6 py-3 rounded-2xl shadow-lg flex items-center gap-3 h-auto">
            <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">{totalCartItems}</div>
            Lihat Keranjang
            <span className="text-white/70 text-sm font-normal">→</span>
          </Button>
        </div>
      )}

      <Footer />
    </div>
  );
}
