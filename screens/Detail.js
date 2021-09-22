import React from 'react';
import { View, Text, StyleSheet} from 'react-native';



const Detail = ({route,navigation}) => {

    const movieDetail = route.params.movieDetail;
    return (
       <React.Fragment>
       <Text style={styles.text}>
       {movieDetail.title } </Text>
       
      

       </React.Fragment>

        
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