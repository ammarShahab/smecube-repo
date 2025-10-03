import { Outlet } from "react-router";
import Footer from "../Component/shared/Footer";
import Navbar from "../Component/shared/Navbar";
import ScrollToTop from "../utils/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
