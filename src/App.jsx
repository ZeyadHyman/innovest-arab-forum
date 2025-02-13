import { lazy, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./utils/loader";

const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar/Navbar"));

function App() {
  // make it true if you want to cancel it ↓↓↓↓↓
  const [isLoaded, setIsLoaded] = useState(false); 

  return (
    <>
      {!isLoaded ? (
        <Loader onComplete={() => setIsLoaded(true)} />
      ) : (
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
