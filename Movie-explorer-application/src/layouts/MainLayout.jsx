import { Outlet } from "react-router";
import Navbar from "../componets/Navbar";
import Footer from "../componets/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}