import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet} from 'react-native';
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

       {lodded && (<Text>{movieDetail.title} </Text>)}
       
      

       </React.Fragment>

        
    );
};

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