import React, { useState } from 'react';
import { SafeAreaView, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



const search = ({navigation}) => {

    const [text, onChangeText] = useState();

    const onsubmit = (query) => {
        console.log(query)
    }
    return (
        <React.Fragment>
        
        <SafeAreaView>
        
        <View style={styles.container}>
        <View style={styles.form}>
        <TextInput
        style={styles.input}
        placeholder={'Search Movie or TV Show '}
        onChangeText={onChangeText}
        value={text}
      />
      </View>

      <TouchableOpacity 
                    onPress={() => {onsubmit(text)}}>
                    <Icon name={'search-outline'} size={50}  />
                  </TouchableOpacity>

        </View>
        </SafeAreaView>

        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    input: {
      borderRadius: 20,
      borderWidth: 2,
      padding: 15,
    },
    container: {
        padding:10,
        paddingTop: 10,
        flexDirection: 'row',
        alignItems:'center'
    },
    form: {
        flexBasis: 'auto',
        flexGrow: 1,
        paddingRight: 8

    }
  });
  

export default search;
