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






   
const Adddepartment = () => {

const [department,setDepartment]=React.useState()


function Createdepartment(){

        const bodyParameters = {
            "department_name": department
        };
        console.log(bodyParameters)
  Axios.post('http://196.29.238.98/auth/departmentApi/',bodyParameters)
        .then(res=>{console.log("Department  Added",res.data)
      Alert.alert("Success", "Added")})
        .catch(err=>{console.log(err)
          Alert.alert("Oops!", "Something went wrong")})
}

   
  return (
    <ScrollView>
   <View style={{padding:5}}>
    <TextInput
      label="Department"
      value={department}
      onChangeText={text => setDepartment(text)}
     style={{padding:5,margin:5}}
    />   

      <Button  mode="contained" 
      color="dodgerblue"
      style={{marginTop:20,padding:10,marginBottom:10}}
      onPress={() => Createdepartment()}>
    Add Department
  </Button>
</View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Adddepartment;
