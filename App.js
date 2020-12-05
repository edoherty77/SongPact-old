import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'

import AppNavigator from './app/navigation/AppNavigator'
import UserContext from './app/context/userContext'
import AuthNavigator from './app/navigation/AuthNavigator'

import { ApolloProvider } from '@apollo/client'
import { GET_ALL_USERS } from './app/src/graphql/Queries'
import { client } from './app/src/graphql/Client'

import DashboardScreen from './app/views/DashboardScreen'
import SignUnScreen from './app/views/SignUpScreen'
import RegisterScreen from './app/views/RegisterScreen'
import LoginScreen from './app/views/LoginScreen'

export default function App({ navigation }) {
  const [user, setUser] = useState(false)

  useEffect(() => {
    user
  }, [user])

  return (
    <>
      <ApolloProvider client={client}>
        {/* <NavigationContainer> */}
        {/* <UserContext.Provider value={{ setUser: setUser }}>
            {user ? <AppNavigator /> : <AuthNavigator />}
          </UserContext.Provider> */}
        {/* <AppNavigator /> */}
        {/* </NavigationContainer> */}
        {/* <RegisterScreen /> */}
        <LoginScreen />
      </ApolloProvider>
      {/* <StatusBar style={'light'} /> */}
    </>
  )
}
