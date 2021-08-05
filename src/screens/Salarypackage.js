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




const Salarypackage = ({navigation}) => {

  const[salarypackage,setSalarypackage]=React.useState([])
  const[firstname,setFirstname]=React.useState([])
  const[email,setEmail]=React.useState([])
    const[isloading,setIsloading]=React.useState(true)

  // var comp=[]

   React.useEffect(() => {
    async function getSalarypackage() {
  

      await  Axios.get('http://196.29.238.98/payroll/employeeApi/')
            .then((res)=>{setSalarypackage(res.data)
              setIsloading(false)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }

     async function getAccount() {
  

      await  Axios.get('http://196.29.238.98/auth/registerApi')
            .then((res)=>{
              var name=[]
              var emaill=[]


                  res.data.map((item)=>{name.push(item.firstname)})
                  res.data.map((item)=>{emaill.push(item.email)})
              setEmail(emaill)
              setFirstname(name)
            })  
            .catch((err) =>{ 
        console.log(err)});}

    getAccount();
    getSalarypackage();
  }, [0]);



  return (
     <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   :(
     <View style={{flex:1}}>
   <FlatList 
   data={salarypackage}
  renderItem={({item})=>{return(
    <View style={styles.listBox}>
         <View style={{padding:10,flexDirection:'row'}}> 
   <DataTable>
    
      <DataTable.Row>
        <DataTable.Cell>Employee </DataTable.Cell>
        <DataTable.Cell numeric>{firstname[item.employee-1]}</DataTable.Cell>
      </DataTable.Row>  
       <DataTable.Row>
        <DataTable.Cell>Email </DataTable.Cell>
        <DataTable.Cell numeric>{email[item.employee-1]}</DataTable.Cell>
      </DataTable.Row>  
          <DataTable.Row>
        <DataTable.Cell>Salary </DataTable.Cell>
        <DataTable.Cell numeric>{item.salary}</DataTable.Cell>
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

export default Salarypackage;
