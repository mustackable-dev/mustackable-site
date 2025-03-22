import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="px-4 pt-24">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
