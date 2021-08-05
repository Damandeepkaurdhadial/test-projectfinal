

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList

} from 'react-native';


const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
const DATA=[]
class HomeScreen extends Component {
    state = {
        DATA =[
            {
                id: 1,
                name: 'Anna Karenina',
            }, {
                id: 2,
                name: 'To Kill a Mockingbird',
            }, {
                id: 3,
                name: 'The Great Gatsb          ',
            }, {
                id: 4,
                name: 'One Hundred Years of Solitude',
            }, {
                id: 5,
                name: 'Anna Karenina',
            }, {
                id: 6,
                name: 'Anna Karenina',
            }, {
                id: 7,
                name: 'Anna Karenina',
            }, {
                id: 8,
                name: 'Anna Karenina',
            }, {
                id: 9,
                name: 'Anna Karenina',
            }, {
                id: 10,
                name: 'Anna Karenina',
            },


        ]

    }
    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center' }}  >
                <FlatList
                    data={this.state.DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id} />
            </View>


        );
    }
}





const styles = StyleSheet.create({

    input: {
        padding: 10,
        margin: 5,
        borderBottomColor: 'black',
        borderWidth: 1,
        width: (screenWidth / 2),
        borderRadius: 10

    },
    button: {
        margin: 20,
        padding: 20,
        borderRadius: 20,
        width: 200
    },

});

export default HomeScreen;
