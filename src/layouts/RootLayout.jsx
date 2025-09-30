import Footer from "../Component/Footer";
import Home from "../Component/Home";
import Navbar from "../Component/shared/Navbar";

const RootLayout = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default RootLayout;
