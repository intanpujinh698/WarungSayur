import { useNavigate } from "react-router-dom";
import { Store, PackageCheck, TrendingUp, ArrowRight, CheckCircle2, Leaf, BarChart3, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/warung/Navbar";
import Footer from "@/components/warung/Footer";

const benefits = [
  "Gratis daftar & tanpa biaya bulanan",
  "Dashboard penjual lengkap & mudah",
  "Pembayaran aman, cair otomatis",
  "Jangkauan ribuan pembeli aktif",
  "Dukungan tim 7 hari seminggu",
  "Laporan penjualan real-time",
];

const steps = [
  { step: "01", icon: Store, title: "Daftarkan Warungmu", desc: "Buat akun penjual gratis, lengkapi profil warung dan verifikasi dalam hitungan menit.", color: "bg-primary-light text-primary" },
  { step: "02", icon: PackageCheck, title: "Upload Produk Sayur", desc: "Foto produk, isi nama, harga, dan stok. Langsung tampil ke ribuan pembeli aktif.", color: "bg-harvest-light text-harvest-dark" },
  { step: "03", icon: TrendingUp, title: "Terima Pesanan & Cuan!", desc: "Kelola pesanan lewat dashboard mudah. Dana masuk otomatis setelah pesanan selesai.", color: "bg-primary-light text-primary" },
];

const stats = [
  { value: "2.400+", label: "Warung Aktif", icon: Store },
  { value: "48K+", label: "Pembeli Aktif", icon: Smartphone },
  { value: "Rp 2M+", label: "GMV Bulanan", icon: BarChart3 },
];

export default function JadiPenjual() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light/40 via-background to-harvest-light/20 pt-14 pb-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl pointer-events-none" />
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 text-center relative">
          <div className="inline-flex items-center gap-2 bg-primary-light/70 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            <Store className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Untuk Penjual</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-warm-dark leading-tight mb-4">
            Jualan Sayur Online<br />
            <span className="text-primary">Lebih Mudah & Menguntungkan</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Bergabung dengan ribuan penjual yang sudah membuktikan manfaat berjualan di warungsayur.id. Gratis, mudah, dan cuan!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button onClick={() => navigate("/register")} className="bg-gradient-brand text-white font-bold h-12 px-8 rounded-xl shadow-btn hover:opacity-90 text-base">
              Daftar Gratis Sekarang <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-xl border-primary text-primary hover:bg-primary-light/30 text-base font-semibold">
              Pelajari Lebih Lanjut
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">Gratis · Tanpa kartu kredit · Mulai dalam 5 menit</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-card border-y border-border">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label} className="text-center">
                  <div className="w-10 h-10 bg-primary-light rounded-xl flex items-center justify-center mx-auto mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-extrabold text-warm-dark">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-14 md:py-16">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-warm-dark mb-3">Mulai Berjualan dalam <span className="text-primary">3 Langkah</span></h2>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">Proses pendaftaran cepat dan mudah, tidak perlu keahlian teknis.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative bg-card rounded-2xl border border-border p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background border border-border px-3 py-0.5 rounded-full text-xs font-bold text-muted-foreground">
                    Langkah {step.step}
                  </div>
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${step.color} mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-warm-dark mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits + CTA */}
      <section className="py-10 bg-muted/30">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="bg-card rounded-3xl border border-border p-6 sm:p-10 grid md:grid-cols-2 gap-8 items-center shadow-card">
            <div>
              <h3 className="text-xl font-bold text-warm-dark mb-5">Kenapa Jualan di warungsayur.id?</h3>
              <div className="space-y-3">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-light/40 to-harvest-light/30 rounded-2xl p-6 sm:p-8 border border-primary/15">
              <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mb-3">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-warm-dark mb-2">Siap Mulai Berjualan?</h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">Daftar sekarang dan dapatkan akses ke semua fitur premium gratis selama 3 bulan pertama!</p>
              <Button onClick={() => navigate("/register")} className="w-full bg-gradient-brand text-white font-bold h-11 rounded-xl shadow-btn hover:opacity-90">
                Daftarkan Warungmu <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <p className="text-center text-xs text-muted-foreground mt-3">Gratis · Tanpa kartu kredit</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
