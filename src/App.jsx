import { lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./utils/Loader/Loader";
import i18n from "./i18n";
import Footer from "./components/Footer/Footer";
import Speakers from "./pages/Speakers";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollToTop = lazy(() => import("./utils/ScrollToTop"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const PreviousConferences = lazy(() => import("./pages/PreviousConferences"));
const SponsorsPartners = lazy(() => import("./pages/SponsorsPartners"));

function App() {
  // make it true if you want to cancel it ↓↓↓↓↓
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, []);
  
  useEffect(() => {
    AOS.init({
      once:"true",
      duration: 1000,
    });
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Loader onComplete={() => setIsLoaded(true)} />
      ) : (
        <Router>
          {/* Ensures the page scrolls to the top on route change */}
          <ScrollToTop />

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speakers" element={<Speakers />} />
            <Route path="/previousConferences" element={<PreviousConferences />}/>
            <Route path="/SponsorsPartners" element={<SponsorsPartners />}/>
          </Routes>

            <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
