import React from 'react';
import {View, SafeAreaView, Image, AsyncStorage} from 'react-native';

export default class CoverScreen extends React.Component{

    // state={
    //     top,
    //     bottom
    // }


    componentDidMount(){



        setTimeout(() => {
        
        AsyncStorage.getItem("hometheaterToken", (err, token) => {
          if(err){
            console.log("Error getting item", err)
          } else {
            if(token !== null){
             
              this.props.navigation.navigate('TabIndex', {token})
            
            } else {
              this.props.navigation.navigate('Login')
            }
          }
        })


        // setTimeout(() => {
        //     this.setState({
        //         top:0
        //     },100)
        // })

        // setTimeout(() => {
        //     this.setState({
        //         bottom:0
        //     },100)
        // })

      }, 2000)

    }



        


    render(){
        return (
            <SafeAreaView style={{flex:1,backgroundColor:'#121212'}} >
                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        <View>
                            <Image style={{width:250, height:200}} source={require('../../assets/CoverLogo.png')} />
                        </View>
                    </View>
            </SafeAreaView>
        )
    }
}