import React from 'react';
import Home from './screens/Home';
import Detail from './screens/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';




const Stack = createNativeStackNavigator();


const YourApp = () => {

  
  
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Movix" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default YourApp;