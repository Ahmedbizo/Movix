import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import {getPopularMovies, getUpcomingMovies,getComedy, getAdventure, getHistoryMovies, getAnimationMovies, getPopularTv, getFamilyMovies, getDocumentaryMovies, getActionMovies, getCrime} from '../services/services';
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
    const [error,setError] = useState(false);




     const getData = () => {
       return Promise.all(
      [
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getFamilyMovies(),
      getActionMovies(),
      getDocumentaryMovies(),
      getAnimationMovies(),
      getHistoryMovies(),
      getAdventure(),
      getComedy(),
      getCrime()


       ]);
      
      };





  //more performance to App (dont make the app load the Data alot of time)
  useEffect (( ) =>{

    getData().then(
      
      ([
        upcomingMoviesData,
        popularMoviesData,
        popularTvData,
        familyMoviesData,
        actionMoviesData,
        documentaryMoviesData,
        animationMoviesData,
        historyMoviesData,
        adventureData,
        comedyData,
        crimeData,


    ]) => {

      const moviesImagesArray = [];

      upcomingMoviesData.forEach(movie => {
            moviesImagesArray.push ('https://image.tmdb.org/t/p/w500' + movie.poster_path,)
            
        });
        

        setMoviesImages(moviesImagesArray);
        setUpcomingMovies(upcomingMoviesData);
        setPopularMovies(popularMoviesData);
        setPopularTv(popularTvData);
        setFamilyMovies(familyMoviesData);
        setActionMovies(actionMoviesData);
        setDocumentaryMovies(documentaryMoviesData);
        setAnimationMovies(animationMoviesData);
        setHistoryMovies(historyMoviesData);
        setAdventure(adventureData);
        setComedy(comedyData);
        setCrime(crimeData);


    },
    
    ).catch(err =>{
      setError(err);
    });

    

  } ,[] );


    return (
 
        <View>
            
            <ScrollView>
        <View style={styles.sliderContainer}>
      <SliderBox dotStyle={styles.sliderStyle}images={moviesImages}  autoplay={true} circleLoop={true} sliderBoxHeight={dimensions.height / 1.5} />
    </View>
    

    <View style={styles.carousel}>
        <List title= " Popular Movies  " content={popularMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= " Popular TV   " content={popularTv}></List>
    </View>

    <View style={styles.carousel}>
        <List title= " Up Coming Movies   " content={upcomingMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= " Family Movies  " content={familyMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= " Action Movies " content={actionMovies}></List>
    </View>


    <View style={styles.carousel}>
        <List title= " Animation Movies " content={animationMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= " History Movies " content={historyMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= " Documentary Movies  " content={documentaryMovies}></List>
    </View>

    <View style={styles.carousel}>
        <List title= " Adventure"   content={adventure}></List>
    </View>


    <View style={styles.carousel}>
    
    <List title=" Comedy " content={comedy}></List>
    </View>

    <View style={styles.carousel}>
        <List title=" Crime Movies " content={crime}></List>
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