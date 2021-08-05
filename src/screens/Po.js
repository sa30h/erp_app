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
  FlatList
} from 'react-native';
import Axios from 'axios'

import {Avatar,Title,Caption,Paragraph,Drawer,Text,DataTable,ActivityIndicator,Colors} from 'react-native-paper'
import { FAB } from 'react-native-paper';




const Po = ({navigation}) => {

  const[invoice,setInvoice]=React.useState([])
  const[vendor,setVendor]=React.useState([])
    const[isloading,setIsloading]=React.useState(true)


   React.useEffect(() => {
    async function getData() {
  

      await  Axios.get('http://196.29.238.98/finance/poApi/')
            .then((res)=>{setInvoice(res.data)
              setIsloading(false)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
     async function getCompany() {
  

      await  Axios.get('http://196.29.238.98/auth/companyApi')
            .then((res)=>{
              var comp=[]
                  res.data.map((item)=>{comp.push(item.company_Name)})
              setVendor(comp)
            })  
            .catch((err) =>{ 
        console.log(err)});}

    getCompany();
    getData();
  }, [0]);



  return (
     <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   :(
     <View style={{flex:1}}>
   <FlatList 
   data={invoice}
  renderItem={({item})=>{return(
    <View style={styles.listBox}>
         <View style={{padding:10,flexDirection:'row'}}> 
   <DataTable>
    
      <DataTable.Row>
        <DataTable.Cell>Purchase Order No.</DataTable.Cell>
        <DataTable.Cell numeric>{item.PO_Number}</DataTable.Cell>
      </DataTable.Row> 
      <DataTable.Row> 
            <DataTable.Cell>Vendor  </DataTable.Cell>
        <DataTable.Cell numeric>{vendor[item.Vendor-1]}</DataTable.Cell>
      </DataTable.Row>
  </DataTable>
    </View>
    </View>
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

export default Po;
