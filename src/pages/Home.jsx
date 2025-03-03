import { lazy } from "react";
import Landing from "../components/Landing/Landing";
const PackageCards = lazy(() => import("../components/PackageCards/PackageCards"));


function Home() {
  return (
    <>
      <Landing />
      <PackageCards />
    </>
  );
}

export default Home;
