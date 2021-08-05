
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

import { TextInput,Button ,RadioButton, Menu, Divider, Provider } from 'react-native-paper';

import Axios from 'axios'






   
const Addcontactperson = () => {

const [name,setName]=React.useState()
const [position,setPosition]=React.useState()
const [telephoneno,setTelephoneno]=React.useState()
const [email,setEmail]=React.useState()
const [wattsapp,setWattsapp]=React.useState()
const [skype,setSkype]=React.useState()
const [company_name,setCompany_name]=React.useState()

const[companylist,setCompanylist]=React.useState([])

React.useEffect(() => {
   

     async function getCompany() {
  

      await  Axios.get('http://196.29.238.98/auth/companyApi')
            .then((res)=>setCompanylist(res.data))
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
    getCompany();
  },[0]);

function Createcontactperson(){




        const bodyParameters = {
                
        "contact_name":name,
        "position": position,
        "telephoneNo": telephoneno,
        "email": email,
        "wattsapp": wattsapp,
        "skype": skype,
        "company_name": 8

 
        };
        console.log(bodyParameters)
  Axios.post('http://196.29.238.98/auth/contactpersonApi/',bodyParameters)
        .then(res=>console.log("Contactperson Added",res.data))
        .catch(err=>{console.log(err)})
}

   
  return (
    <ScrollView>
   <View style={{padding:5}}>

   
     <TextInput
      label="Name"
      value={name}
      onChangeText={text => setName(text)}
     style={{padding:5,margin:5}}
    /> 
        <TextInput
      label="Position"
      value={position}
      onChangeText={text => setPosition(text)}
     style={{padding:5,margin:5}}
    />  
       <TextInput
      label="Contact no"
      value={telephoneno}
      onChangeText={text => setTelephoneno(text)}
     style={{padding:5,margin:5}}
    />    
     <TextInput
      label="Email"
      value={email}
      onChangeText={text => setEmail(text)}
     style={{padding:5,margin:5}}
    />    
     <TextInput
      label="Wattsapp"
      value={wattsapp}
      onChangeText={text => setWattsapp(text)}
     style={{padding:5,margin:5}}
    />   
      <TextInput
      label="Skype"
      value={skype}
      onChangeText={text => setSkype(text)}
     style={{padding:5,margin:5}}
    />   
       <Text style={{fontWeight:'bold',fontSize:20}}>Company Name</Text>
    <RadioButton.Group onValueChange={newValue => setCompany_name(Number(newValue))} value={company_name}>
    <View style={{flexDirection:'row',padding:5}}>
    <ScrollView horizontal>
     {
  companylist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}} key={item.id}>
        <Text>{item.company_Name}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}
    </ScrollView>
      </View>
     
    </RadioButton.Group>
      <Button  mode="contained" 
      color="dodgerblue"
      style={{marginTop:20,padding:10,marginBottom:10}}
      onPress={() => Createcontactperson()}>
    Add Contact person
  </Button>
</View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Addcontactperson;
