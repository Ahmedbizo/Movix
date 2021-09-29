import React from 'react';
import { SafeAreaView, TextInput, View, StyleSheet } from 'react-native';



const search = ({navigation}) => {
    return (
        <React.Fragment>
        
        <SafeAreaView>
        
        <View>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
        
        </View>
        </SafeAreaView>

        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  

export default search;
