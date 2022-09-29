// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Vehicle_detail from './Vehicle_detail';
// import Footer from './Footer';

// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={Footer}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="Profile" component={Vehicle_detail} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import home from './Component/Home';
// import Login_page from './Component/Login_page';

// const App = () => {
//   return (
//     <NavigationContainer>
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{ title: 'Welcome' }}
//       />
//       <Stack.Screen name="Profile" component={Login_page} />
//     </Stack.Navigator>
//   </NavigationContainer>
//   );
// };



// screenOptions={({ route }) => ({
//     tabBarIcon: ({ focused, color, size }) => {
//       let iconName;

//       if (AppStack.name === 'AppStack') {
//         iconName = focused
//           ? 'ios-information-circle'
//           : 'ios-information-circle-outline';
//       } else if (TransPortDetail.name === 'TransPortDetail') {
//         iconName = focused ? 'ios-list-box' : 'ios-list';
//       }

//       // You can return any component that you like here!
//       return <Ionicons name={iconName} size={size} color={color} />;
//     },
//     tabBarActiveTintColor: 'tomato',
//     tabBarInactiveTintColor: 'gray',
//   })}