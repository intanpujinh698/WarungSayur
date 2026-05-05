import { cn } from "@/lib/utils";

const transactions = [
  { id: "#TRX-1091", buyer: "Rina Marlina", store: "Bu Sari Fresh", amount: "Rp45.000", method: "QRIS", status: "selesai", time: "10:24" },
  { id: "#TRX-1090", buyer: "Dodi Santoso", store: "Warung Pak Hendra", amount: "Rp78.500", method: "Transfer", status: "diproses", time: "10:18" },
  { id: "#TRX-1089", buyer: "Siti Rahayu", store: "Cikaret Subuh", amount: "Rp32.000", method: "COD", status: "selesai", time: "10:05" },
  { id: "#TRX-1088", buyer: "Budi Hartono", store: "Bu Sari Fresh", amount: "Rp120.000", method: "E-wallet", status: "batal", time: "09:55" },
  { id: "#TRX-1087", buyer: "Dewi Lestari", store: "Warung Pak Hendra", amount: "Rp56.000", method: "QRIS", status: "selesai", time: "09:41" },
];

const statusStyle: Record<string, string> = {
  selesai: "bg-emerald-50 text-emerald-700",
  diproses: "bg-blue-50 text-blue-700",
  batal: "bg-red-50 text-red-600",
};

export default function RecentTransactions() {
  return (
    <div className="bg-white rounded-xl border border-gray-100">
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Transaksi Terbaru</h3>
        <button className="text-xs text-primary hover:underline">Lihat semua</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-50">
              <th className="text-left px-5 py-3 text-xs text-gray-400 font-medium">ID</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 font-medium">Pembeli</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 font-medium">Warung</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 font-medium">Total</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 font-medium">Metode</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 font-medium">Status</th>
              <th className="text-left px-5 py-3 text-xs text-gray-400 font-medium">Waktu</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((trx) => (
              <tr key={trx.id} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-3 text-xs font-mono text-gray-500">{trx.id}</td>
                <td className="px-5 py-3 text-gray-700 font-medium">{trx.buyer}</td>
                <td className="px-5 py-3 text-gray-500">{trx.store}</td>
                <td className="px-5 py-3 text-gray-900 font-semibold">{trx.amount}</td>
                <td className="px-5 py-3 text-gray-500">{trx.method}</td>
                <td className="px-5 py-3">
                  <span className={cn("text-xs px-2.5 py-1 rounded-full font-medium", statusStyle[trx.status])}>
                    {trx.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-gray-400 text-xs">{trx.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
