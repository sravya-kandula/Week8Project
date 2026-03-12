import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow px-16 py-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default RootLayout;