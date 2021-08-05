
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






   
const Ticketcard = ({navigation,route}) => {


const [account,setAccount]=React.useState([])
const [handlerlist,setHandlerlist]=React.useState([])
 const[servicelist,setServicelist]=React.useState([])
  const[customerlist,setCustomerlist]=React.useState([])
      const[isloading,setIsloading]=React.useState(true)

  var dd="dd"
 
     const {id}=route.params
console.log(id)
 React.useEffect(() => {
    async function getAccount() {

  

      await  Axios.get(`http://196.29.238.98/service/complaintApi/${id}`)
            .then((res)=>{setAccount(res.data)
            setIsloading(false)})
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong",err)});
    }

     async function getHandler() {
  

      await  Axios.get('http://196.29.238.98/auth/registerApi')
            .then((res)=>setHandlerlist(res.data))
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }

     async function getCustomer() {
      await  Axios.get('http://196.29.238.98/auth/customerApi')
            .then((res)=>{setCustomerlist(res.data)
            })  
            .catch((err) =>{ 
        console.log(err)});}

       async function getService() {

      await  Axios.get('http://196.29.238.98/service/serviceApi')
            .then((res)=>{setServicelist(res.data)
            })  
            .catch((err) =>{ 
        console.log(err)});}

    getService()
    getCustomer()
    getAccount();
    getHandler()
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
      <Avatar.Text size={100} label="T" style={{width: '40%',borderRadius:50,marginHorizontal:'30%',marginVertical:10}} / >
   <Card style={{margin:5}}>

<DataTable>
   

       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Ticket No</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.ticket_no}</Text></DataTable.Cell>
      </DataTable.Row>

           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Complaint</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.complaint}</Text></DataTable.Cell>
      </DataTable.Row>  

      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Description</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}> {account.description}       </Text></DataTable.
        Cell>
      </DataTable.Row>   
          <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Stage</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.stage}
        </Text></DataTable.Cell>
      </DataTable.Row> 
               <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Status</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.status}</Text></DataTable.Cell>
      </DataTable.Row>  

       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}> Solutiton</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>
        {account.solution}
        </Text></DataTable.Cell>
      </DataTable.Row> 

             <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}> Complaint By</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>
    {customerlist.find(x => x.id === account.complaint_by)?handlerlist.find(x => x.id === account.complaint_by).first_name:" .."}

        
        </Text></DataTable.Cell>
   </DataTable.Row>

                   <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Service</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>
        {servicelist.find(x => x.id === account.complaint_related_to)?servicelist.find(x => x.id === account.complaint_related_to).name:" .."}
        </Text></DataTable.Cell>
      </DataTable.Row> 


                   <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Handler</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>
               {handlerlist.find(x => x.id === account.complaint_handler)?handlerlist.find(x => x.id === account.complaint_handler).email:" .."}

        </Text></DataTable.Cell>
      </DataTable.Row> 


                   <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Created on</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>
        {account.created_on }
        </Text></DataTable.Cell>
      </DataTable.Row> 


  </DataTable>
   </Card>
   
    
      <Button  mode="contained" 
      color="tomato"
      style={{marginTop:20,padding:10,marginBottom:10}}
      onPress={() => DeleteAccount()}>
    Delete
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

export default Ticketcard;
