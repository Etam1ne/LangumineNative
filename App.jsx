import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import LearnNew from "./screens/LearnNew";

export default function App() {
  
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={ {title: "Home"} }
        />
        <Stack.Screen
          name="LearnNew"
          component={LearnNew}
          options={ {title: "Learn new"} }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


