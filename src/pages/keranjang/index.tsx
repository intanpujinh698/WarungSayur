import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trash2, Plus, Minus, ShoppingCart, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/warung/Navbar";

const initialCart = [
  { id: 1, name: "Kangkung Organik Segar", price: 5000, unit: "ikat", qty: 2, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&q=80", store: "Warung Bu Sari" },
  { id: 2, name: "Bayam Hijau Premium", price: 4500, unit: "ikat", qty: 1, image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&q=80", store: "Warung Bu Sari" },
  { id: 3, name: "Tomat Merah Segar", price: 8000, unit: "kg", qty: 1, image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&q=80", store: "Warung Bu Sari" },
];

const fmt = (n: number) => "Rp " + n.toLocaleString("id-ID");

export default function Keranjang() {
  const navigate = useNavigate();
  const [cart, setCart] = useState(initialCart);
  const [voucher, setVoucher] = useState("");
  const [voucherApplied, setVoucherApplied] = useState(false);
  const [delivery, setDelivery] = useState<"antar" | "pickup">("antar");

  const updateQty = (id: number, delta: number) => {
    setCart((prev) => prev.map((item) => item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item));
  };
  const removeItem = (id: number) => setCart((prev) => prev.filter((item) => item.id !== id));

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const ongkir = delivery === "antar" ? 8000 : 0;
  const diskon = voucherApplied ? 5000 : 0;
  const total = subtotal + ongkir - diskon;

  const applyVoucher = () => {
    if (voucher.toUpperCase() === "SEGAR10") setVoucherApplied(true);
    else alert("Kode voucher tidak valid");
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="container max-w-[1000px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="text-xl font-bold text-warm-dark">Keranjang Belanja</h1>
          <span className="text-sm text-muted-foreground">({cart.length} item)</span>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-lg font-semibold text-warm-dark mb-2">Keranjang kosong</h2>
            <p className="text-muted-foreground text-sm mb-6">Yuk belanja sayur segar dulu!</p>
            <Button onClick={() => navigate("/warung")} className="bg-gradient-brand text-white rounded-xl">Belanja Sekarang</Button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-3">
              <div className="bg-card rounded-2xl border border-border p-4">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">B</div>
                  <span className="text-sm font-semibold text-warm-dark">Warung Bu Sari</span>
                </div>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-warm-dark line-clamp-1">{item.name}</p>
                        <p className="text-xs text-muted-foreground">/{item.unit}</p>
                        <p className="text-sm font-bold text-primary mt-0.5">{fmt(item.price)}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button onClick={() => updateQty(item.id, -1)} className="w-7 h-7 rounded-lg border border-border flex items-center justify-center hover:bg-muted transition-colors">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-7 h-7 rounded-lg bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors">
                          <Plus className="w-3 h-3" />
                        </button>
                        <button onClick={() => removeItem(item.id)} className="w-7 h-7 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors ml-1">
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Option */}
              <div className="bg-card rounded-2xl border border-border p-4">
                <h3 className="text-sm font-semibold text-warm-dark mb-3">Metode Pengiriman</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "antar", label: "Antar ke Rumah", desc: "Estimasi 30-60 menit", cost: "Rp 8.000" },
                    { id: "pickup", label: "Ambil Sendiri", desc: "Siap dalam 15 menit", cost: "Gratis" },
                  ].map((opt) => (
                    <button key={opt.id} onClick={() => setDelivery(opt.id as "antar" | "pickup")}
                      className={`p-3 rounded-xl border-2 text-left transition-all ${delivery === opt.id ? "border-primary bg-primary-light/20" : "border-border hover:border-primary/40"}`}>
                      <p className={`text-sm font-semibold ${delivery === opt.id ? "text-primary" : "text-foreground"}`}>{opt.label}</p>
                      <p className="text-xs text-muted-foreground">{opt.desc}</p>
                      <p className={`text-xs font-bold mt-1 ${delivery === opt.id ? "text-primary" : "text-foreground"}`}>{opt.cost}</p>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-4">
              {/* Voucher */}
              <div className="bg-card rounded-2xl border border-border p-4">
                <h3 className="text-sm font-semibold text-warm-dark mb-3 flex items-center gap-2"><Tag className="w-4 h-4 text-primary" />Voucher</h3>
                <div className="flex gap-2">
                  <Input value={voucher} onChange={(e) => setVoucher(e.target.value)} placeholder="Kode voucher" className="h-9 rounded-xl text-sm" disabled={voucherApplied} />
                  <Button onClick={applyVoucher} disabled={voucherApplied} className="h-9 px-3 rounded-xl text-xs shrink-0 bg-primary text-white">
                    {voucherApplied ? "✓" : "Pakai"}
                  </Button>
                </div>
                {voucherApplied && <p className="text-xs text-emerald-600 mt-1.5">✓ Voucher SEGAR10 berhasil diterapkan</p>}
              </div>

              {/* Price Summary */}
              <div className="bg-card rounded-2xl border border-border p-4">
                <h3 className="text-sm font-semibold text-warm-dark mb-4">Ringkasan Pesanan</h3>
                <div className="space-y-2.5 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Subtotal ({cart.reduce((s, i) => s + i.qty, 0)} item)</span><span className="font-medium">{fmt(subtotal)}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Ongkir</span><span className="font-medium">{ongkir === 0 ? "Gratis" : fmt(ongkir)}</span></div>
                  {diskon > 0 && <div className="flex justify-between"><span className="text-emerald-600">Diskon Voucher</span><span className="text-emerald-600 font-medium">-{fmt(diskon)}</span></div>}
                  <div className="border-t border-border pt-2.5 flex justify-between font-bold text-base"><span>Total</span><span className="text-primary">{fmt(total)}</span></div>
                </div>
                <Button onClick={() => navigate("/checkout")} className="w-full mt-4 bg-gradient-brand text-white font-bold h-11 rounded-xl shadow-btn hover:opacity-90">
                  Lanjut ke Checkout
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
