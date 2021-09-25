import React from 'react';
import {Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class PlayButton extends React.PureComponent {
  render() {
   
    return (
      <Pressable style={styles.button}>
        <Icon name={'caret-forward-outline'} size={37} color={'#fff'} />
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    alignContent: 'center',
    borderRadius: 60,
    width: 53,
    padding: 10,
    backgroundColor: '#ff4500',
  },
});

export default PlayButton;