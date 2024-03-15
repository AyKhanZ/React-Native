import RootNavigation from "./src/navigation/index";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
}

