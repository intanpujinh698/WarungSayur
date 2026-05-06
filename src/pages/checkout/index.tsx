import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, CreditCard, Wallet, Smartphone, Banknote, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/warung/Navbar";
import { cn } from "@/lib/utils";

const paymentMethods = [
  { id: "qris", label: "QRIS", icon: Smartphone, desc: "Scan QR semua e-wallet" },
  { id: "transfer", label: "Transfer Bank", icon: CreditCard, desc: "BCA, Mandiri, BRI, BNI" },
  { id: "ewallet", label: "E-Wallet", icon: Wallet, desc: "GoPay, OVO, Dana, ShopeePay" },
  { id: "cod", label: "COD", icon: Banknote, desc: "Bayar saat barang sampai" },
];

const cartItems = [
  { id: 1, name: "Kangkung Organik Segar", price: 5000, qty: 2, unit: "ikat", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=100&q=80" },
  { id: 2, name: "Bayam Hijau Premium", price: 4500, qty: 1, unit: "ikat", image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=100&q=80" },
  { id: 3, name: "Tomat Merah Segar", price: 8000, qty: 1, unit: "kg", image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=100&q=80" },
];

const fmt = (n: number) => "Rp " + n.toLocaleString("id-ID");

export default function Checkout() {
  const navigate = useNavigate();
  const [payment, setPayment] = useState("qris");
  const [orderDone, setOrderDone] = useState(false);
  const [alamat, setAlamat] = useState({ nama: "", hp: "", jalan: "", kota: "", catatan: "" });

  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0);
  const ongkir = 8000;
  const total = subtotal + ongkir;

  const handleOrder = () => setOrderDone(true);

  if (orderDone) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h1 className="text-2xl font-bold text-warm-dark mb-2">Pesanan Berhasil!</h1>
          <p className="text-muted-foreground text-sm mb-2">Pesanan kamu sedang diproses oleh warung.</p>
          <p className="text-xs text-muted-foreground mb-8">No. pesanan: <span className="font-bold text-primary">#ORD-{Math.floor(Math.random() * 9000) + 1000}</span></p>
          <div className="space-y-3">
            <Button onClick={() => navigate("/pesanan")} className="w-full bg-gradient-brand text-white font-bold rounded-xl h-11">Pantau Status Pesanan</Button>
            <Button onClick={() => navigate("/")} variant="outline" className="w-full rounded-xl h-11 border-primary text-primary">Kembali Belanja</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="container max-w-[1000px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate("/keranjang")} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="text-xl font-bold text-warm-dark">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            {/* Alamat */}
            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="text-sm font-semibold text-warm-dark mb-4 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" />Alamat Pengiriman</h3>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Nama Penerima</label>
                  <Input value={alamat.nama} onChange={(e) => setAlamat({ ...alamat, nama: e.target.value })} placeholder="Nama lengkap" className="h-9 rounded-xl text-sm" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">No. HP</label>
                  <Input value={alamat.hp} onChange={(e) => setAlamat({ ...alamat, hp: e.target.value })} placeholder="08xxxxxxxxxx" className="h-9 rounded-xl text-sm" />
                </div>
                <div className="col-span-2">
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Alamat Lengkap</label>
                  <Input value={alamat.jalan} onChange={(e) => setAlamat({ ...alamat, jalan: e.target.value })} placeholder="Nama jalan, nomor rumah, RT/RW" className="h-9 rounded-xl text-sm" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Kota / Kecamatan</label>
                  <Input value={alamat.kota} onChange={(e) => setAlamat({ ...alamat, kota: e.target.value })} placeholder="Jakarta Barat" className="h-9 rounded-xl text-sm" />
                </div>
                <div>
                  <label className="text-xs font-medium text-muted-foreground mb-1 block">Catatan (opsional)</label>
                  <Input value={alamat.catatan} onChange={(e) => setAlamat({ ...alamat, catatan: e.target.value })} placeholder="Patokan rumah..." className="h-9 rounded-xl text-sm" />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="bg-card rounded-2xl border border-border p-5">
              <h3 className="text-sm font-semibold text-warm-dark mb-4 flex items-center gap-2"><CreditCard className="w-4 h-4 text-primary" />Metode Pembayaran</h3>
              <div className="grid grid-cols-2 gap-3">
                {paymentMethods.map((m) => {
                  const Icon = m.icon;
                  return (
                    <button key={m.id} onClick={() => setPayment(m.id)}
                      className={cn("p-3 rounded-xl border-2 text-left transition-all", payment === m.id ? "border-primary bg-primary-light/20" : "border-border hover:border-primary/40")}>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className={cn("w-4 h-4", payment === m.id ? "text-primary" : "text-muted-foreground")} />
                        <span className={cn("text-sm font-semibold", payment === m.id ? "text-primary" : "text-foreground")}>{m.label}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">{m.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-4">
            <div className="bg-card rounded-2xl border border-border p-4">
              <h3 className="text-sm font-semibold text-warm-dark mb-3">Ringkasan Pesanan</h3>
              <div className="space-y-3 mb-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-10 h-10 rounded-lg object-cover shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-warm-dark line-clamp-1">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.qty}x {fmt(item.price)}</p>
                    </div>
                    <span className="text-xs font-semibold shrink-0">{fmt(item.price * item.qty)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-3 space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>{fmt(subtotal)}</span></div>
                <div className="flex justify-between"><span className="text-muted-foreground">Ongkir</span><span>{fmt(ongkir)}</span></div>
                <div className="flex justify-between font-bold text-base pt-1 border-t border-border"><span>Total</span><span className="text-primary">{fmt(total)}</span></div>
              </div>
              <Button onClick={handleOrder} className="w-full mt-4 bg-gradient-brand text-white font-bold h-11 rounded-xl shadow-btn hover:opacity-90">
                Buat Pesanan — {fmt(total)}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
