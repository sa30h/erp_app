
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



//       <Text style={{fontWeight:'bold',fontSize:20}}>Company</Text>
//     <RadioButton.Group onValueChange={newValue => setName_c(newValue)} value={name_c}>
//      {
//   companylist.map((item)=>{return(

//     <View style={{flexDirection:'row',padding:5}} key={item.id}>
//         <Text>{item.company_Name}</Text>
//         <RadioButton value={item.company_Name} />
//       </View>
//     )})
// }


   
const Addservice = ({navigation}) => {

const [companylist,setCompanylist]=React.useState([])

  React.useState(()=>{

   async function getCompany() {
      await  Axios.get('http://196.29.238.98/auth/companyApi')
            .then((res)=>{setCompanylist(res.data)
              console.log(companylist)

            })  
            .catch((err) =>{ 
        console.log(err)});}

    
            getCompany()

},[0])

const [name,setName]=React.useState()
const [serviceId,setServiceId]=React.useState()
const [name_c,setName_c]=React.useState()
const [Type,setType]=React.useState()
const [description,setDescription]=React.useState()
const [cost,setCost]=React.useState()



function Createbusiness(){

        const bodyParameters = {
                
        "name": name,
        "serviceId": serviceId,
        "name_c": name_c,
        "Type": Type,
        "description": description,
        "cost": cost,
        
        };
        console.log(bodyParameters)
  Axios.post('http://196.29.238.98/service/serviceApi/',bodyParameters)
        .then(res=>{console.log("Service Added",res.data)

      Alert.alert("Success", "Added")
      navigation.navigate("Service")})
        .catch(err=>{console.log(err)
          Alert.alert("Oops!", "Something went wrong")})
}

   
  return (
    <ScrollView>
   <View style={{padding:5}}>

    <TextInput
      label="Service Id"
      value={serviceId}
      onChangeText={text => setServiceId(text)}
     style={{padding:5,margin:5}}
    /> 
    <TextInput
      label="Service Name"
      value={name}
      onChangeText={text => setName(text)}
     style={{padding:5,margin:5}}
    /> 
    <TextInput
      label="Company Name"
      value={name_c}
      onChangeText={text => setName_c(text)}
     style={{padding:5,margin:5}}
    /> 
     
       <TextInput
      label="Type"
      value={Type}
      onChangeText={text => setType(text)}
     style={{padding:5,margin:5}}
    />    
     <TextInput
      label="description"
      value={description}
      onChangeText={text => setDescription(text)}
     style={{padding:5,margin:5}}
    />    
     <TextInput
      label="cost"
      value={cost}
      onChangeText={text => setCost(text)}
     style={{padding:5,margin:5}}
    />   
     
    
      <Button  mode="contained" 
      color="dodgerblue"
      style={{marginTop:20,padding:10,marginBottom:10}}
      onPress={() => Createbusiness()}>
    Add Position
  </Button>
</View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Addservice;
