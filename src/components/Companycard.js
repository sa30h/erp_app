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


const Companycard = ({navigation,route}) => {
  const [company,setCompany]=React.useState([])
    const[isloading,setIsloading]=React.useState(true)


  const {id}=route.params
 React.useEffect(() => {
    async function getCompany() {
  

      await  Axios.get(`http://196.29.238.98/auth/companyApi/${id}`)
            .then((res)=>{setCompany(res.data)
            setIsloading(false)})
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
    getCompany();
  },[0]);


  return (
         <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   : (
     <View style={{flex:1}}>
   <View style={styles.listBox} >
         <View style={{padding:10,flexDirection:'row'}}> 
   <DataTable>
    
      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Company Name</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{company.company_Name}</Text></DataTable.Cell>
      </DataTable.Row> 

       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Address</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{company.company_Address}</Text></DataTable.Cell>
      </DataTable.Row>

           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Street</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{company.street}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>City</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{company.city}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Country</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{company.country}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Zip Code</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{company.zip_code}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Phone No.</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{company.company_Phone}</Text></DataTable.Cell>
      </DataTable.Row> 
           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Email</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{company.company_EmailId}</Text></DataTable.Cell>
      </DataTable.Row>  
             <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Website</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{company.company_website}</Text></DataTable.Cell>
      </DataTable.Row> 
                 <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Business</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{company.business}</Text></DataTable.Cell>
      </DataTable.Row> 
  </DataTable>
    </View>
    </View>
 

    
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

export default Companycard;
