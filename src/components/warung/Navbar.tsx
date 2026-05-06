import { useState } from "react";
import { ShoppingCart, Search, Menu, X, ChevronDown, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const categories = [
  "Sayuran Hijau",
  "Umbi-umbian",
  "Buah Sayur",
  "Rempah & Bumbu",
  "Kacang-kacangan",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount] = useState(3);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-3">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 shrink-0 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center shadow-sm group-hover:shadow-btn transition-shadow duration-200">
              <Leaf className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="text-[15px] font-bold text-primary leading-none">warung</span>
              <span className="text-[15px] font-bold text-harvest leading-none">sayur</span>
              <span className="text-[13px] font-medium text-muted-foreground leading-none">.id</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary-light/40 transition-colors duration-150">
              Kategori <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <a href="/produk-segar" className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary-light/40 transition-colors">Produk Segar</a>
            <button onClick={() => navigate("/warung")} className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary rounded-lg hover:bg-primary-light/40 transition-colors">Warung</button>
            <button onClick={() => navigate("/jadi-penjual")} className="px-3 py-2 text-sm font-semibold text-harvest rounded-lg hover:bg-harvest-light/60 transition-colors">Jadi Penjual</button>
          </nav>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-[360px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <Input
              type="text"
              placeholder="Cari sayuran, warung..."
              className="pl-9 pr-4 h-9 rounded-full bg-muted/50 border-border focus:border-primary focus:ring-2 focus:ring-primary-light text-sm"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <button className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setSearchOpen(!searchOpen)}>
              <Search className="w-5 h-5 text-foreground" />
            </button>

            <button onClick={() => navigate("/keranjang")} className="relative p-2 rounded-lg hover:bg-muted transition-colors">
              <ShoppingCart className="w-5 h-5 text-foreground" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-harvest text-harvest-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            <div className="hidden md:flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")} className="text-sm font-medium text-foreground hover:text-primary hover:bg-primary-light/40">
                Masuk
              </Button>
              <Button size="sm" onClick={() => navigate("/register")} className="bg-gradient-brand text-primary-foreground hover:opacity-90 shadow-btn font-semibold text-sm rounded-full px-4">
                Daftar
              </Button>
            </div>

            <button className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden py-3 border-t border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              <Input type="text" placeholder="Cari sayuran, warung..." className="pl-9 rounded-full bg-muted/50 border-border focus:border-primary" autoFocus />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border py-4 space-y-1">
            {categories.map((cat) => (
              <a key={cat} href="#" className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-primary-light/40 hover:text-primary transition-colors">{cat}</a>
            ))}
            <button onClick={() => navigate("/warung")} className="block w-full text-left px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-primary-light/40 hover:text-primary transition-colors">Warung</button>
            <div className="pt-3 flex gap-2 px-3">
              <Button variant="outline" size="sm" onClick={() => navigate("/login")} className="flex-1 border-primary text-primary hover:bg-primary-light/40">Masuk</Button>
              <Button size="sm" onClick={() => navigate("/register")} className="flex-1 bg-gradient-brand text-primary-foreground">Daftar</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
