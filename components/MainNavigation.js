import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import NavBar from './NavBar';



const Stack = createNativeStackNavigator();


class MainNavigation extends React.PureComponent {
    
    render() {
        return (
            
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
        );
    }
}

export default MainNavigation;