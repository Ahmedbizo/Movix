import React from 'react';
import {  View } from 'react-native';
import Home from './screens/Home';




const YourApp = () => {

  
  
  return (
    <View style={{ flex: 1, 
    justifyContent: "center",
     alignItems: "center", 
     backgroundColor:'#fffff0' }}>

       <Home></Home>

    </View>
  );
}

export default YourApp;