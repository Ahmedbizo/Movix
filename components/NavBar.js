import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



class NavBar extends React.PureComponent {
    state = {};

    render() {
        return (
            <SafeAreaView>
            <View>
            
            <TouchableOpacity>
            
            <Icon name={'chevron-back'} size={40} color={'red'} />
            </TouchableOpacity>
            </View>
          
           </SafeAreaView>
        );
    }
}

export default NavBar;