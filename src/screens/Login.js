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
  View,
} from 'react-native';

import { TextInput,Button } from 'react-native-paper';

import Axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SIZES, URL,COLORS } from "../../constants";
import {AuthContext} from './context'








const Login = () => {

const { signIn } = React.useContext(AuthContext);
const [email,setEmail]=React.useState()
const [password,setPassword]=React.useState()

const Storetoken = async (val,val2) => { 
 try { 
    await AsyncStorage.setItem('token',val);
    await AsyncStorage.setItem('id',val2);
    console.log("token saved",val)
    console.log("id saved",val2)
      } 
    catch (error) { 
      console.log('did not save token')  }
  };

const retrieveData = async () => { 
 try {  
  const value = await AsyncStorage.getItem('TASKS'); 
     if (value !== null) {    
       // We have data!!      console.log(value);  
         }  } 
         catch (error) { 
   // Error retrieving data
     }};
     
function Userlogin(){

        const bodyParameters = {
          "email": email,
          "password":password
        };
        console.log(email,password)
  Axios.post('http://196.29.238.98/auth/loginApi/',bodyParameters)
        .then(res=>{
          Storetoken(res.data.token,JSON.stringify(res.data.id))
          console.log("Login success",res.data.token)})
        .catch(err=>{console.log(err)})
}



  return (
   <View style={{padding:5}}>
    <TextInput
      label="Email"
      value={email}
      onChangeText={text => setEmail(text)}
      style={{padding:5,margin:5,marginTop:100}}
    />
    <TextInput
      label="Password"
      value={password}
      onChangeText={text => setPassword(text)}
     style={{padding:5,margin:5}}
    />

      <Button  mode="contained" 
      
      style={{marginTop:20,padding:10,backgroundColor:'dodgerblue'}}
      onPress={() => signIn({"email":email,"password":password})}>
    Login
  </Button>

   </View>
  );
};

const styles = StyleSheet.create({

});

export default Login;
