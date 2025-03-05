import { lazy } from "react";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
const PackageCards = lazy(() => import("../components/PackageCards/PackageCards"));


function Home() {
  return (
    <>
      <Landing />
      <About/>
      <PackageCards />
    </>
  );
}

export default Home;
