import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Kangkung Organik Segar Premium",
    price: "Rp 5.000",
    priceUnit: "ikat",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=500&q=80",
    seller: "Warung Bu Sari",
    location: "Jakarta Barat",
    rating: 4.9,
    sold: 1250,
    badge: "segar" as const,
  },
  {
    id: 2,
    name: "Bayam Hijau Segar dari Kebun Sendiri",
    price: "Rp 4.500",
    priceUnit: "ikat",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500&q=80",
    seller: "Tani Mandiri",
    location: "Depok",
    rating: 4.8,
    sold: 876,
    badge: "terlaris" as const,
  },
  {
    id: 3,
    name: "Wortel Baby Super Manis & Renyah",
    price: "Rp 12.000",
    priceUnit: "kg",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&q=80",
    seller: "Kebun Pak Budi",
    location: "Bogor",
    rating: 4.7,
    sold: 543,
    badge: "promo" as const,
    discount: 20,
    originalPrice: "Rp 15.000",
  },
  {
    id: 4,
    name: "Tomat Merah Segar Pilihan Terbaik",
    price: "Rp 8.000",
    priceUnit: "kg",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=500&q=80",
    seller: "Warung Hijau",
    location: "Tangerang",
    rating: 4.9,
    sold: 2100,
    badge: "terlaris" as const,
  },
  {
    id: 5,
    name: "Cabai Merah Keriting Pedas Level 10",
    price: "Rp 35.000",
    priceUnit: "kg",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=500&q=80",
    seller: "UD Segar Jaya",
    location: "Bekasi",
    rating: 4.6,
    sold: 320,
  },
  {
    id: 6,
    name: "Selada Romaine Segar Super Crispy",
    price: "Rp 9.000",
    priceUnit: "pcs",
    image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&q=80",
    seller: "Farm Fresh ID",
    location: "Jakarta Selatan",
    rating: 4.8,
    sold: 690,
    badge: "segar" as const,
  },
  {
    id: 7,
    name: "Terong Ungu Lokal Pilihan Grade A",
    price: "Rp 7.500",
    priceUnit: "kg",
    image: "https://images.unsplash.com/photo-1615485736679-e28abfe4e302?w=500&q=80",
    seller: "Pasar Tani Direct",
    location: "Bandung",
    rating: 4.5,
    sold: 280,
  },
  {
    id: 8,
    name: "Buncis Segar Dipanen Pagi Ini",
    price: "Rp 11.000",
    priceUnit: "kg",
    image: "https://images.unsplash.com/photo-1567375698348-5d9d5ae99de0?w=500&q=80",
    seller: "Kebun Bu Yanti",
    location: "Cianjur",
    rating: 4.7,
    sold: 415,
    badge: "segar" as const,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-harvest mb-2">Produk Pilihan</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-warm-dark">Sayur Segar Hari Ini</h2>
            <p className="text-muted-foreground text-sm mt-1">Dipilih khusus untuk kamu dari warung terpercaya</p>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary-dark transition-colors link-underline">
            Lihat Semua <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-6 sm:hidden text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary-light/40 font-semibold">
            Lihat Semua Produk <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
