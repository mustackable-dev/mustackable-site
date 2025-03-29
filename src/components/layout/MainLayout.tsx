import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="px-4 pt-32 max-sm:px-3 max-sm:pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
