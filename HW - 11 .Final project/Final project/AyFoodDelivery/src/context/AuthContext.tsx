import { createContext, useContext, useState } from "react";
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

type AuthContextType = {
  name: string;
  email: string;
  password: string;
  paymentMethod?: PaymentMethodType;
  deliveryAdress?: DeliveryAdressType;
  deliveryOpptions?: string;
  nonContactDelivery?: boolean;
  favorites?: [];
  cart?: [];
  logIn: (email: string, password: string) => boolean;
};

export const AuthContext = createContext<AuthContextType>({
  name: "Aykhan",
  email: "zeynalovayxan70@gmail.com",
  password: "ARnold151618",
  paymentMethod: {
    nameOfCard: "Leo card",
    hexCode: "1234567812345678",
    date: "27/02",
    cvv: "999",
  },
  deliveryAdress: {
    street: "Nizami 14",
    apartment: "117",
    city: "Baku",
    country: "Azerbaijan",
  },
  deliveryOpptions: "I'll pick it up by myself",
  nonContactDelivery: false,
  favorites: [],
  cart: [],
  logIn: (email: string, password: string) => false,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const logIn = (email: string, password: string) => {
    return Users.some(
      (user) => user.email == email && user.password == password
    );
  };

  const contextValue = { name, email, password, logIn };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
