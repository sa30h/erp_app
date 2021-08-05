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

import {Avatar,Title,Caption,Paragraph,Drawer,Text,ActivityIndicator,Colors} from 'react-native-paper'
import { COLORS, FONTS, SIZES} from "../../constants";
import { FAB } from 'react-native-paper';



const Account = ({navigation}) => {
  const [account,setAccount]=React.useState([])
  const[isloading,setIsloading]=React.useState(true)



 React.useEffect(() => {
    async function getAccount() {
  

      await  Axios.get('http://196.29.238.98/auth/registerApi')
            .then((res)=>{setAccount(res.data)
                            setIsloading(false)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
    getAccount();
  },[0]);


  return (
    <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   : 
   (<View style={{flex:1}}>
   <FlatList 

   data={account}
      keyExtractor={(item, index) => index.toString()}
  renderItem={({item})=>{return(
    <TouchableOpacity onPress={()=>navigation.navigate('Accountcard',{id:item.id})}>
    <View style={styles.listBox}>
         <View style={{padding:10,flexDirection:'row'}}> 
   <Avatar.Image
   source={{uri:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"}}
   size={50}
   style={{marginTop:10}}
    />
    <View >
    <Text style={{marginTop:15,marginLeft:10,fontWeight:'bold',fontSize:20}}>{item.firstname}</Text>
    <Text style={{marginTop:0,marginLeft:10,fontWeight:'bold',fontSize:13,color:'#898C95'}}>{item.email}</Text>
    <Text style={{marginTop:0,marginLeft:10,fontWeight:'bold',fontSize:13,color:'#898C95'}}>{item.position}</Text>
    <Text style={{marginTop:0,marginLeft:10,fontWeight:'bold',fontSize:13,color:'#898C95'}}>{item.department}</Text>
   </View>
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
    onPress={() => navigation.navigate('Addaccount')}
  />  

   </View>)}
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
