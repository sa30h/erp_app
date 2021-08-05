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






   
const Addaccount = () => {



  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const[departmentlist,setDepartmentlist]=React.useState([])
  const[positionlist,setPositionlist]=React.useState([])

React.useState(()=>{

   async function getDepartment() {
      await  Axios.get('http://196.29.238.98/auth/departmentApi')
            .then((res)=>{setDepartmentlist(res.data)
              
            })  
            .catch((err) =>{ 
        console.log(err)});}

       async function getPositionlist() {

      await  Axios.get('http://196.29.238.98/auth/positionApi')
            .then((res)=>{setPositionlist(res.data)
             
            })  
            .catch((err) =>{ 
        console.log(err)});}

            getPositionlist()
            getDepartment()

})

const [checked, setChecked] = React.useState('first');

const [email,setEmail]=React.useState()
const [password,setPassword]=React.useState()
const [password2,setPassword2]=React.useState()
const [name,setName]=React.useState()
const [ccp,setCcp]=React.useState("no")
const [crp,setCrp]=React.useState("no")
const [cep,setCep]=React.useState("no")
const [cdp,setCdp]=React.useState("no")
const [cpcp,setCpcp]=React.useState("no")
const [cprp,setCprp]=React.useState("no")
const [cpep,setCpep]=React.useState("no")
const [cpdp,setCpdp]=React.useState("no")
const [pcp,setPcp]=React.useState("no")
const [prp,setPrp]=React.useState("no")
const [pep,setPep]=React.useState("no")
const [pdp,setPdp]=React.useState("no")
const [isadmin,setIsadmin]=React.useState("no")
const [isactive,setIsactive]=React.useState("yes")
const [isstaff,setIsstaff]=React.useState("no")
const [issuper,setIssuper]=React.useState("no")
const [position,setPosition]=React.useState()
const [department,setDepartment]=React.useState()


  const [value, setValue] = React.useState('first');

function Createuser(){

        const bodyParameters = {
           "password2": password,
            "password": password,
            "email": email,
            "is_admin": isadmin,
            "is_active": isactive,
            "is_staff": isstaff,
            "is_superuser": setIssuper,
            "firstname": name,
            "company_create_permission": ccp,
            "company_read_permission": crp,
            "company_edit_permission": cep,
            "company_delete_permission": cdp,
            "contactperson_create_permission": cpcp,
            "contactperson_read_permission": cprp,
            "contactperson_edit_permission": cpep,
            "contactperson_delete_permission": cpdp,
            "project_create_permission": pcp,
            "project_read_permission": prp,
            "project_edit_permission": pep,
            "project_delete_permission": pdp,
            "position": position,
            "department": department

        };
        console.log(bodyParameters)
      Axios.post('http://196.29.238.98/auth/registerApi/',bodyParameters)
        .then((res)=>{console.log("User Created",res.data)

            Alert.alert("Success", "Added")
        })
        .catch(err=>{console.log(err)
          Alert.alert("Oops!", "Something went wrong")})
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
      label="Email"
      value={email}
      onChangeText={text => setEmail(text)}
      style={{padding:5,margin:5}}
    />
     <TextInput
      label="Password"
      value={password}
      onChangeText={text => setPassword(text)}
     style={{padding:5,margin:5}}
    />
       <TextInput
      label="Repeat Password"
      value={password}
      onChangeText={text => setPassword(text)}
     style={{padding:5,margin:5}}
    />

        <View style={{flexDirection:'row'}}>

    <Text style={{fontWeight:'bold',fontSize:20}}>Admin</Text>
     <RadioButton
        value="first"
        status={ isadmin === true ? 'checked' : 'unchecked' }
        onPress={() => setIsadmin("true")}
      /> 
      </View>
    <Text style={{fontWeight:'bold',fontSize:20}}>Company Related Permissions</Text>
    <View style={{flexDirection:'row'}}>
  <Text style={{fontWeight:'bold'}}>Read</Text>
      <RadioButton
        value="first"
        status={ crp === true ? 'checked' : 'unchecked' }
        onPress={() => setCrp("true")}
      />  
       <Text style={{fontWeight:'bold'}}>Create</Text>
      <RadioButton
        value="first"
        status={ ccp === true ? 'checked' : 'unchecked' }
        onPress={() => setCcp("true")}
      />
           <Text style={{fontWeight:'bold'}}>Edit</Text>
      <RadioButton
        value="first"
        status={ cep === true ? 'checked' : 'unchecked' }
        onPress={() => setCep("true")}
      />
           <Text style={{fontWeight:'bold'}}>Delete</Text>
      <RadioButton
        value="first"
        status={ cdp === true ? 'checked' : 'unchecked' }
        onPress={() => setCdp("true")}
      />
    </View>
      <Text style={{fontWeight:'bold',fontSize:20}}>Contact Person Related Permissions</Text>
    <View style={{flexDirection:'row'}}>
  <Text style={{fontWeight:'bold'}}>Read</Text>
      <RadioButton
        value="first"
        status={ cprp === true ? 'checked' : 'unchecked' }
        onPress={() => setCprp("true")}
      />  
       <Text style={{fontWeight:'bold'}}>Create</Text>
      <RadioButton
        value="first"
        status={ cpcp === true ? 'checked' : 'unchecked' }
        onPress={() => setCpcp("true")}
      />
           <Text style={{fontWeight:'bold'}}>Edit</Text>
      <RadioButton
        value="first"
        status={ cpep === true ? 'checked' : 'unchecked' }
        onPress={() => setCpep("true")}
      />
           <Text style={{fontWeight:'bold'}}>Delete</Text>
      <RadioButton
        value="first"
        status={ cpdp === true ? 'checked' : 'unchecked' }
        onPress={() => setCpdp("true")}
      />
    </View>
      <Text style={{fontWeight:'bold',fontSize:20}}>Project Related Permissions</Text>
    <View style={{flexDirection:'row'}}>
  <Text style={{fontWeight:'bold'}}>Read</Text>
      <RadioButton
        value="first"
        status={ prp === true ? 'checked' : 'unchecked' }
        onPress={() => setPrp("true")}
      />  
       <Text style={{fontWeight:'bold'}}>Create</Text>
      <RadioButton
        value="first"
        status={ pcp === true ? 'checked' : 'unchecked' }
        onPress={() => setPcp("true")}
      />
           <Text style={{fontWeight:'bold'}}>Edit</Text>
      <RadioButton
        value="first"
        status={ pep === true ? 'checked' : 'unchecked' }
        onPress={() => setPep("true")}
      />
           <Text style={{fontWeight:'bold'}}>Delete</Text>
      <RadioButton
        value="first"
        status={ pdp === true ? 'checked' : 'unchecked' }
        onPress={() => setPdp("true")}
      />
    </View>
<Text style={{fontWeight:'bold',fontSize:20}}>Position</Text>
    <RadioButton.Group onValueChange={newValue => setPosition(Number(newValue))} value={position}>
     {
  positionlist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}} key={item.id}>
        <Text>{item.position}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}
     
    </RadioButton.Group>

<Text style={{fontWeight:'bold',fontSize:20}}>Department</Text>
    <RadioButton.Group onValueChange={newValue => setDepartment(Number(newValue))} value={department}>
     {
  departmentlist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}} key={item.id}>
        <Text>{item.department_name}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}
     
    </RadioButton.Group>
      <Button  mode="contained" 
      color="dodgerblue"
      style={{marginTop:20,padding:10,marginBottom:10}}
      onPress={() => Createuser()}>
    Add Account
  </Button>


   </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Addaccount;
