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
  signUp: (name: string, email: string, password: string) => void;
};

export const AuthContext = createContext<AuthContextType>({
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
  logIn: (email: string, password: string) => false,
  signUp: (name: string, email: string, password: string) => {},
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
    setEmail(email);
    setPassword(password);
    return Users.some(
      (user) => user.email == email && user.password == password
    );
  };

  const signUp = (name: string, email: string, password: string) => {
    const user = {
      name: name,
      email: email,
      password: password,
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
    };
    Users.push(user);
    console.log(Users);
  };

  const contextValue = { name, email, password, logIn, signUp };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
