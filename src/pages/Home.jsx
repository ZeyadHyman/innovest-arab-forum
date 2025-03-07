import { lazy } from "react";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Jury from "../components/Jury/Jury";
const PackageCards = lazy(() => import("../components/PackageCards/PackageCards"));


function Home() {
  return (
    <>
      <Landing />
      <div className="w-full h-2 bg-red-950"></div>
      <About />
      <div className="w-full h-1 bg-red-950"></div>
      <Jury />
      <div className="w-full h-1 bg-red-950"></div>
      <PackageCards />
      <div className="w-full h-1 bg-red-950"></div>
    </>
  );
}

export default Home;
