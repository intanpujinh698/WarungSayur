import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Leaf, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate auth
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-light/30 via-background to-harvest-light/20 flex items-center justify-center px-4">
      <div className="w-full max-w-[420px]">
        {/* Back */}
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Kembali ke beranda
        </button>

        <div className="bg-card rounded-2xl border border-border shadow-card p-8">
          {/* Logo */}
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

          <h1 className="text-xl font-bold text-warm-dark mb-1">Masuk ke akunmu</h1>
          <p className="text-sm text-muted-foreground mb-6">Belum punya akun? <Link to="/register" className="text-primary font-semibold hover:underline">Daftar gratis</Link></p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">Email atau No. HP</label>
              <Input
                type="text"
                placeholder="contoh@email.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="h-10 rounded-xl"
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-foreground">Password</label>
                <button type="button" className="text-xs text-primary hover:underline">Lupa password?</button>
              </div>
              <div className="relative">
                <Input
                  type={showPass ? "text" : "password"}
                  placeholder="Masukkan password"
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
              Masuk
            </Button>
          </form>

          <div className="relative my-5">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-border" /></div>
            <div className="relative flex justify-center text-xs"><span className="bg-card px-3 text-muted-foreground">atau masuk dengan</span></div>
          </div>

          <Button variant="outline" className="w-full h-10 rounded-xl font-medium text-sm">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4 mr-2" alt="Google" />
            Google
          </Button>
        </div>
      </div>
    </div>
  );
}
