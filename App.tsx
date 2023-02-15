import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Cards } from './screens/Cards'
import { Test } from './screens/Test';
import { Import } from './screens/Import';
import { Provider } from 'react-redux';
import { store } from './screens/store';

const Stack = createNativeStackNavigator();

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
          <Stack.Navigator>
            <Stack.Screen 
              name='Cards'
              component={Cards}
            />
            <Stack.Screen 
              name='Test'
              component={Test}
            />
            <Stack.Screen 
              name='Import'
              component={Import}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
