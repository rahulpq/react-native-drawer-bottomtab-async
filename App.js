import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Mydrawer from './Component/Mydrawer';
import Tabone from './Component/Tabone';
import { Swipeable } from 'react-native-gesture-handler';
import Login_page from './Component/Login_page';
import Home from './Component/Home';
import HomeScreen from './Component/HomeScreen';


function App() {
  return (
  <NavigationContainer>


    <Mydrawer/>
  </NavigationContainer>
  
 
  )
}

export default App