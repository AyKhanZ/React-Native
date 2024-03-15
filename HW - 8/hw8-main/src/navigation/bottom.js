import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Market from '../screens/Market';
import Feed from '../screens/Feed';
import Content from '../screens/Content'

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => null, // Setting tabBarIcon to null hides the icon
          tabBarLabelPosition: 'center',
          headerShown: false,
        }}
        name="Market"
        component={Market}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => null, // Setting tabBarIcon to null hides the icon
          tabBarLabelPosition: 'center',
          headerShown: false,
        }}
        name="Content"
        component={Content}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => null, // Setting tabBarIcon to null hides the icon
          headerShown: false,
          tabBarLabelPosition: 'center',
        }}
        name="Feed"
        component={Feed}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
