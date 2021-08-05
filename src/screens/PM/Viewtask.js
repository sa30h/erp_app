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
  TouchableOpacity,
  useColorScheme,
  View,
  Button,
  FlatList
} from 'react-native';

import Axios from 'axios'

import {Avatar,Title,Caption,Paragraph,Drawer,Text,DataTable,ActivityIndicator,Colors} from 'react-native-paper'
import { COLORS, FONTS, SIZES} from "../../constants";
import { FAB } from 'react-native-paper';


const Viewtask = ({navigation}) => {

      const[isloading,setIsloading]=React.useState(true)

  const [task,setTask]=React.useState([])
  const [member,setMember]=React.useState([])
  const [team,setTeam]=React.useState([])
  const [project,setProject]=React.useState([])
  const [accountlist,setAccountlist]=React.useState([])


 React.useEffect(() => {

    async function getTask() {
  

      await  Axios.get('http://196.29.238.98/api/pm/tasksAPI')
            .then((res)=>{setTask(res.data)
                setIsloading(false)
                
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
     async function getTeam() {
  

      await  Axios.get('http://196.29.238.98/api/pm/teamAPI')
            .then((res)=>{setTeam(res.data)
                
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
async function getMember() {
  

      await  Axios.get('http://196.29.238.98/api/pm/teamMemberAPI')
            .then((res)=>{setMember(res.data)
                
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }

    async function getProject() {
  

      await  Axios.get(`http://196.29.238.98/api/pm/projectAPI/`)
            .then((res)=>{setProject(res.data)
             
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }

    async function getAccount() {
  

      await  Axios.get(`http://196.29.238.98/auth/registerApi/`)
            .then((res)=>{setAccountlist(res.data)
              
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
    getTask()
    getMember()
    getTeam();
    getAccount();
    getProject();
  }, [0]);


  return (
     <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   :
   (
    <View style={{flex:1}}>
   <FlatList 
   data={task}
   keyExtractor={(item, index) => index.toString()}
  renderItem={({item})=>{return(
    <TouchableOpacity onPress={()=>navigation.navigate('Ticketcard',{id:item.id})}>
        <View style={styles.listBox}>
         <View style={{padding:10,flexDirection:'row'}}> 
   <DataTable>
            <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Team</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{project.find(x=>x.id==item.team)?project.find(x=>x.id==item.team).project_name:"..."}</Text></DataTable.Cell>
      </DataTable.Row>  
    
      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Member</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{accountlist.find(x=>x.id==item.member)?accountlist.find(x=>x.id==item.member).email:"..."}</Text></DataTable.Cell>
      </DataTable.Row> 

       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Task</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{item.task_assigned}</Text></DataTable.Cell>
      </DataTable.Row> 
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Deadline</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{item.task_deadline}</Text></DataTable.Cell>
      </DataTable.Row>  
      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Update</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{item.updates}</Text></DataTable.Cell>
      </DataTable.Row> 


  
  </DataTable>
    </View>
    </View>
    </TouchableOpacity>
    )}}
    />
      <FAB
    style={styles.fab}
    small={false}
    icon="plus"
    color="#ffffff"
    onPress={() => navigation.navigate('Addtask')}
  />
   </View>
    )
   } 
   </>
   
  );
};

const styles = StyleSheet.create({
listBox:{
  backgroundColor:'#FFFFFF',
  paddingHorizontal:5,
  paddingVertical: 5,
  marginVertical:5,
  marginHorizontal:15,
  borderRadius: 5,
},
fab: {
    position: 'absolute',
    margin: 16,
    right: 10,
    bottom: 10,
  }
});

export default Viewtask;
