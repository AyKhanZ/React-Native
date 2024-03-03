import { createContext, useContext } from "react";
import { useAuth } from "./AuthContext";

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
};

type UserContextType = {
  user: UserType;
};

export const UserContext = createContext<UserContextType>({
  user: {
    name: "",
    email: "",
    password: "",
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

  const contextValue = { user };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
