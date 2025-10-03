import { Outlet } from "react-router";
import Footer from "../Component/shared/Footer";
import Navbar from "../Component/shared/Navbar";

const RootLayout = () => {
  return (
    <>
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
