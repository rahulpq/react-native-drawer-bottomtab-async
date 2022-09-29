import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppStack from './AppStack'
import TransPortDetail from './TransPortDetail'
import HomeScreen from './HomeScreen';
import { StyleSheet } from 'react-native';
import { View, Image, Text } from 'react-native';
import PhotoTab from './PhotoTab';
import Plus from './Plus';
// import { Icon } from 'react-native-vector-icons/Icon';


const Tab = createBottomTabNavigator();
const Tabone = () => {
  return (
    <Tab.Navigator screenOptions={{ tabBarShowLabel: false,
    tabBarStyle:{
       backgroundColor:'white',
       position:'absolute',
       bottom:25,
       left:20,
       right:20,
       borderRadius:15,
       height:90,
       elevation:0,
      //  backgroundColor:'grey',
      //  opacity:0.8,
       ...style.shadow,

       
       }}}>
      <Tab.Screen name="AppStack" component={AppStack} options={{
        headerShown: false, tabBarIcon: ({focused}) => (
          <>
          <View style={{ borderColor: focused ? 'red' : 'grey' , justifyContent: 'center', alignItems: 'center',marginTop:25 }}>
            <Image style={{
              width: 30,
              height: 30,
              tintColor: focused ? 'red' : 'grey'
            }}
              source={require('../Assets/Images/home1.png')} />
          </View>
          <Text style={{color: focused ? 'red' : 'grey' ,fontSize: 11,fontWeight:'500',marginTop:4 }} >HOME</Text>

          </>
        )
      }} />
      <Tab.Screen name="TransPortDetail" component={TransPortDetail} options={{
        headerShown: false, tabBarIcon: ({focused}) => (
          <>
          <View style={{borderColor: focused ? 'red' : 'grey', justifyContent: 'center', alignItems: 'center',marginTop:25 }}>
            <Image style={{
              width: 30,
              height: 30,
              tintColor: focused ? 'red':'grey',
            }}
              source={require('../Assets/Images/searchIcon.png')} />
          </View>
            <Text style={{color: focused ? 'red' : 'grey' ,fontSize: 11,fontWeight:'500',marginTop:4 }}>FIND</Text>
          </>
        )
      }} />

        <Tab.Screen name="plus" component={Plus} options={{
        headerShown: false, tabBarIcon: ({focused}) => (

          <View style={{ marginTop:-40 , ...style.shadow}}>
            <Image style={{
              width: 60,
              height: 60,
              tintColor: focused ? 'white':'grey',
              backgroundColor: focused? 'red': 'white',
              borderRadius:80,
              // ...style.shadow,
            }}
      
              source={require('../Assets/Images/pluse.png')} />
              
          </View>


        )
            }} />

      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <>
          <View style={{ borderColor: focused ? 'red' : 'grey' , justifyContent: 'center', alignItems: 'center',marginTop:25 }}>
            <Image style={{
              width: 30,
              height: 30,
              tintColor: focused ? 'red' : 'grey',
            }} source={require('../Assets/Images/settingIcon.png')} />
          </View>
            <Text style={{color: focused ? 'red' : 'grey' ,fontSize: 11,fontWeight:'500',marginTop:4 }}>SETTINGS</Text>
            </>
        )
      }}/>
        <Tab.Screen name="PhotoTab" component={PhotoTab} options={{
        headerShown: false, tabBarIcon: ({ focused }) => (
          <>
          <View style={{ borderColor: focused ? 'red' : 'grey' , justifyContent: 'center', alignItems: 'center',marginTop:25 }}>
            <Image style={{
              width: 30,
              height: 30 ,
              tintColor: focused ? 'red' : 'grey',
            }} source={require('../Assets/Images/chatIcon.png')} />
          </View>
            <Text style={{color: focused ? 'red' : 'grey' ,fontSize: 11,fontWeight:'500',marginTop:4 }}>CHAT</Text>
            </>
        )
      }}/>


      {/* <Tab.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/> */}
    </Tab.Navigator>
  )
}
const style =StyleSheet.create({
   shadow:{
    shadowColor: '#754311',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity: 0.25,
    shadowRadius:3.5,
    elevation:5,

   }
  
})
export default Tabone