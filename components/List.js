import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';


const propTypes ={
    title: PropTypes.string,
    content: PropTypes.array,
}

class List extends React.PureComponent {
   
    render() {
        const {navigation,title,content} = this.props
        return (
            <View style={styles.list}>
                <View>
                    <Text style={styles.text}>{title}</Text>
                </View>
            <View>
                 <FlatList 
                data={content}
                horizontal={true}
                renderItem= {({item}) => <Card navigation={navigation} item ={item}/>}>

                </FlatList>
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    text: {
        fontSize: 25,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color:'#f8f8ff',
        paddingBottom: 20

    },
    list:{
        marginTop: 35
    }
})

List.propTypes = propTypes;
export default List;