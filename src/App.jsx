import { useContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { DataContext} from "./Context"
import "./index.css";

import PageNotFound from "./pages/PageNotFound";
import Trips from "./pages/Trips";
import TripsByNeighborhood from "./pages/TripsByNeighborhood";

function App() {
  const location = useLocation();
  const {data, setData} =  useContext(DataContext)
  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change


  useEffect(() => {
    fetchData();    
  }, []);

  
  async function fetchData() {
    try {
      let api_url = import.meta.env.VITE_API_URL+"?limit=15&page=1";
      const response = await fetch(`${api_url}`);
      if (response.ok) {
        const api_data = await response.json();
        
        setData({...api_data, url: api_url});
        
       
      } else {
        setData({error:"Error al obtener datos"})
        // setError("Hubo un error al obtener datos");
      }
    } catch (error) {
  
      setData({error: "No se pudo hacer la solicitud para obtener datos"});
    }
  }
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Trips />} />
        <Route exact path="/by-neighborhood" element={
          
            <TripsByNeighborhood />
         
        } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
export default App;
