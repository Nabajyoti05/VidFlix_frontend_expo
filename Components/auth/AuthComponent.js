import React from 'react';
import {View, SafeAreaView, ScrollView, Image} from 'react-native';
import StackAuth from './StackAuth';

export default class AuthComponent extends React.Component{
    render(){
        return (
            <SafeAreaView>
                <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{flexGrow:1, flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
                    <View style={{paddingTop:30}}>
                        <Image source={require('../../assets/Logo.jpg')} />
                        <View>
                            <StackAuth />
                        </View>
                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}