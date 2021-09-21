import React from 'react';
import { View, Text, StyleSheet} from 'react-native';



const Detail = () => {
    return (
       <View>
       <Text style={styles.text}>
       Movie Details 
       </Text>
       
      

       </View>

        
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color:'#6495ed',
        textAlign: 'center',
        paddingTop:15
         
       

    },

});

export default Detail;