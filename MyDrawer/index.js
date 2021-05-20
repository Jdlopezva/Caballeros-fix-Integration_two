import * as React from 'react';
import { View, Text, TouchableOpacity, TabBarIOS, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import LoginScreen from '../MyScreens/login'
import SplashScreen from '../MyScreens/splash'
import HomeScreen from '../MyScreens/home'
import NotificationScreen from '../MyScreens/notifications'
import Rosario from '../MyScreens/rosario'
import Evangelio from '../MyScreens/evangelio'
import Santo from '../MyScreens/santo'


// function HomeScreen(props) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text style={{fontsize:20}}>Home Screen</Text>
//       <TouchableOpacity 
//       style={{height:50,width:200,backgroundColor:'orange'}}
//       onPress={()=>props.navigation.navigate('Login')}>
//           <Text>Ir a Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }


const Tab = createBottomTabNavigator()

function MyDrawer() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Splash" component={SplashScreen} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarVisible: false }}/> 
        <Tab.Screen name="Notifications" component={NotificationScreen} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Rosario" component={Rosario} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Evangelio" component={Evangelio} options={{ tabBarVisible: false }}/>
        <Tab.Screen name="Santo" component={Santo} options={{ tabBarVisible: false }}/> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;