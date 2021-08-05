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
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Axios from 'axios'

import {Avatar,Title,Caption,Paragraph,Drawer,Text,DataTable,ActivityIndicator,Colors} from 'react-native-paper'
import { FAB } from 'react-native-paper';




const Invoice = ({navigation}) => {
  const[isloading,setIsloading]=React.useState(true)

  const[invoice,setInvoice]=React.useState([])
  const[company,setCompany]=React.useState([])
  // const[vv,setVv]=React.useState([])
  // var comp=[]

   React.useEffect(() => {


     async function getCompany() {
  

      await  Axios.get('http://196.29.238.98/auth/companyApi')
            .then((res)=>{
              var comp=[]
                  res.data.map((item)=>{comp.push(item.company_Name)})
              setCompany(comp)
            })  
            .catch((err) =>{ 
        console.log(err)});}

    async function getData() {
  

      await  Axios.get('http://196.29.238.98/finance/invoiceApi/')
            .then((res)=>{setInvoice(res.data)
                 setIsloading(false)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
    

    getCompany();
    getData();
  }, [0]);



  return (
         <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   : (
 <View style={{flex:1}}>
   <FlatList 
   data={invoice}
  renderItem={({item})=>{return(
    <TouchableOpacity onPress={()=>navigation.navigate("Invoicecard",{id:item.id})}>
    <View style={styles.listBox}>
         <View style={{padding:10,flexDirection:'row'}}> 
   <DataTable>
    
      <DataTable.Row>
        <DataTable.Cell>Invoice No.</DataTable.Cell>
        <DataTable.Cell numeric>{item.Invoice_number}</DataTable.Cell>
      </DataTable.Row> 
      <DataTable.Row> 
            <DataTable.Cell>Client Company </DataTable.Cell>
        <DataTable.Cell numeric>{company[item.client_company-1]}</DataTable.Cell>
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
    onPress={() => navigation.navigate('Addinvoice')}
  />
   </View>
   )}
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

export default Invoice;
