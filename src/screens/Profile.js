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
import AsyncStorage from '@react-native-async-storage/async-storage';


const Account = ({navigation}) => {
      const[isloading,setIsloading]=React.useState(true)

  const [account,setAccount]=React.useState([])
  const [departmentlist,setDepartmentlist]=React.useState([])
  const [positionlist,setPositionlist]=React.useState([])


 React.useEffect(() => {


   async function getAccount(id) {
    
   

      await  Axios.get(`http://196.29.238.98/auth/registerApi/${id}`)
            .then((res)=>{
              setAccount(res.data)
               setIsloading(false)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }


  async function retrieveData(){ 
 try {  
  const token = await AsyncStorage.getItem('token'); 
  const id = await AsyncStorage.getItem('id'); 
  getAccount(id)
     if (token !== null) {    
       // We have data!!      console.log(value);  
         }  } 
         catch (error) { 
   // Error retrieving data
     }}



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
     
   
    retrieveData()
  },[0]);


  return (
     <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   : (
    <View style={{flex:1}}>
   <Avatar.Image source={{uri:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"} }
      size={70} style={{marginLeft: '40%',marginVertical:10}}/>
 <DataTable style={{paddin:10}}>
      

      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Name</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.firstname}</Text></DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Email</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.email}</Text></DataTable.Cell>
      </DataTable.Row> 
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Position</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>
        {positionlist.find(x => x.id === account.position)?positionlist.find(x => x.id === account.position).position:" .."}
        </Text></DataTable.
        Cell>
      </DataTable.Row>     
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Position</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>
        {departmentlist.find(x => x.id === account.department)?departmentlist.find(x => x.id === account.department).department_name:" .."}
</Text>
</DataTable.Cell>
      </DataTable.Row>  
        
         <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Admin</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.is_admin?"Yes":"No"}</Text></DataTable.Cell>
      </DataTable.Row>  
                   <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Company related permission</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{
            `${account.company_create_permission?"C":" "}${account.company_read_permission?"R":" "}${account.company_edit_permission?"U":" "}${account.company_delete_permission?"D":" "}` 
        }</Text></DataTable.Cell>
      </DataTable.Row> 
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Project related permission</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>
        {
            `${account.project_create_permission?"C":" "}${account.project_read_permission?"R":" "}${account.project_edit_permission?"U":" "}${account.project_delete_permission?"D":" "}` 
        }
        </Text></DataTable.Cell>
      </DataTable.Row> 
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Contact Person related permission</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>
        {
            `${account.contactperson_create_permission?"C":" "}${account.contactperson_read_permission?"R":" "}${account.contactperson_edit_permission?"U":" "}${account.contactperson_delete_permission?"D":" "}` 
        }
        </Text></DataTable.Cell>
      </DataTable.Row> 

</DataTable>

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

export default Account;
