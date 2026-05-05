import { CheckCircle, XCircle, Clock } from "lucide-react";

const pendingStores = [
  { id: 1, name: "Warung Bu Tini", owner: "Tini Suryani", location: "Garut, Jawa Barat", submitted: "2 jam lalu", avatar: "BT" },
  { id: 2, name: "Sayur Segar Pak Joko", owner: "Joko Widodo", location: "Bandung, Jawa Barat", submitted: "5 jam lalu", avatar: "SP" },
  { id: 3, name: "Lapak Hijau Ibu Ani", owner: "Ani Kusuma", location: "Tasikmalaya, Jawa Barat", submitted: "1 hari lalu", avatar: "LH" },
];

export default function StoreVerification() {
  return (
    <div className="bg-white rounded-xl border border-gray-100">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-semibold text-gray-900">Verifikasi Toko</h3>
          <span className="bg-amber-100 text-amber-700 text-xs font-medium px-2 py-0.5 rounded-full">
            {pendingStores.length} pending
          </span>
        </div>
        <button className="text-xs text-primary hover:underline">Lihat semua</button>
      </div>
      <div className="divide-y divide-gray-50">
        {pendingStores.map((store) => (
          <div key={store.id} className="px-5 py-4 flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary flex-shrink-0">
              {store.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{store.name}</p>
              <p className="text-xs text-gray-400 truncate">{store.owner} · {store.location}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-400 flex-shrink-0">
              <Clock className="w-3 h-3" />
              {store.submitted}
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <button className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center hover:bg-emerald-100 transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </button>
              <button className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center hover:bg-red-100 transition-colors">
                <XCircle className="w-4 h-4 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
