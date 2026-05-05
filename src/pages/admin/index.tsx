import { useState } from "react";
import { Users, Store, ShoppingCart, TrendingUp, Bell, Search, AlertCircle } from "lucide-react";
import AdminSidebar from "./components/AdminSidebar";
import StatCard from "./components/StatCard";
import RecentTransactions from "./components/RecentTransactions";
import StoreVerification from "./components/StoreVerification";

const complaints = [
  { id: 1, user: "Andi Pratama", issue: "Produk tidak sesuai foto", store: "Bu Sari Fresh", priority: "tinggi" },
  { id: 2, user: "Maya Sari", issue: "Pengiriman terlambat 2 jam", store: "Warung Pak Hendra", priority: "sedang" },
  { id: 3, user: "Rudi Hermawan", issue: "Stok habis setelah order", store: "Cikaret Subuh", priority: "sedang" },
];

const priorityStyle: Record<string, string> = {
  tinggi: "bg-red-50 text-red-600",
  sedang: "bg-amber-50 text-amber-600",
  rendah: "bg-gray-100 text-gray-500",
};

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      <AdminSidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-base font-semibold text-gray-900">Dashboard Admin</h1>
            <p className="text-xs text-gray-400">Selasa, 5 Mei 2026</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari..."
                className="pl-9 pr-4 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg w-48 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <button className="relative w-9 h-9 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
              <Bell className="w-4 h-4 text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-xs font-semibold text-white">
              AD
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Stat cards */}
          <div className="grid grid-cols-4 gap-4">
            <StatCard
              title="Total Warung Aktif"
              value="2.418"
              change="+12%"
              trend="up"
              icon={Store}
              iconColor="text-emerald-600"
              iconBg="bg-emerald-50"
            />
            <StatCard
              title="Pembeli Aktif"
              value="48.320"
              change="+8%"
              trend="up"
              icon={Users}
              iconColor="text-blue-600"
              iconBg="bg-blue-50"
            />
            <StatCard
              title="Total Transaksi Hari Ini"
              value="1.240"
              change="+5%"
              trend="up"
              icon={ShoppingCart}
              iconColor="text-violet-600"
              iconBg="bg-violet-50"
            />
            <StatCard
              title="GMV Bulan Ini"
              value="Rp184jt"
              change="+23%"
              trend="up"
              icon={TrendingUp}
              iconColor="text-amber-600"
              iconBg="bg-amber-50"
            />
          </div>

          {/* Transactions + Verification */}
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2">
              <RecentTransactions />
            </div>
            <div>
              <StoreVerification />
            </div>
          </div>

          {/* Complaints */}
          <div className="bg-white rounded-xl border border-gray-100">
            <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-500" />
                <h3 className="text-sm font-semibold text-gray-900">Komplain Terbaru</h3>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded-full">
                  {complaints.length}
                </span>
              </div>
              <button className="text-xs text-primary hover:underline">Lihat semua</button>
            </div>
            <div className="divide-y divide-gray-50">
              {complaints.map((c) => (
                <div key={c.id} className="px-5 py-4 flex items-center gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{c.issue}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{c.user} · {c.store}</p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${priorityStyle[c.priority]}`}>
                    {c.priority}
                  </span>
                  <button className="text-xs text-primary border border-primary/30 px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors">
                    Tangani
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
