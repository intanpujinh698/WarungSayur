import { LayoutDashboard, Users, Store, ShoppingCart, AlertCircle, BarChart3, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  activeMenu: string;
  onMenuChange: (menu: string) => void;
}

const menus = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "users", label: "User Management", icon: Users },
  { id: "stores", label: "Verifikasi Toko", icon: Store },
  { id: "orders", label: "Order Monitor", icon: ShoppingCart },
  { id: "complaints", label: "Komplain", icon: AlertCircle },
  { id: "analytics", label: "Analitik", icon: BarChart3 },
  { id: "settings", label: "Pengaturan", icon: Settings },
];

export default function AdminSidebar({ activeMenu, onMenuChange }: AdminSidebarProps) {
  return (
    <aside className="w-60 min-h-screen bg-white border-r border-gray-100 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Store className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="font-semibold text-sm text-gray-900">SayurHub</p>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {menus.map((menu) => {
          const Icon = menu.icon;
          const isActive = activeMenu === menu.id;
          return (
            <button
              key={menu.id}
              onClick={() => onMenuChange(menu.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                isActive
                  ? "bg-primary text-white font-medium"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {menu.label}
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-gray-100">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors">
          <LogOut className="w-4 h-4" />
          Keluar
        </button>
      </div>
    </aside>
  );
}
