
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
  Alert
} from 'react-native';

import { TextInput,Button ,RadioButton, Menu, Divider, Provider } from 'react-native-paper';

import Axios from 'axios'






   
const Addcustomer = ({navigation}) => {

const [first_name,setFirst_name]=React.useState()
const [last_name,setLast_name]=React.useState()
const [email_id,setEmail_id]=React.useState()
const [contact,setContact]=React.useState()
const [address_1,setAddress_1]=React.useState()
const [city,setCity]=React.useState()
const [state,setState]=React.useState()
const [country,setCountry]=React.useState()
const [zip_code,setZip_code]=React.useState()


function Createcustomer(){

        const bodyParameters = {
                
        "first_name": first_name,
        "last_name": last_name,
        "email_id": email_id,
        "contact": contact,
        "address_1": address_1,
        "city": city,
        "state": state,
        "country": country,
        "zip_code": zip_code,
 
        };
        console.log(bodyParameters)
  Axios.post('http://196.29.238.98/auth/customerApi/',bodyParameters)
        .then(res=>{console.log("Customer Added",res.data)
                  Alert.alert("Success", "Added")
                  navigation.navigate('Customer')
                })
        .catch(err=>{console.log(err)
          Alert.alert("Oops!", "Something went wrong")})
}

   
  return (
    <ScrollView>
   <View style={{padding:5}}>

    <TextInput
      label="Firstname"
      value={first_name}
      onChangeText={text => setFirst_name(text)}
     style={{padding:5,margin:5}}
    />  
       <TextInput
      label="Lastname"
      value={last_name}
      onChangeText={text => setLast_name(text)}
     style={{padding:5,margin:5}}
    /> 
        <TextInput
      label="Email"
      value={email_id}
      onChangeText={text => setEmail_id(text)}
     style={{padding:5,margin:5}}
    />  
       <TextInput
      label="Contact"
      value={contact}
      onChangeText={text => setContact(text)}
     style={{padding:5,margin:5}}
    />    
     <TextInput
      label="Address"
      value={address_1}
      onChangeText={text => setAddress_1(text)}
     style={{padding:5,margin:5}}
    />    
     <TextInput
      label="City"
      value={city}
      onChangeText={text => setCity(text)}
     style={{padding:5,margin:5}}
    />  
     <TextInput
      label="State"
      value={state}
      onChangeText={text => setState(text)}
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
       
      <Button  mode="contained" 
      color="dodgerblue"
      style={{marginTop:20,padding:10,marginBottom:10}}
      onPress={() => Createcustomer()}>
    Add Customer
  </Button>
</View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Addcustomer;
