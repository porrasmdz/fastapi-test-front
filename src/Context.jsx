import { createContext,useState } from "react";

export const DataContext = createContext();

// 2. Crear el Provider
export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});
  
    return (
        <DataContext.Provider value={{ data, setData }}>
          {children}
        </DataContext.Provider>
      );
};