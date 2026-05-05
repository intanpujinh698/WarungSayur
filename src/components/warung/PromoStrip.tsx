import { Truck, BadgeCheck, Clock, RefreshCw } from "lucide-react";

const features = [
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Pengiriman Cepat",
    desc: "Sampai di hari yang sama",
    color: "text-primary",
    bg: "bg-primary-light/50",
  },
  {
    icon: <BadgeCheck className="w-5 h-5" />,
    title: "Dijamin Segar",
    desc: "Atau uang kembali 100%",
    color: "text-primary",
    bg: "bg-primary-light/50",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Panen Pagi Ini",
    desc: "Langsung dari sumbernya",
    color: "text-harvest-dark",
    bg: "bg-harvest-light/60",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Retur Mudah",
    desc: "Proses 1x24 jam",
    color: "text-primary",
    bg: "bg-primary-light/50",
  },
];

export default function PromoStrip() {
  return (
    <section className="py-6 md:py-8 border-y border-border bg-card">
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-3 p-3 sm:p-4 rounded-xl hover:bg-muted/40 transition-colors duration-150"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${f.bg} ${f.color}`}>
                {f.icon}
              </div>
              <div>
                <div className="text-sm font-semibold text-warm-dark leading-tight">{f.title}</div>
                <div className="text-xs text-muted-foreground">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}