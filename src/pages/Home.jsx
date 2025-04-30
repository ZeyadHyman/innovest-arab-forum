import { lazy, Suspense } from "react";
import Landing from "../components/Landing/Landing";
import About from "../components/About/About";
import Jury from "../components/Jury/Jury";
const PackageCards = lazy(() => import("../components/PackageCards/PackageCards"));

function Home() {
  return (
    <main className="overflow-hidden">
      <Landing />
      <About />
      <Jury />
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
        </div>
      }>
        <PackageCards />
      </Suspense>
    </main>
  );
}

export default Home;
