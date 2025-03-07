import { lazy } from "react";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Jury from "../components/Jury/Jury";
const PackageCards = lazy(() => import("../components/PackageCards/PackageCards"));


function Home() {
  return (
    <>
      <Landing />
      <About/>
      <Jury/>
      <PackageCards />
    </>
  );
}

export default Home;
