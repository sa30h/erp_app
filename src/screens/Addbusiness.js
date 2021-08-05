
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






   
const Addbusiness = () => {

const [business_name,setBusiness_name]=React.useState()
const [business_owner,setBusiness_owner]=React.useState()
const [business_address,setBusiness_address]=React.useState()
const [street,setStreet]=React.useState()
const [city,setCity]=React.useState()
const [zip_code,setZip_code]=React.useState()
const [country,setCountry]=React.useState()
const [business_phone,setBusiness_phone]=React.useState()
const [business_emailId,setBusiness_emailId]=React.useState()
const [business_website,setBusiness_website]=React.useState()


function Createbusiness(){

        const bodyParameters = {
                
        "business_name": business_name,
        "business_owner": business_owner,
        "business_address": business_address,
        "street": street,
        "city": city,
        "zip_code": zip_code,
        "country": country,
        "business_phone": business_phone,
        "business_emailId": business_emailId,
        "business_website":business_website
 
        };
        console.log(bodyParameters)
  Axios.post('http://196.29.238.98/auth/businessApi/',bodyParameters)
        .then(res=>{console.log("Business Added",res.data)
           Alert.alert("Success", "Added")})
        .catch(err=>{console.log(err)
         Alert.alert("Oops", "Something went wrong!")})
}

   
  return (
    <ScrollView>
   <View style={{padding:5}}>

    <TextInput
      label="Business Name"
      value={business_name}
      onChangeText={text => setBusiness_name(text)}
     style={{padding:5,margin:5}}
    /> 
        <TextInput
      label="Owner"
      value={business_owner}
      onChangeText={text => setBusiness_owner(text)}
     style={{padding:5,margin:5}}
    />  
       <TextInput
      label="Address"
      value={business_address}
      onChangeText={text => setBusiness_address(text)}
     style={{padding:5,margin:5}}
    />    
     <TextInput
      label="Street"
      value={street}
      onChangeText={text => setStreet(text)}
     style={{padding:5,margin:5}}
    />    
     <TextInput
      label="City"
      value={city}
      onChangeText={text => setCity(text)}
     style={{padding:5,margin:5}}
    />   
      <TextInput
      label="Country"
      value={country}
      onChangeText={text => setCountry(text)}
     style={{padding:5,margin:5}}
    />   
      <TextInput
      label="Zip Code"
      value={zip_code}
      onChangeText={text => setZip_code(text)}
     style={{padding:5,margin:5}}
    />  
       <TextInput
      label="Contact"
      value={business_phone}
      onChangeText={text => setBusiness_phone(text)}
     style={{padding:5,margin:5}}
    />    
     <TextInput
      label="Email"
      value={business_emailId}
      onChangeText={text => setBusiness_emailId(text)}
     style={{padding:5,margin:5}}
    />    
     <TextInput
      label="Website"
      value={business_website}
      onChangeText={text => setBusiness_website(text)}
     style={{padding:5,margin:5}}
    />   

      <Button  mode="contained" 
      color="dodgerblue"
      style={{marginTop:20,padding:10,marginBottom:10}}
      onPress={() => Createbusiness()}>
    Add Business
  </Button>
</View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Addbusiness;
