import React from 'react';
import {TouchableOpacity, StyleSheet, Image,Text} from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const placeholderImage = require ('../assets/images/placeholder.png')

const propTypes = {
    item: PropTypes.object,

}
class Card extends React.PureComponent {
    
    render() {

        const {navigation,item} = this.props;
        return (

            <TouchableOpacity  
             onPress={() => navigation.navigate('Detail', {movieDetail: item})} 
             style ={styles.container}>

            
            <Image style={styles.image} 
            resizeMode='cover'
            source={
                item.poster_path 
               ? {uri: 'https://image.tmdb.org/t/p/w500' + item.poster_path}
                :  placeholderImage
            }
            />
            
            {!item.poster_path && (<Text style= {styles.movieName}>{item.title}</Text>)}
            </TouchableOpacity>
            
        );
    }
}


const styles = StyleSheet.create ({

    container: {

        padding: 4,
        position: 'relative',
        alignItems: 'center',
        height:200,
        
    },
    image: {
        height:190,
        width:120,
        borderRadius:25
    },
    movieName: {
        position: 'absolute',
        width:100,
        top:10,
        textAlign: 'center'

    }

})
Card.prototypes = propTypes;
export default Card;