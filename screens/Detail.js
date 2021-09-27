import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, ActivityIndicator, Modal, Pressable } from 'react-native';
import {getMovie} from '../services/services';

import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import PlayButton from '../components/PlayButton';
import Video from '../components/Video';



const placeholderImage = require ('../assets/images/placeholder.png')

const height = Dimensions.get ('screen').height;

const Detail = ({route,navigation}) => {

    const movieId = route.params.movieId;
    const [movieDetail, setMovieDetail] = useState();
    const [lodded,setLodded] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


    useEffect (() => {
        getMovie(movieId).then(movieData => {
            setMovieDetail(movieData);
            setLodded(true);
        });
    },[movieId]);

    const videoShown = () => {
        setModalVisible(!modalVisible);
    };
    
    return (
       <React.Fragment>

       {lodded &&  (  
         
        <View>
        <ScrollView>

        <Image style={styles.image} 
        resizeMode='cover'
        source={
            movieDetail.poster_path 
           ? {uri: 'https://image.tmdb.org/t/p/w500' + movieDetail.poster_path}
            :  placeholderImage
        }
        />
        <View style={styles.container} >



        <View style={styles.playButton}>
        <PlayButton handlePress={videoShown}/>
        </View>


        <Text style={styles.imageTitle}>{movieDetail.title}</Text>


        {/* get all the gnre from API with Map function    */}
        {movieDetail.genres && (

         <View   style={styles.gnrescontainer}>
        {movieDetail.genres.map(genre => {

            return(

                <Text  style={styles.gnrestitle} key= {genre.id} >{genre.name} </Text>
            )
         })}
        
         </View>

        )}

        {/* Text Rating  */}
       {/* <Text style={styles.Rating} >  {movieDetail.vote_average}</Text>*/}
        
       <StarRating 
       maxStars={5}
       starSize={30}
        rating={movieDetail.vote_average /2} 
        fullStarColor={'gold'} />

        <Text style={styles.overview}>{movieDetail.overview}</Text>

        <Text style={styles.release}>{ 'Release Date : ' + dateFormat(movieDetail.release_date, ' dS mmmm, yyyy' ) }</Text>


        </View>
       </ScrollView>

       <Modal animationType="slide" visible={modalVisible}>

       <View style={styles.videoModal}>

      <Video onClose={videoShown}/>
       
       </View>
       </Modal>

       </View>
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
        marginTop:15,
        marginBottom: 10,
        fontWeight: 'bold',
        

    },
   
    image: {
        height: height/2,
       // width:400,
        
       // borderRadius:30,
        
    },
    gnrescontainer:{

        flexDirection: 'row',
        alignContent:'center',
        fontWeight: 'bold',
        marginTop:25,
        marginBottom: 15
    },
    gnrestitle: {
        fontSize: 18,
        marginRight: 10,
        fontStyle: 'italic',
        color: '#800080'
    },
    
  /*  Rating:{
        fontSize: 15,
        marginRight: 10,
        fontStyle: 'italic',
        color: '#800080',
        marginTop: 17,
        marginBottom: 15

    } */

    overview: {
        padding: 15,
        fontSize: 15
    },

    release: {

        fontWeight: 'bold',
        color: '#696969',
        fontSize: 16
    },
    playButton:{
        position:'absolute',
        top: -25,
        right:10
    },
    videoModal: {

        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
       
    },
    modalText:{
        fontSize: 25,
        fontWeight: 'bold'
    }

   

});

export default Detail;