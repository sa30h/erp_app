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


const Contactpersoncard = ({navigation,route}) => {
  const [contactperson,setContactperson]=React.useState([])
  const [company,setCompany]=React.useState([])
    const[isloading,setIsloading]=React.useState(true)


  const {id}=route.params
 React.useEffect(() => {
    async function getContactperson() {
  

      await  Axios.get(`http://196.29.238.98/auth/contactpersonApi/${id}`)
            .then((res)=>{setContactperson(res.data)
            setIsloading(false)})
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }

      async function getCompany() {
  

      await  Axios.get('http://196.29.238.98/auth/companyApi')
            .then((res)=>setCompany(res.data))
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
    getCompany();
    getContactperson();
  },[0]);


function Deletecontactperson(){

       
  Axios.delete(`http://196.29.238.98/auth/contactpersonApi/${id}`,)
        .then(res=>console.log("Deleted",res.data))
        .catch(err=>{console.log(err)})
}



  return (
         <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   : 
   (
    <View style={{flex:1}}>
   <View style={styles.listBox} >
         <View style={{padding:10,flexDirection:'row'}}> 
   <DataTable>
    
      <DataTable.Row>
     
        
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}> Name</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{contactperson.contact_name}</Text></DataTable.Cell>
      </DataTable.Row> 

       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Position</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{contactperson.position}</Text></DataTable.Cell>
      </DataTable.Row>

           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Phone No</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{contactperson.telephoneNo}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Email</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{contactperson.email}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Wattsapp</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{contactperson.wattsapp}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Skype</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{contactperson.skype}</Text></DataTable.Cell>
      </DataTable.Row>  
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Company</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{company.find(x=>x.id==contactperson.company_name)?company.find(x=>x.id==contactperson.company_name).company_Name:"..."}</Text></DataTable.Cell>
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

export default Contactpersoncard;
