

import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  View,
  Dimensions,
  Button,
  Alert,
  AsyncStorage
} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigator } from 'react-navigation';

const screenHeight = Math.round(Dimensions.get('window').height);
const screenWidth = Math.round(Dimensions.get('window').width);
// console.log('navigator', AppNavigator)
import HomeScreen from './home';



class register extends Component {
  state = {
    name: '',
    pass: '',
  }
 async handleSubmit() {
    {
      this.state.name && this.state.pass ?

        <View>
          try{
            await AsyncStorage.setItem({
              username:this.state.name,
              pass:this.state.pass
            }).then(()=>{
              navigation.navigate('HomeScreen')
            })
          
          }
          catch(error){ }
          
          
        </View>

        :
        Alert.alert('Pleasae fill usernamee and password first')

    }

  }
  render() {
    console.log('this.props',this.props)

    return (
      <View style={{ flex: 1, justifyContent: 'center' }}  >
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Text style={{ alignSelf: 'center' }}>USERNAME</Text>
          <TextInput
            style={styles.input}
            onChangeText={name => this.setState({ name })}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Text style={{ alignSelf: 'center' }}>PASSWORD</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={pass => this.setState({ pass })}
          />
        </View>


        <Button
          // disabled={this.state.disabled}
          title={'register'}
          style={styles.button} />
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

export default register;