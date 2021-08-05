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



const Createteam = ({navigation}) => {

  const [member,setMember]=React.useState([])
  const [team,setTeam]=React.useState([])
  const [projectlist,setProjectlist]=React.useState([])
  const [accountlist,setAccountlist]=React.useState([])
  const [project,setProject]=React.useState([])
  const [manager,setManager]=React.useState([])
  const [lead,setLead]=React.useState([])


 React.useEffect(() => {
    async function getTeam() {
  

      await  Axios.get('http://196.29.238.98/api/pm/teamAPI')
            .then((res)=>{setTeam(res.data)
                console.log(res.data)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
async function getMember() {
  

      await  Axios.get('http://196.29.238.98/api/pm/teamMemberAPI')
            .then((res)=>{setMember(res.data)
                console.log(res.data)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }

    async function getProject() {
  

      await  Axios.get(`http://196.29.238.98/api/pm/projectAPI/`)
            .then((res)=>{setProjectlist(res.data)
              console.log(res.data)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }

    async function getAccount() {
  

      await  Axios.get(`http://196.29.238.98/auth/registerApi/`)
            .then((res)=>{setAccountlist(res.data)
              console.log(res.data)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
    getMember()
    getTeam();
    getAccount();
    getProject();
  }, [0]);

function Createteam(){

        const bodyParameters = {
                
        "project": project,
        "project_manager":manager,
        "team_lead": lead
        
        
        };
        console.log(bodyParameters)
  Axios.post('http://196.29.238.98/api/pm/teamAPI/',bodyParameters)
        .then(res=>{console.log("Team Added",res.data)
                    Alert.alert("Success", "Added")
                    navigation.navigate("Viewteam")
    })
        .catch(err=>{console.log(err)
            Alert.alert("Oops!","something went wrong")
            
        })
}

  return (
   <View style={{padding:5}}>
<Text style={{fontWeight:'bold',fontSize:20}}>Project</Text>
    <RadioButton.Group onValueChange={newValue => setProject(Number(newValue))} value={project}>
     <ScrollView horizontal>
     {
  projectlist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}} key={item.id}>
        <Text>{item.project_name}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}</ScrollView>
      </RadioButton.Group>

<Text style={{fontWeight:'bold',fontSize:20}}>Team Manager</Text>
    <RadioButton.Group onValueChange={newValue => setManager(Number(newValue))} value={manager}>
    <ScrollView horizontal>
     {
  accountlist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}} key={item.id}>
        <Text>{item.email}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}</ScrollView>
      </RadioButton.Group>

<Text style={{fontWeight:'bold',fontSize:20}}>Team Lead</Text>
    <RadioButton.Group onValueChange={newValue => setLead(Number(newValue))} value={lead}>
    <ScrollView horizontal>
     {
  accountlist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}} key={item.id}>
        <Text>{item.email}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}</ScrollView>
        </RadioButton.Group>

 <Button  mode="contained" 
      color="dodgerblue"
      style={{marginTop:20,padding:10,marginBottom:10}}
      onPress={() => Createteam()}>
    Add Team
  </Button>


   </View>
  );
};

const styles = StyleSheet.create({

});

export default Createteam;
