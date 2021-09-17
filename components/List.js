import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';


const propTypes ={
    title: PropTypes.string,
    content: PropTypes.object,
}

class List extends React.PureComponent {
   
    render() {
        const {title,content} = this.props
        return (
            <View style={styles.list}>
                <View>
                    <Text style={styles.text}>{title}</Text>
                </View>
            <View>
                 <FlatList 
                data={content}
                horizontal={true}
                renderItem= {({item}) => <Card item ={item}/>}>

                </FlatList>
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: 'italic',
        paddingBottom: 20

    },
    list:{
        marginTop: 35
    }
})

List.propTypes = propTypes;
export default List;