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
  Button,
  FlatList
} from 'react-native';

import Axios from 'axios'

import {Avatar,Title,Caption,Paragraph,Drawer,Text,ActivityIndicator,Colors} from 'react-native-paper'
import { COLORS, FONTS, SIZES} from "../../constants";
import { FAB } from 'react-native-paper';


const Department = ({navigation}) => {
  const [department,setDepartment]=React.useState([])
    const[isloading,setIsloading]=React.useState(true)



 React.useEffect(() => {
    async function getAccount() {
  

      await  Axios.get('http://196.29.238.98/auth/departmentApi')
            .then((res)=>{setDepartment(res.data)
                setIsloading(false)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }
    getAccount();
  }, [0]);


  return (
    <>
    {isloading?(<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
      :(
         <View style={{flex:1}}>
   <FlatList 
   data={department}
  renderItem={({item})=>{return(
    <View style={styles.listBox}>
         <View style={{padding:10,flexDirection:'row'}}> 
  
    <View >
    <Text style={{marginTop:15,marginLeft:10,fontWeight:'bold',fontSize:20}}>{item.department_name}</Text>
   
   </View>
    </View>
    </View>
    )}}
    />
      <FAB
    style={styles.fab}
    small={false}
    icon="plus"
    color="#ffffff"
    onPress={() => navigation.navigate('Adddepartment')}
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

export default Department;
