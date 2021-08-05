/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,Alert
} from 'react-native';

import { TextInput,Button ,RadioButton, Menu, Divider, Provider } from 'react-native-paper';

import Axios from 'axios'

import AsyncStorage from "@react-native-async-storage/async-storage";





   
const Addposition = () => {

const [position,setPosition]=React.useState()


 async function Createposition(){
  const userToken = await  AsyncStorage.getItem("token");

        const bodyParameters = {
            "position": position
        };
        const config = {
    headers:{Authorization:"Token "+userToken}
    
  }
        console.log(bodyParameters,config)
  Axios.post('http://196.29.238.98/auth/positionApi/',bodyParameters)
        .then(res=>{console.log("Position  Added",res.data)
      Alert.alert("Success", "Added")})
        .catch(err=>{console.log(err)

          Alert.alert("Oops!", "Something went wrong")})
}

   
  return (
    <ScrollView>
   <View style={{padding:5}}>
    <TextInput
      label="Position"
      value={position}
      onChangeText={text => setPosition(text)}
     style={{padding:5,margin:5}}
    />   

      <Button  mode="contained" 
      color="dodgerblue"
      style={{marginTop:20,padding:10,marginBottom:10}}
      onPress={() => Createposition()}>
    Add Position
  </Button>
</View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Addposition;
