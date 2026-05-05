import { ArrowRight, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PromoBanner() {
  return (
    <section className="py-8 md:py-10 bg-muted/30">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Main Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary-dark p-6 sm:p-8 flex flex-col justify-between min-h-[160px] group cursor-pointer">
            {/* Decorative circles */}
            <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/5 rounded-full" />
            <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-white/5 rounded-full" />
            <div className="absolute right-4 top-4 text-5xl opacity-30 animate-float">🥦</div>
            <div className="absolute right-16 bottom-4 text-3xl opacity-25 animate-float" style={{ animationDelay: "1s" }}>🥬</div>

            <div className="relative">
              <div className="inline-flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1 text-xs font-bold text-white mb-3">
                <Tag className="w-3 h-3" /> Promo Hari Ini
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-1 leading-tight">
                Diskon 30% Semua<br />Sayuran Hijau
              </h3>
              <p className="text-white/70 text-sm mb-4">Berlaku hari ini hingga pukul 23:59</p>
              <Button className="bg-white text-primary hover:bg-primary-light font-bold text-sm rounded-xl h-9 shadow-sm group-hover:shadow-btn transition-all duration-200">
                Belanja Sekarang <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>

          {/* Two Small Banners */}
          <div className="grid grid-rows-2 gap-4">
            {/* Small Banner 1 */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-harvest to-amber-500 p-5 flex items-center gap-4 cursor-pointer group min-h-[72px]">
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl opacity-30">🥕</div>
              <div className="relative flex-1">
                <p className="text-xs font-bold text-white/80 mb-0.5">Flash Sale!</p>
                <h4 className="text-base font-extrabold text-white leading-tight">Umbi-umbian Mulai Rp 5.000</h4>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </div>

            {/* Small Banner 2 */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-primary p-5 flex items-center gap-4 cursor-pointer group min-h-[72px]">
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl opacity-30">🌿</div>
              <div className="relative flex-1">
                <p className="text-xs font-bold text-white/80 mb-0.5">Gratis Ongkir!</p>
                <h4 className="text-base font-extrabold text-white leading-tight">Min. Belanja Rp 50.000</h4>
              </div>
              <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
