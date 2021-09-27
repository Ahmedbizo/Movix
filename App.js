import React from 'react';
import Home from './screens/Home';
import Detail from './screens/Detail';
import NavBar from './components/NavBar';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';




const Stack = createNativeStackNavigator();


const YourApp = () => {

  
  
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movix" 
        component={Home}
         options={{
        headerTransparent: true,
        header: ({navigation}) => <NavBar navigation={navigation} main={true}/>

        }} />

        <Stack.Screen name="Detail" 
        component={Detail} 
        options={{
        headerTransparent: true,
        header: ({navigation}) => <NavBar navigation={navigation}/>
        }}/>
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default YourApp;