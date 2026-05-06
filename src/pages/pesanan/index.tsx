import { useNavigate } from "react-router-dom";
import { ArrowLeft, CheckCircle, Clock, Package, Truck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/warung/Navbar";
import { cn } from "@/lib/utils";

const orders = [
  {
    id: "#ORD-1091", store: "Warung Bu Sari", total: "Rp 22.000", date: "5 Mei 2026", status: "selesai",
    items: ["Kangkung 2 ikat", "Bayam 1 ikat"],
    timeline: ["selesai", "dikirim", "diproses", "dikonfirmasi"],
  },
  {
    id: "#ORD-1088", store: "Kebun Pak Budi", total: "Rp 45.000", date: "4 Mei 2026", status: "dikirim",
    items: ["Wortel Baby 1 kg", "Tomat 1 kg"],
    timeline: ["dikirim", "diproses", "dikonfirmasi"],
  },
  {
    id: "#ORD-1080", store: "Farm Fresh ID", total: "Rp 18.000", date: "3 Mei 2026", status: "diproses",
    items: ["Selada Romaine 2 pcs"],
    timeline: ["diproses", "dikonfirmasi"],
  },
];

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  selesai: { label: "Selesai", color: "text-emerald-700", bg: "bg-emerald-100" },
  dikirim: { label: "Sedang Dikirim", color: "text-blue-700", bg: "bg-blue-100" },
  diproses: { label: "Diproses", color: "text-amber-700", bg: "bg-amber-100" },
  dikonfirmasi: { label: "Dikonfirmasi", color: "text-gray-600", bg: "bg-gray-100" },
  batal: { label: "Dibatalkan", color: "text-red-600", bg: "bg-red-100" },
};

const timelineSteps = [
  { key: "dikonfirmasi", label: "Pesanan Dikonfirmasi", icon: CheckCircle },
  { key: "diproses", label: "Sedang Diproses", icon: Package },
  { key: "dikirim", label: "Sedang Dikirim", icon: Truck },
  { key: "selesai", label: "Pesanan Selesai", icon: CheckCircle },
];

export default function Pesanan() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="container max-w-[800px] mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={() => navigate(-1)} className="p-2 rounded-lg hover:bg-muted transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <h1 className="text-xl font-bold text-warm-dark">Pesanan Saya</h1>
        </div>

        <div className="space-y-4">
          {orders.map((order) => {
            const st = statusConfig[order.status];
            const activeStepIdx = timelineSteps.findIndex((s) => s.key === order.status);
            return (
              <div key={order.id} className="bg-card rounded-2xl border border-border overflow-hidden">
                {/* Header */}
                <div className="px-5 py-4 border-b border-border flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{order.id} · {order.date}</p>
                    <p className="text-sm font-semibold text-warm-dark mt-0.5">{order.store}</p>
                  </div>
                  <span className={cn("text-xs font-semibold px-2.5 py-1 rounded-full", st.color, st.bg)}>{st.label}</span>
                </div>

                {/* Items */}
                <div className="px-5 py-3 border-b border-border">
                  {order.items.map((item) => (
                    <p key={item} className="text-sm text-muted-foreground">· {item}</p>
                  ))}
                  <p className="text-sm font-bold text-primary mt-2">{order.total}</p>
                </div>

                {/* Timeline */}
                <div className="px-5 py-4 border-b border-border">
                  <div className="flex items-center justify-between relative">
                    <div className="absolute top-4 left-4 right-4 h-0.5 bg-gray-100" />
                    <div className={cn("absolute top-4 left-4 h-0.5 bg-primary transition-all", {
                      "w-0": activeStepIdx === 0,
                      "w-1/3": activeStepIdx === 1,
                      "w-2/3": activeStepIdx === 2,
                      "w-full": activeStepIdx === 3,
                    })} style={{ right: "auto" }} />
                    {timelineSteps.map((step, idx) => {
                      const Icon = step.icon;
                      const done = idx <= activeStepIdx;
                      return (
                        <div key={step.key} className="flex flex-col items-center gap-1.5 relative z-10">
                          <div className={cn("w-8 h-8 rounded-full flex items-center justify-center border-2 transition-colors", done ? "bg-primary border-primary" : "bg-white border-gray-200")}>
                            <Icon className={cn("w-3.5 h-3.5", done ? "text-white" : "text-gray-300")} />
                          </div>
                          <span className={cn("text-[10px] font-medium text-center max-w-[60px] leading-tight", done ? "text-primary" : "text-gray-300")}>
                            {step.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Actions */}
                <div className="px-5 py-3 flex items-center gap-3">
                  {order.status === "selesai" ? (
                    <>
                      <Button variant="outline" size="sm" className="rounded-xl border-primary text-primary hover:bg-primary-light/20 text-xs">
                        <Star className="w-3.5 h-3.5 mr-1.5" /> Beri Ulasan
                      </Button>
                      <Button size="sm" onClick={() => navigate(`/warung/1`)} className="rounded-xl bg-gradient-brand text-white text-xs">
                        Beli Lagi
                      </Button>
                    </>
                  ) : order.status === "dikirim" ? (
                    <div className="flex items-center gap-1.5 text-xs text-blue-600">
                      <Truck className="w-3.5 h-3.5" /> Estimasi tiba dalam 15-30 menit
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-amber-600">
                      <Clock className="w-3.5 h-3.5" /> Warung sedang memproses pesananmu
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
