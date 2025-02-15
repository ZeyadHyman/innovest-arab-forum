import { lazy, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./utils/Loader/Loader";
import i18n from "./i18n";
import Footer from "./components/Footer/Footer";

const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));

function App() {
  // make it true if you want to cancel it ↓↓↓↓↓
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, []);

  return (
    <>
      {!isLoaded ? (
        <Loader onComplete={() => setIsLoaded(true)} />
      ) : (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/Home" element={<Home />} />
          </Routes>
          <Footer />
          <Footer />
          <Footer />
          <Footer />
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
