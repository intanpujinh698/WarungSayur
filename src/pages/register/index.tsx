import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Leaf, Eye, EyeOff, ArrowLeft, User, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export default function Register() {
  const navigate = useNavigate();
  const [role, setRole] = useState<"pembeli" | "penjual">("pembeli");
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ nama: "", email: "", noHp: "", password: "", namaWarung: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate auth
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/30 via-background to-harvest-light/20 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-[440px]">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke beranda
        </button>

        <div className="bg-card rounded-2xl border border-border shadow-card p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-base font-bold text-primary">warung</span>
              <span className="text-base font-bold text-harvest">sayur</span>
              <span className="text-sm text-muted-foreground">.id</span>
            </div>
          </div>

          <h1 className="text-xl font-bold text-warm-dark mb-1">Buat akun baru</h1>
          <p className="text-sm text-muted-foreground mb-5">Sudah punya akun? <Link to="/login" className="text-primary font-semibold hover:underline">Masuk</Link></p>

          {/* Role Selector */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { id: "pembeli", label: "Saya Pembeli", icon: User, desc: "Beli sayur segar" },
              { id: "penjual", label: "Saya Penjual", icon: Store, desc: "Jualan sayur online" },
            ].map((r) => {
              const Icon = r.icon;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRole(r.id as "pembeli" | "penjual")}
                  className={cn(
                    "flex flex-col items-center gap-1.5 p-4 rounded-xl border-2 transition-all text-center",
                    role === r.id ? "border-primary bg-primary-light/30" : "border-border hover:border-primary/40"
                  )}
                >
                  <Icon className={cn("w-5 h-5", role === r.id ? "text-primary" : "text-muted-foreground")} />
                  <span className={cn("text-sm font-semibold", role === r.id ? "text-primary" : "text-foreground")}>{r.label}</span>
                  <span className="text-xs text-muted-foreground">{r.desc}</span>
                </button>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Nama Lengkap</label>
              <Input placeholder="Nama kamu" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} className="h-10 rounded-xl" required />
            </div>

            {role === "penjual" && (
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nama Warung</label>
                <Input placeholder="Nama warung sayurmu" value={form.namaWarung} onChange={(e) => setForm({ ...form, namaWarung: e.target.value })} className="h-10 rounded-xl" required />
              </div>
            )}

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">No. HP</label>
              <Input type="tel" placeholder="08xxxxxxxxxx" value={form.noHp} onChange={(e) => setForm({ ...form, noHp: e.target.value })} className="h-10 rounded-xl" required />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
              <Input type="email" placeholder="contoh@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-10 rounded-xl" required />
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Password</label>
              <div className="relative">
                <Input
                  type={showPass ? "text" : "password"}
                  placeholder="Min. 8 karakter"
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="h-10 rounded-xl pr-10"
                  required
                />
                <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full bg-gradient-brand text-primary-foreground font-bold h-11 rounded-xl shadow-btn hover:opacity-90">
              Buat Akun {role === "penjual" ? "Penjual" : "Pembeli"}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Dengan mendaftar, kamu menyetujui <a href="#" className="text-primary hover:underline">Syarat & Ketentuan</a> kami
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
