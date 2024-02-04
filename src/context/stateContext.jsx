import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext({});

export const _stateContext = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [dishData, setDishData] = useState([]);
  const [loaded, setLoading] = useState(true);
  const baseURL = import.meta.env.VITE_BASE_API;
  const fetchData = async () => {
    try {
      const response = await axios.get(baseURL);
      console.log(response.data.data);
      setDishData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <StateContext.Provider
      value={{
        cartCount,
        setCartCount,
        dishData,
        setDishData,
        loaded,
        setLoading,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const AppContextHook = () => useContext(StateContext);
