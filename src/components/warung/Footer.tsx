import { Leaf, Instagram, Twitter, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  "Produk": ["Sayuran Hijau", "Umbi-umbian", "Buah Sayur", "Rempah & Bumbu", "Herbal & Jamu", "Jamur Segar"],
  "Untuk Penjual": ["Daftar Jadi Penjual", "Dashboard Penjual", "Tips Berjualan", "Atur Produk", "Analitik Warung", "Bantuan Penjual"],
  "Perusahaan": ["Tentang Kami", "Blog & Berita", "Karier", "Syarat & Ketentuan", "Kebijakan Privasi", "Hubungi Kami"],
};

const socialLinks = [
  { icon: <Instagram className="w-4 h-4" />, href: "#", label: "Instagram" },
  { icon: <Facebook className="w-4 h-4" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
  { icon: <Youtube className="w-4 h-4" />, href: "#", label: "YouTube" },
];

const paymentMethods = ["BCA", "Mandiri", "BRI", "OVO", "GoPay", "Dana", "COD"];

export default function Footer() {
  return (
    <footer className="bg-warm-dark text-primary-foreground">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-white mb-0.5">Dapatkan Info Promo Terbaru</h3>
              <p className="text-sm text-white/60">Daftar newsletter dan hemat hingga 30% setiap minggu</p>
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <input
                type="email"
                placeholder="Email kamu..."
                className="flex-1 sm:w-[260px] bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/40 outline-none focus:border-primary-light focus:bg-white/15 transition-colors"
              />
              <button className="bg-harvest hover:bg-harvest-dark text-harvest-foreground font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors shrink-0">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="text-base font-bold text-primary-light">warung</span>
                <span className="text-base font-bold text-harvest-light">sayur</span>
                <span className="text-sm font-medium text-white/50">.id</span>
              </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed mb-5 max-w-[280px]">
              Marketplace sayuran segar terpercaya di Indonesia. Menghubungkan petani lokal dengan pembeli di seluruh nusantara.
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                <span>halo@warungsayur.id</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                <span>0800-1234-5678 (Gratis)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 text-primary-light shrink-0" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-8 h-8 rounded-lg bg-white/10 hover:bg-primary flex items-center justify-center text-white/60 hover:text-white transition-all duration-150"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-bold text-white mb-3">{heading}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/55 hover:text-white transition-colors duration-150"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/40 text-center sm:text-left">
              © 2025 warungsayur.id — Hak Cipta Dilindungi · Made with{" "}
              <span className="text-primary">♥</span> in Indonesia
            </p>

            {/* Payment Methods */}
            <div className="flex items-center gap-1.5 flex-wrap justify-center">
              {paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-2 py-0.5 bg-white/10 rounded text-[10px] font-semibold text-white/50"
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
