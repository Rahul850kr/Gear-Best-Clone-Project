import { Alert, AlertIcon, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [signUp, setSignUp] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});
  const [descData, setDescData] = useState({});
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const [shipping, setShipping] = useState({});

  const handleAddShipping = (shipdata) => {
    setShipping(shipdata);
  };

  const handleTotal = (arr) => {
   let updatedTotal =  arr.reduce((sum, el) => {
      return sum + el.price;
    }, 0);
    setTotal(updatedTotal)
  };

  const handleAddToCart = (data) => {
    setCartData([...cartData, data]);
  };

  const handleDeleteCartData = (id) => {
    let updated = cartData.filter((el) => {
      return el.id != id;
    });
    setCartData(updated);
  };

  const handleAddDesc = (el) => {
    setDescData({ el });
  };
  const toast = useToast();

  const handleUserData = ({ email }) => {
    setUserData({
      ...userData,
      email: email,
    });
  };

  const handleLogin = () => {
    setIsAuth(true);
  };

  const handleAddSignUp = (signupdata) => {
    setSignUp([...signUp, signupdata]);
  };

  return (
    <AppContext.Provider
      value={{
        handleAddSignUp,
        signUp,
        isAuth,
        handleUserData,
        handleAddDesc,
        descData,
        handleAddToCart,
        cartData,
        handleDeleteCartData,
        handleTotal,
        handleAddShipping,
        total,
        shipping
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
