import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const propTypes = {
  main: PropTypes.bool,
};

const defaultProps = {
  main: false,
};

class NavBar extends React.PureComponent {
    state = {};

    render() {

        const {navigation,main} = this.props;
        return (
            <SafeAreaView>
            {main ? (
                <View style={styles.mainNav}>
                  <Image
                    style={styles.logo}
                    source={require('../assets/images/logo.jpg')}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Search');
                    }}>
                    <Icon name={'search-outline'} size={30} color={'red'} />
                  </TouchableOpacity>
                </View>
              ) : (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.goBack();
                    }}>
                    <Icon name={'chevron-back'} size={40} color={'red'} />
                  </TouchableOpacity>
                </View>
              )}
          
           </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    mainNav: {
      flex: 1,
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 5,
      alignItems: 'center',
    },
    logo: {
      width: 40,
      height: 30,
      marginBottom:20
    },
  });



NavBar.propTypes = propTypes;
NavBar.defaultProps = defaultProps;
export default NavBar;