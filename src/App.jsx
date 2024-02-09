import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./index.css";

import PageNotFound from "./pages/PageNotFound";
import Trips from "./pages/Trips";
import TripsByNeighborhood from "./pages/TripsByNeighborhood";
function App() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Trips />} />
        <Route exact path="/by-neighborhood" element={<TripsByNeighborhood />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
