import React from 'react';
import { TextInput, View, Text, Button, StyleSheet } from 'react-native';

class LoginScreen extends React.Component {
  
    render() {
      return (
        <View style={styles.container}>
            <TextInput style={{backgroundColor:'white', width:'80%', margin:10}} />
            <TextInput style={{backgroundColor:'white', width:'80%', margin:10}} /> 
            <Button title='Login' color='tomato' onPress={() => this.props.navigation.navigate('TabIndex')} />
            <Text style={{color:'white'}}>Sign-Up</Text>       
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
      container : {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor:'black',
      }
  })

  export default LoginScreen;