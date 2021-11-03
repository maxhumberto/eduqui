import 'react-native-gesture-handler'
import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import Principal from './src/screens/Principal'
import Routes from './src/routes'
import * as screens from './src/screens'
import Button from './src/components/Button'
// import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'



const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName=""
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={screens.StartScreen} />
          <Stack.Screen name="LoginScreen" component={screens.LoginScreen} />
          <Stack.Screen name="Principal" component={Principal} />
          <Stack.Screen name="RegisterScreen" component={screens.RegisterScreen} />
          <Stack.Screen name="Dashboard" component={screens.Dashboard} />
          <Stack.Screen name="Home" component={screens.Home} />
          <Stack.Screen name="MateriaMat" component={screens.MateriaMat}/>
          <Stack.Screen
            name="ResetPasswordScreen"
            component={screens.ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

