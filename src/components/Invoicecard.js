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


const Invoicecard = ({navigation,route}) => {
  const [invoice,setInvoice]=React.useState([])
  const [companylist,setCompanylist]=React.useState([])
  const [accountlist,setAccountlist]=React.useState([])
  const [servicelist,setServicelist]=React.useState([])
      const[isloading,setIsloading]=React.useState(true)

  const [businesslist,setBusinesslist]=React.useState([])

  const {id}=route.params
 React.useEffect(() => {

 async function getInvoice() {
  

      await  Axios.get(`http://196.29.238.98/finance/invoice/${id}`)
            .then((res)=>{setInvoice(res.data)
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

 async function getService() {
    await  Axios.get('http://196.29.238.98/service/serviceApi')
            .then((res)=>setServicelist(res.data))
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
    getInvoice()
    getCompany();
    getAccount();
    getService()
  },[0]);


function DeleteInvoice(){

       
  Axios.delete(`http://196.29.238.98/finance/invoiceApi/${id}`,)
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
     
        
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}> Invoice no. </Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{invoice.Invoice_number}</Text></DataTable.Cell>
      </DataTable.Row> 

       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Description</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{invoice.Description}</Text></DataTable.Cell>
      </DataTable.Row>

             <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Invoice Date</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{Invoice.Invoice.date}</Text></DataTable.Cell>
      
          </DataTable.Row> 

           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Payment type</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{invoice.payment_terms}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
         
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Rate</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{invoice.rate}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Quantity</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{invoice.Qty}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Tax</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{invoice.tax}</Text></DataTable.Cell>
      
          </DataTable.Row>   
          <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Total</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{invoice.Total}</Text></DataTable.Cell>
      
          </DataTable.Row>  
          
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}> Client</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{companylist.find(x=>x.id==invoice.client_company)?companylist.find(x=>x.id==invoice.client_company).company_Name:"..."}</Text></DataTable.Cell>
      </DataTable.Row> 
      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}> Service</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{servicelist.find(x=>x.id==invoice.service)?servicelist.find(x=>x.id==invoice.service).service_name:"..."}</Text></DataTable.Cell>
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

export default Invoicecard;
