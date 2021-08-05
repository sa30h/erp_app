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


const Viewteam = ({navigation}) => {
  const [team,setTeam]=React.useState([])
  const [project,setProject]=React.useState([])
  const [accountlist,setAccountlist]=React.useState([])
    const[isloading,setIsloading]=React.useState(true)



 React.useEffect(() => {
    async function getTeam() {
  

      await  Axios.get('http://196.29.238.98/api/pm/teamAPI')
            .then((res)=>{setTeam(res.data)
                
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
              setIsloading(false)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
    getTeam();
    getAccount();
    getProject();
  }, [0]);


  return (
         <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   :(

    <View style={{flex:1}}>
   <FlatList 
   data={team}
   keyExtractor={(item, index) => index.toString()}
  renderItem={({item})=>{return(
    <TouchableOpacity onPress={()=>navigation.navigate('Ticketcard',{id:item.id})}>
        <View style={styles.listBox}>
         <View style={{padding:10,flexDirection:'row'}}> 
   <DataTable>
            <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Team</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{project.find(x=>x.id==item.project)?project.find(x=>x.id==item.project).project_name:"..."}</Text></DataTable.Cell>
      </DataTable.Row>  
    
      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Manager</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{accountlist.find(x=>x.id==item.project_manager)?accountlist.find(x=>x.id==item.project_manager).email:"..."}</Text></DataTable.Cell>
      </DataTable.Row> 

       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Lead</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{accountlist.find(x=>x.id==item.team_lead)?accountlist.find(x=>x.id==item.team_lead).email:"..."}</Text></DataTable.Cell>
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
    onPress={() => navigation.navigate('Addticket')}
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

export default Viewteam;
