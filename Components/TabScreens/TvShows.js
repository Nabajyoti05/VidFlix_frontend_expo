import React from 'react';
import { Text, View } from 'react-native';

class TvShows extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'black' }}>
          <Text style={{color:'white'}}>TvShows!</Text>
        </View>
      );
    }
  }

  export default TvShows;