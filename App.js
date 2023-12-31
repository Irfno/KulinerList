import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreens, Kategori, Profile } from './src/screens'
import { Category, Home, User } from 'iconsax-react-native'
import Detail from './src/screens/Detail'
import AddMenu from './src/screens/AddMenu'
import EditMenu from './src/screens/EditMenu'
import Register from './src/screens/Register'
import Login from './src/screens/Login'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const Bottom = () => {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'rgb(255, 81, 9)',
      tabBarInactiveTintColor: '#000',
      tabBarStyle:
      {
        paddingTop: 10,
        paddingBottom: 10,
        height: 64
      },
    }}>
      <Tab.Screen options={{ tabBarLabel: 'Home', tabBarIcon: ({ focused, color, size }) => (<Home variant={focused ? 'Bold' : 'Linear'} size={size} color={color} />) }} name='HomeScreens' component={HomeScreens} />
      <Tab.Screen options={{ tabBarLabel: 'Category', tabBarIcon: ({ focused, color, size }) => (<Category variant={focused ? 'Bold' : 'Linear'} size={size} color={color} />) }} name='Kategori' component={Kategori} />
      <Tab.Screen options={{ tabBarLabel: 'Profile', tabBarIcon: ({ focused, color, size }) => (<User variant={focused ? 'Bold' : 'Linear'} size={size} color={color} />) }} name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Bottom' component={Bottom} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='AddMenu' component={AddMenu} />
        <Stack.Screen name='EditMenu' component={EditMenu} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}