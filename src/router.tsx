import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminDashboard from "./pages/admin";
import Login from "./pages/login";
import Register from "./pages/register";
import WarungPage from "./pages/warung";
import WarungDetail from "./pages/warung/detail";
import Keranjang from "./pages/keranjang";
import Checkout from "./pages/checkout";
import Pesanan from "./pages/pesanan";
import JadiPenjual from "./pages/jadi-penjual";

export const routers = [
  { path: "/", name: "home", element: <Index /> },
  { path: "/login", name: "login", element: <Login /> },
  { path: "/register", name: "register", element: <Register /> },
  { path: "/warung", name: "warung", element: <WarungPage /> },
  { path: "/warung/:id", name: "warung-detail", element: <WarungDetail /> },
  { path: "/keranjang", name: "keranjang", element: <Keranjang /> },
  { path: "/checkout", name: "checkout", element: <Checkout /> },
  { path: "/pesanan", name: "pesanan", element: <Pesanan /> },
  { path: "/jadi-penjual", name: "jadi-penjual", element: <JadiPenjual /> },
  { path: "/admin", name: "admin", element: <AdminDashboard /> },
  /* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */
  { path: "*", name: "404", element: <NotFound /> },
];

declare global {
  interface Window {
    __routers__: typeof routers;
  }
}

window.__routers__ = routers;
