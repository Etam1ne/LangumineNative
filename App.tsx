import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Cards } from './screens/Cards'
import { Test } from './screens/Test';
import { Import } from './screens/Import';
import { Provider } from 'react-redux';
import { store } from './screens/store';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

const Tab = createBottomTabNavigator();

const theme = {
  colors: {
    green: "#116530",
    lightGreen: "#A3EBB1",
    lightestGreen: "#edfbef",
    red: "#ffdde5"
  }
}

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator
          initialRouteName="Import"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, size, color}) => {
              let iconName: string;
              switch (route.name) {
                case "Cards":
                  iconName = focused ? "cards" : "cards-outline";
                  break
                case "Test":
                  iconName = focused ? "ballot" : "ballot-outline";
                  break
                case "Import":
                  iconName = focused ? "file-import" : "file-import-outline";
                  break
              }
              return <MaterialCommunityIcons name={iconName} size={size} color={color}/>
            },
            tabBarInactiveTintColor: "grey",
            tabBarActiveTintColor: theme.colors.green
          })}
          >
            <Tab.Screen 
              name="Cards"
              component={Cards}
            />
            <Tab.Screen 
              name="Test"
              component={Test}
            />
            <Tab.Screen 
              name="Import"
              component={Import}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
