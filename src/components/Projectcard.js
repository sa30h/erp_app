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
  FlatList
} from 'react-native';

import Axios from 'axios'

import {Avatar,Title,Caption,Paragraph,Drawer,Text,DataTable,Button,ActivityIndicator,Colors} from 'react-native-paper'
import { COLORS, FONTS, SIZES} from "../../constants";
import { FAB } from 'react-native-paper';


const Projectcard = ({navigation,route}) => {
  const [project,setProject]=React.useState([])
  const [companylist,setCompanylist]=React.useState([])
  const [accountlist,setAccountlist]=React.useState([])
      const[isloading,setIsloading]=React.useState(true)

  const [businesslist,setBusinesslist]=React.useState([])

  const {id}=route.params
 React.useEffect(() => {

 async function getProject() {
  

      await  Axios.get(`http://196.29.238.98/api/pm/projectAPI/${id}`)
            .then((res)=>{setProject(res.data)
            setIsloading(false)})
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }

    async function getAccount() {
  

      await  Axios.get(`http://196.29.238.98/auth/registerApi/`)
            .then((res)=>setAccountlist(res.data))
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }

      async function getCompany() {
  

      await  Axios.get('http://196.29.238.98/auth/companyApi')
            .then((res)=>setCompanylist(res.data))
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    } 

 async function getBusiness() {
    await  Axios.get('http://196.29.238.98/auth/businessApi')
            .then((res)=>setBusinesslist(res.data))
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
    getProject()
    getCompany();
    getAccount();
    getBusiness()
  },[0]);


function DeleteProject(){

       
  Axios.delete(`http://196.29.238.98/api/pm/projectAPI/${id}`,)
        .then(res=>console.log("Deleted",res.data))
        .catch(err=>{console.log(err)})
}



  return (
      <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   : (

     <View style={{flex:1}}>
   <View style={styles.listBox} >
         <View style={{padding:10,flexDirection:'row'}}> 
   <DataTable>
    
      <DataTable.Row>
     
        
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}> Project </Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{project.project_name}</Text></DataTable.Cell>
      </DataTable.Row> 

       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Description</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{project.Description}</Text></DataTable.Cell>
      </DataTable.Row>

           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Stage</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{project.project_status}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
         
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Status</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{project.project_complete_or_Inprogress}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Estimate Price</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{project.estimate_Price_of_Project}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Start on</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{project.start_date}</Text></DataTable.Cell>
      
          </DataTable.Row>   
          <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Deadline</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{project.project_deadline}</Text></DataTable.Cell>
      
          </DataTable.Row>  
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Reminder</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{project.reminder}</Text></DataTable.Cell>
      
          </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Reminder note</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{project.reminder_note}</Text></DataTable.Cell>
      </DataTable.Row>  
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}> Client</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{companylist.find(x=>x.id==project.client_company_name)?companylist.find(x=>x.id==project.client_company_name).company_Name:"..."}</Text></DataTable.Cell>
      </DataTable.Row> 
      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}> Responsible person</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{accountlist.find(x=>x.id==project.responsible_person)?accountlist.find(x=>x.id==project.responsible_person).email:"..."}</Text></DataTable.Cell>
      </DataTable.Row> 
      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}> Business</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{businesslist.find(x=>x.id==project.business)?businesslist.find(x=>x.id==project.business).business_name:"..."}</Text></DataTable.Cell>
      </DataTable.Row> 
          
  </DataTable>

    </View>
    </View>
 

   
      <Button  mode="contained" 
      color="tomato"
      style={{marginTop:20,padding:10,marginBottom:10,marginHorizontal:5}}
      onPress={() => Deletecontactperson()}>
    Delete
  </Button>
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

export default Projectcard;
