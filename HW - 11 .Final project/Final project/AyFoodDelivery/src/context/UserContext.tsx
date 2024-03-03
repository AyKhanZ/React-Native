import { createContext, useContext, useState } from "react";
import { useAuth } from "./AuthContext";
import { Users } from "../data/Users";

type PaymentMethodType = {
  nameOfCard: string;
  hexCode: string;
  date: string;
  cvv: string;
};

type DeliveryAdressType = {
  street: string;
  apartment: string;
  city: string;
  country: string;
};

type UserType = {
  name: string;
  email: string;
  password: string;
  paymentMethod?: PaymentMethodType;
  deliveryAdress?: DeliveryAdressType;
  deliveryOpptions?: string;
  nonContactDelivery?: boolean;
  favorites?: any[];
  cart?: any[];
  changeCard?: () => void;
};

type UserContextType = {
  user?: UserType;
};

export const UserContext = createContext<UserContextType>({
  user: {
    name: "",
    email: "",
    password: "",
    paymentMethod: {
      nameOfCard: "",
      hexCode: "",
      date: "",
      cvv: "",
    },
    deliveryAdress: {
      street: "",
      apartment: "",
      city: "",
      country: "",
    },
    deliveryOpptions: "",
    nonContactDelivery: false,
    favorites: [],
    cart: [],
    changeCard: () => {},
  },
});

export const useUser = () => {
  return useContext(UserContext);
};

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const userData = useAuth();
  const user = userData.getUser(userData.email, userData.password);

  const [hexCode, setHexCode] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");

  const changeCard = (
    email: string,
    hexCode: string,
    date: string,
    cvv: string
  ) => {
    setHexCode(hexCode);
    setDate(date);
    setCvv(cvv);

    user.paymentMethod.hexCode = hexCode;
    user.paymentMethod.date = date;
    user.paymentMethod.cvv = cvv;
    console.log(user);
    console.log(user.paymentMethod.hexCode);
  };

  const contextValue = { user, changeCard };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
