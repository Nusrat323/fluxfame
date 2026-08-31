import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#080c08] text-white">
      <Navbar />

      <main>{children}</main>

      <Footer />
    </div>
  );
}