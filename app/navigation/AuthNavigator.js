import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignInScreen from '../views/Auth/SignInScreen'
import SignUpScreen from '../views/Auth/SignUpScreen'
import TestMobX from '../views/TestMobX'

const Stack = createStackNavigator()

const AuthNavigator = ({ store }) => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Mobx" component={TestMobX} />
    </Stack.Navigator>
  )
}

export default AuthNavigator
