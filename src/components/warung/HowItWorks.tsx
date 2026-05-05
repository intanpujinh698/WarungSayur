import { Store, PackageCheck, TrendingUp, ArrowRight, CheckCircle2, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "01",
    icon: <Store className="w-6 h-6" />,
    title: "Daftarkan Warungmu",
    description: "Buat akun penjual gratis, lengkapi profil warung, dan verifikasi identitasmu dalam hitungan menit.",
    color: "bg-primary-light text-primary",
    borderColor: "border-primary/20",
  },
  {
    step: "02",
    icon: <PackageCheck className="w-6 h-6" />,
    title: "Upload Produk Sayurmu",
    description: "Foto produk, isi nama, harga, dan stok. Produkmu langsung tampil ke ribuan pembeli aktif.",
    color: "bg-harvest-light text-harvest-dark",
    borderColor: "border-harvest/20",
  },
  {
    step: "03",
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Terima Pesanan & Cuan!",
    description: "Kelola pesanan lewat dashboard mudah. Dana masuk otomatis setelah pesanan selesai.",
    color: "bg-primary-light text-primary",
    borderColor: "border-primary/20",
  },
];

const benefits = [
  "Gratis biaya pendaftaran & tanpa biaya bulanan",
  "Dashboard penjual lengkap & mudah digunakan",
  "Pembayaran aman dan cepat cair",
  "Jangkauan ke ribuan pembeli aktif setiap hari",
  "Dukungan tim 7 hari seminggu",
  "Analitik penjualan real-time",
];

export default function HowItWorks() {
  return (
    <section className="py-14 md:py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 via-background to-harvest-light/15 pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary-light to-harvest" />

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <div className="text-center max-w-[560px] mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-light/60 border border-primary/20 rounded-full px-4 py-1.5 mb-4">
            <Store className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wide">Untuk Penjual</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-warm-dark mb-4 leading-tight">
            Mulai Jual Sayur Online{" "}
            <span className="text-primary">Dalam 3 Langkah</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Bergabung dengan ribuan penjual yang sudah membuktikan manfaat berjualan di warungsayur.id. Mudah, cepat, dan menguntungkan!
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-14 relative">
          {/* Connector Line - Desktop */}
          <div className="hidden md:block absolute top-10 left-[22%] right-[22%] h-px bg-gradient-to-r from-primary/30 via-primary-light to-harvest/30 z-0" />

          {steps.map((step, idx) => (
            <div
              key={step.step}
              className="relative bg-card rounded-2xl border border-border p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 z-10"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background border border-border px-3 py-0.5 rounded-full text-xs font-bold text-muted-foreground">
                Langkah {step.step}
              </div>

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${step.color} mb-4 border ${step.borderColor}`}>
                {step.icon}
              </div>

              <h3 className="text-base font-bold text-warm-dark mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits + CTA Split */}
        <div className="grid md:grid-cols-2 gap-8 items-center bg-card rounded-3xl border border-border p-6 sm:p-8 md:p-10 shadow-card">
          {/* Benefits List */}
          <div>
            <h3 className="text-xl font-bold text-warm-dark mb-5">Kenapa Jualan di warungsayur.id?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2.5">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Box */}
          <div className="relative bg-gradient-to-br from-primary-light/40 to-harvest-light/30 rounded-2xl p-6 sm:p-8 border border-primary/15 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center mb-3">
                <Leaf className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-warm-dark mb-2">
                Siap Mulai Berjualan?
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Daftar sekarang dan dapatkan akses ke semua fitur premium secara gratis selama 3 bulan pertama!
              </p>
              <Button className="w-full bg-gradient-brand text-primary-foreground font-bold shadow-btn hover:opacity-90 rounded-xl h-11 text-sm mb-3">
                Daftarkan Warungmu Sekarang <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Gratis • Tanpa kartu kredit • Mulai dalam 5 menit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
