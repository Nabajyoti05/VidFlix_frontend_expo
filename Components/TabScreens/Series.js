import React from 'react';
import { Text, View } from 'react-native';

class Series extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black' }}>
          <Text style={{color:'white'}}>Series!</Text>
        </View>
      );
    }
  }

  export default Series;