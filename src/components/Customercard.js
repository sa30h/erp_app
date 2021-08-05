
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






   
const Customercard = ({navigation,route}) => {


const [account,setAccount]=React.useState([])
 const[departmentlist,setDepartmentlist]=React.useState([])
  const[positionlist,setPositionlist]=React.useState([])
      const[isloading,setIsloading]=React.useState(true)

 
     const {id}=route.params
console.log(id)
 React.useEffect(() => {
    async function getAccount() {

  

      await  Axios.get(`http://196.29.238.98/auth/customerApi/${id}`)
            .then((res)=>{setAccount(res.data)
                            setIsloading(false)})
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong",err)});
    }

     // async function getDepartment() {
     //  await  Axios.get('http://196.29.238.98/auth/departmentApi')
     //        .then((res)=>{setDepartmentlist(res.data)
     //          console.log(res.data)
     //        })  
     //        .catch((err) =>{ 
     //    console.log(err)});}

     //   async function getPositionlist() {

     //  await  Axios.get('http://196.29.238.98/auth/positionApi')
     //        .then((res)=>{setPositionlist(res.data)
     //          console.log(positionlist)
     //        })  
     //        .catch((err) =>{ 
     //    console.log(err)});}

     //        getPositionlist()
     //        getDepartment()
    getAccount();
  }, [0]);



        // "ticket_no": "compservInternet",

function DeleteAccount(){

       
  Axios.delete(`http://196.29.238.98/auth/customerApi/${id}`,)
        .then(res=>console.log("Deleted",res.data))
        .catch(err=>{console.log(err)})
}

   
  return (
      <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   : (

     <ScrollView>
   <View style={{padding:5}}>
      <Avatar.Text size={100} label={account.firstname} style={{width: '40%',borderRadius:50,marginHorizontal:'30%',marginVertical:10}} / >
   <Card style={{margin:5}}>

<DataTable>
 
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Customer Id</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.customer_id}</Text></DataTable.Cell>
      </DataTable.Row>  
         <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>firstname</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.first_name}</Text></DataTable.Cell>
      </DataTable.Row>

           <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Lastname</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.last_name}</Text></DataTable.Cell>
      </DataTable.Row>  

      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Emil</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}> {account.email_id} </Text></DataTable.Cell>
      </DataTable.Row>   
          <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Contact</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.contact}</Text></DataTable.Cell>
      </DataTable.Row> 
               <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Adress</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.address_1}</Text></DataTable.Cell>
      </DataTable.Row>  
                   <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>City</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.city}</Text></DataTable.Cell>
      </DataTable.Row> 
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>State</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}>{account.state}
        </Text></DataTable.Cell>
      </DataTable.Row> 
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Country</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}> { account.country}
        </Text></DataTable.Cell>
      </DataTable.Row> 
       <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>Zip code</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17}}> { account.zip_code}
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

export default Customercard;
