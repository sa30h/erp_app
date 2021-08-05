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
import axios from 'axios'



const Taskput = ({navigation,route}) => {

    const {id}=route.params

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
  const[mytask,setMytask]=React.useState([])


 React.useEffect(() => {

     async function getMytask(id) {
  

      await  axios.get(`http://196.29.238.98/api/pm/tasksAPI/${id}`)
            .then((res)=>{setMytask(res.data)
                console.log(res.data)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
getMytask(id)

//     async function getTeam() {
  

//       await  Axios.get('http://196.29.238.98/api/pm/teamAPI')
//             .then((res)=>{setTeamlist(res.data)
               
//             })
//             .catch((err) =>{ 
//             // navigation.goBack()
          
//         console.log("something went wrong")});
//     }
// async function getMember() {
  

//       await  Axios.get('http://196.29.238.98/api/pm/teamMemberAPI')
//             .then((res)=>{setMemberlist(res.data)
                
//             })
//             .catch((err) =>{ 
//             // navigation.goBack()
          
//         console.log("something went wrong")});
//     }

//     async function getProject() {
  

//       await  Axios.get(`http://196.29.238.98/api/pm/projectAPI/`)
//             .then((res)=>{setProjectlist(res.data)
              
//             })
//             .catch((err) =>{ 
//             // navigation.goBack()
          
//         console.log("something went wrong")});
//     }

//     async function getAccount() {
  

//       await  Axios.get(`http://196.29.238.98/auth/registerApi/`)
//             .then((res)=>{setAccountlist(res.data)
              
//             })
//             .catch((err) =>{ 
//             // navigation.goBack()
          
//         console.log("something went wrong")});
//     }
//     getMember()
//     getTeam();
//     getAccount();
//     getProject();
  }, [0]);

function Createteam(id){
    console.log(mytask)
    console.log(id)
        const bodyParameters = {

     member:  mytask.member,
    task_assigned: mytask.task_assigned, 
    task_deadline:  mytask.task_deadline,
    team:  mytask.team, 
    updates: updates
     
        };
        console.log(bodyParameters)
  axios.put(`http://196.29.238.98/api/pm/tasksAPI/${id}`,bodyParameters)
        .then(res=>console.log(" Updated",res.data))
        .catch(err=>{console.log(err,err.data)})
}

  return (
   <View style={{padding:5}}>

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
     

 <Button  mode="contained" 
      color="dodgerblue"
      style={{marginTop:20,padding:10,marginBottom:10}}
      onPress={() => Createteam(id)}>
    Update
  </Button>


   </View>
  );
};

const styles = StyleSheet.create({

});

export default Taskput;
