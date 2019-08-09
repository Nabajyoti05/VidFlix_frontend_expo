import React from 'react';
import { Text, View } from 'react-native';

class Movies extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black' }}>
          <Text style={{color:'white'}}>Movies!</Text>
        </View>
      );
    }
  }

  export default Movies;