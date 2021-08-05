
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

import { TextInput,Button ,RadioButton, Menu, Divider, Provider ,Card,DataTable,Avatar,ActivityIndicator,Colors} from 'react-native-paper';

import Axios from 'axios'






   
const Accountcard = ({navigation,route}) => {


const [account,setAccount]=React.useState([])
 const[departmentlist,setDepartmentlist]=React.useState([])
  const[positionlist,setPositionlist]=React.useState([])
    const[isloading,setIsloading]=React.useState(true)

 
     const {id}=route.params
console.log(id)
 React.useEffect(() => {
    async function getAccount() {

  

      await  Axios.get(`http://196.29.238.98/auth/registerApi/${id}`)
            .then((res)=>{setAccount(res.data)
                            setIsloading(false)})
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong",err)});
    }

     async function getDepartment() {
      await  Axios.get('http://196.29.238.98/auth/departmentApi')
            .then((res)=>{setDepartmentlist(res.data)
              console.log(res.data)
            })  
            .catch((err) =>{ 
        console.log(err)});}

       async function getPositionlist() {

      await  Axios.get('http://196.29.238.98/auth/positionApi')
            .then((res)=>{setPositionlist(res.data)
              console.log(positionlist)
            })  
            .catch((err) =>{ 
        console.log(err)});}

            getPositionlist()
            getDepartment()
    getAccount();
  }, [0]);



        // "ticket_no": "compservInternet",

function DeleteAccount(){

       
  Axios.delete(`http://196.29.238.98/auth/registerApi/${id}`,)
        .then(res=>console.log("Deleted",res.data))
        .catch(err=>{console.log(err)})
}

   
  return (
     <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   : (
     <ScrollView>
   <View style={{padding:5}}>
      <Avatar.Text size={100} label={account.firstname} style={{backgroundColor:'#FFF',width: '40%',borderRadius:50,marginHorizontal:'30%',marginVertical:10}} / >
   <Card style={{margin:5}}>

<DataTable>
    

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
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Department</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>

    {departmentlist.find(x => x.id === account.department)?departmentlist.find(x => x.id === account.department).department_name:" .."}

        </Text></DataTable.Cell>
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
   </Card>
   
    
      <Button  mode="contained" 
      color="tomato"
      style={{marginTop:20,padding:10,marginBottom:0}}
      onPress={() => DeleteAccount()}>
    Delete
  </Button> 
   <Button  mode="contained" 
      color="dodgerblue"
      style={{marginTop:5,padding:10,marginBottom:10}}
      onPress={() => DeleteAccount()}>
    Update
  </Button>
</View>
   </ScrollView>
    )
}
</>
   
  );
};

const styles = StyleSheet.create({

});

export default Accountcard;
