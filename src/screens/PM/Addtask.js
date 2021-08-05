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
import DatePicker from 'react-native-datepicker'
import Axios from 'axios'



const Addtask = () => {

  const [memberlist,setMemberlist]=React.useState([])
  const [projectlist,setProjectlist]=React.useState([])
  const [teamlist,setTeamlist]=React.useState([])

  const [team,setTeam]=React.useState()
  const [member,setMember]=React.useState()
  const [updates,setUpdates]=React.useState()
  const [deadline,setDeadline]=React.useState("2016-05-15")
  const [task,setTask]=React.useState()

  const [accountlist,setAccountlist]=React.useState([])
  const [project,setProject]=React.useState([])
  const [manager,setManager]=React.useState([])
  const [lead,setLead]=React.useState([])


 React.useEffect(() => {
    async function getTeam() {
  

      await  Axios.get('http://196.29.238.98/api/pm/teamAPI')
            .then((res)=>{setTeamlist(res.data)
                console.log(res.data)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
async function getMember() {
  

      await  Axios.get('http://196.29.238.98/api/pm/teamMemberAPI')
            .then((res)=>{setMemberlist(res.data)
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
                
        "task_assigned": task,
        "updates": updates,
        "task_deadline": deadline,
        "team": team,
        "member": member
        
        };
        console.log(bodyParameters)
  Axios.post('http://196.29.238.98/api/pm/tasksAPI/',bodyParameters)
        .then(res=>console.log("Task Added",res.data))
        .catch(err=>{console.log(err)})
}

  return (
   <View style={{padding:5}}>
<Text style={{fontWeight:'bold',fontSize:20}}>Team</Text>
    <RadioButton.Group onValueChange={newValue => setTeam(Number(newValue))} value={team}>
     <ScrollView horizontal>
     {
  teamlist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}} key={item.id}>
        <Text>{projectlist.find(x=>x.id==item.project)?projectlist.find(x=>x.id==item.project).project_name:" "}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}</ScrollView>

      </RadioButton.Group>

<Text style={{fontWeight:'bold',fontSize:20}}>Member</Text>
    <RadioButton.Group onValueChange={newValue => setMember(Number(newValue))} value={member}>
    <ScrollView horizontal>
     {
  memberlist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}} key={item.id}>
        <Text>{accountlist.find(x=>x.id==item.team_member)?accountlist.find(x=>x.id==item.team_member).email:" "}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}</ScrollView>
      </RadioButton.Group>

       <TextInput
      label="Task"
      value={task}
      onChangeText={text => setTask(text)}
     style={{padding:5,margin:5}}
    /> 

    <Text style={{fontWeight:'bold',fontSize:20}}>Update</Text>
    <RadioButton.Group onValueChange={newValue => setUpdates(newValue)} value={updates}>
   

    <View style={{flexDirection:'row',padding:5}}>
    <View style={{flexDirection:'row',padding:5}}>
        <Text>Allocated</Text>
        <RadioButton value={"allocated"} />
      </View>
          <View style={{flexDirection:'row',padding:5}}>
        <Text>Completed</Text>
        <RadioButton value={"completed"} />
      </View>
          <View style={{flexDirection:'row',padding:5}}>
        <Text>Error</Text>
        <RadioButton value={"error"} />
      </View>
      </View>

     
    </RadioButton.Group>
     <DatePicker
        style={{width: 200}}
        date={deadline}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2016-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
         
        }}
        onDateChange={(date) => {setDeadline( date)}}
      />

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

export default Addtask;
