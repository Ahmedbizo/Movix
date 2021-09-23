import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, ActivityIndicator } from 'react-native';
import {getMovie} from '../services/services';


const placeholderImage = require ('../assets/images/placeholder.png')

const height = Dimensions.get ('screen').height;

const Detail = ({route,navigation}) => {

    const movieId = route.params.movieId;
    const [movieDetail, setMovieDetail] = useState();
    const [lodded,setLodded] = useState(false);


    useEffect (() => {
        getMovie(movieId).then(movieData => {
            setMovieDetail(movieData);
            setLodded(true);
        });
    },[movieId]);
    
    return (
       <React.Fragment>

       {lodded &&  (<ScrollView>

        <Image style={styles.image} 
        resizeMode='cover'
        source={
            movieDetail.poster_path 
           ? {uri: 'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path}
            :  placeholderImage
        }
        />
        <View style={styles.container} >
        <Text style={styles.imageTitle}>{movieDetail.title}</Text>
        </View>
       </ScrollView>
       )}

       {!lodded && <ActivityIndicator size="large" color="blue"  />}
      

       </React.Fragment>

        
    );
};

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    
    imageTitle:{ 
        fontSize: 24,
        marginTop:10,
        marginBottom: 10,
        fontWeight: 'bold',
        

    },
   
    image: {
        height: height/1.8,
       // width:400,
        
       // borderRadius:30,
        
    },
  

});

export default Detail;