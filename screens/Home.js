import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import {getPopularMovies, getUpcomingMovies,getComedy, getDrama, getAdventure, getHistoryMovies, getAnimationMovies, getPopularTv, getFamilyMovies, getDocumentaryMovies, getActionMovies, getCrime} from '../services/services';
import { SliderBox } from "react-native-image-slider-box";
import { react } from '@babel/types';
import List from '../components/List';



const dimensions = Dimensions.get('screen');
const Home = () => {

    const [moviesImages,setMoviesImages] = useState('');
    const [popularMovies,setPopularMovies] = useState('');
    const [popularTv,setPopularTv] = useState('');
    const [upcomingMovies ,setUpcomingMovies] = useState('');
    const [familyMovies ,setFamilyMovies] = useState('');
    const [documentaryMovies ,setDocumentaryMovies] = useState('');
    const [actionMovies ,setActionMovies] = useState('');
    const [animationMovies ,setAnimationMovies] = useState('');
    const [historyMovies ,setHistoryMovies] = useState('');
    const [adventure ,setAdventure] = useState('');
    const [comedy , setComedy] = useState ('');
    const [crime , setCrime] = useState ('');
    const [drama , SetDrama] = useState ('');
    const [error,setError] = useState(false);


  //more performance to App (dont make the app load the Data alot of time)
  useEffect (( ) =>{

    getUpcomingMovies().then(movies => {

        const moviesImagesArray = [];

        movies.forEach(movie => {
            moviesImagesArray.push ('https://image.tmdb.org/t/p/w500' + movie.poster_path,)
            
        });
        

        setMoviesImages(moviesImagesArray);
      } ).catch(err =>{
        setError(err);
      } );


    getPopularMovies().then(movies => {
     setPopularMovies(movies)
    } ).catch(err =>{
      setError(err);
    } );


    getPopularTv().then(movies => {
        setPopularTv(movies)
       } ).catch(err =>{
         setError(err);
       } );


       getUpcomingMovies().then(movies => {
        setUpcomingMovies(movies)
       } ).catch(err =>{
         setError(err);
       } );


       getFamilyMovies().then(movies => {
        setFamilyMovies(movies)
       } ).catch(err =>{
         setError(err);
       } );

       getActionMovies().then(movies => {
        setActionMovies(movies)
       } ).catch(err =>{
         setError(err);
       } );


       getDocumentaryMovies().then(movies => {
        setDocumentaryMovies(movies)
       } ).catch(err =>{
         setError(err);
       } );


       getAnimationMovies().then(movies => {
        setAnimationMovies(movies)
       } ).catch(err =>{
         setError(err);
       } );


       getHistoryMovies().then(movies => {
        setHistoryMovies(movies)
       } ).catch(err =>{
         setError(err);
       } );

       getAdventure().then(movies => {
        setAdventure(movies)
       } ) . catch(err =>{
           setError(err);
       });

       getComedy().then(movies =>{
           setComedy(movies)
       }) . catch(err => {
           setError(err)
       });

       getCrime().then(movies => {
           setCrime(movies)
       }). catch(err => {
           setError(err)
       });

       getDrama (movies => {
           SetDrama(movies)
       }). catch(err =>{
           setError(err)
       });


  } ,[] )


    return (
 
        <View>
            
            <ScrollView>
        <View style={styles.sliderContainer}>
      <SliderBox dotStyle={styles.sliderStyle}images={moviesImages}  autoplay={true} circleLoop={true} sliderBoxHeight={dimensions.height / 1.5} />
    </View>
    

    <View style={styles.carousel}>
        <List title= "Popular Movies  " content={popularMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= "Popular TV   " content={popularTv}></List>
    </View>

    <View style={styles.carousel}>
        <List title= "Up Coming Movies   " content={upcomingMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= "Family Movies  " content={familyMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= "Action Movies " content={actionMovies}></List>
    </View>


    <View style={styles.carousel}>
        <List title= "Animation Movies " content={animationMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= "History Movies " content={historyMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= "Documentary Movies  " content={documentaryMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= " Adventure"   content={adventure}></List>
    </View>


    <View style={styles.carousel}>
    
    <List title="Comedy " content={comedy}></List>
    </View>

    <View style={styles.carousel}>
        <List title="Crime Movies " content={crime}></List>
    </View>

    <View style={styles.carousel}>
    <List title="Drama Movies " content={drama}> </List>
    </View>
   

    
    </ScrollView>
    </View>
        
    );

    
};

const styles = StyleSheet.create({
    sliderContainer: { 
        flex: 1, 
        justifyContent: "center",
        alignItems: "center", 
        backgroundColor:'#fffff0',
        
        
     
     
      },

      sliderStyle: {
          height:0

      },
      
      carousel:{

        flex: 1, 
        justifyContent: "center",
         alignItems: "center", 
         backgroundColor:'#fffff0',
         
      }


})

export default Home;