import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import {getMovie} from '../services/services';


const Detail = ({route,navigation}) => {

    const movieId = route.params.movieDetail.id;
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
       
       </ScrollView>)}
      

       </React.Fragment>

        
    );
};

const styles = StyleSheet.create ({

   
    image: {
        height:450,
        width:400,
        
        borderRadius:30,
        
    },
  

});

export default Detail;