import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';

import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import { Container, Header, Content, Thumbnail ,NativeBaseProvider } from 'native-base';
import Ionicons from 'react-native-vector-icons'
import {Avatar,Title,Caption,Paragraph,Drawer,Text} from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';

//screens
import Profile from './Profile'
import Hr from './Hr'

import Axios from 'axios'
import {AuthContext} from './context'

const DrawerContent=(props)=>{

      const { signOut } = React.useContext(AuthContext);

  const [profile,setProfile]=React.useState([])
  const [positionlist,setPositionlist]=React.useState([])

  React.useEffect(() => {


   async function getAccount(id) {
    
    

      await  Axios.get(`http://196.29.238.98/auth/registerApi/${id}`)
            .then((res)=>{
              setProfile(res.data)
              console.log(res.data)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }


  async function retrieveData(){ 
 try {  
  const token = await AsyncStorage.getItem('token'); 
  const id = await AsyncStorage.getItem('id'); 
  getAccount(id)
     if (token !== null) {    
       // We have data!!      console.log(value);  
         }  } 
         catch (error) { 
   // Error retrieving data
     }}




       async function getPositionlist() {

      await  Axios.get('http://196.29.238.98/auth/positionApi')
            .then((res)=>{setPositionlist(res.data)
              console.log(positionlist)
            })  
            .catch((err) =>{ 
        console.log(err)});}

            getPositionlist()
     
   
    retrieveData()
  },[0]);


    const uri ='https://facebook.github.io/react-native/docs/assets/favicon.png';

  return(
    <View style={{flex:1}}>
    <DrawerContentScrollView {...props}>
   <View style={styles.drawerContent} >
   <View style={styles.userInfoSection}>
   <View style={{padding:10,flexDirection:'row'}}> 
   <Avatar.Image
   source={{uri:"https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"}}
   size={50}
   style={{marginTop:10}}
    />
    <View >
    <Text style={{marginTop:15,marginLeft:10,fontWeight:'bold',fontSize:20}}>{profile.firstname}</Text>
    <Text style={{marginTop:0,marginLeft:10,fontWeight:'bold',fontSize:13,color:'grey'}}> {positionlist.find(x => x.id === profile.position)?positionlist.find(x => x.id === profile.position).position:" .."}</Text>
   </View>
   </View>
   </View>
  <Drawer.Section style={{marginBottom:15,borderTopColot:'#f4f4f4',borderTopWidth:1}}>
     
     <DrawerItem 
     
      label="Account"
      onPress={()=>props.navigation.navigate("Account")}
      />   
     <DrawerItem 
     
      label="Company"
      onPress={()=>props.navigation.navigate("Company")}
      />  
         <DrawerItem 
     
      label="Contact Person"
      onPress={()=>props.navigation.navigate("Contactperson")}
      />

       <DrawerItem 
      
      label="Position"
      onPress={()=>props.navigation.navigate("Position")}
      />  
       <DrawerItem 
      
      label="Department"
      onPress={()=>props.navigation.navigate("Department")}
      />  
       <DrawerItem 
      
      label="Business"
      onPress={()=>props.navigation.navigate("Business")}
      /> 
        <DrawerItem 
      
      label="Customer"
      onPress={()=>props.navigation.navigate("Customer")}
      />  
       <DrawerItem 
      
      label="Ticket"
      onPress={()=>props.navigation.navigate("Ticket")}
      /> 
        <DrawerItem 
      
      label="Service"
      onPress={()=>props.navigation.navigate("Service")}
      /> 
         
      </Drawer.Section>
   </View>
      </DrawerContentScrollView>

      <Drawer.Section style={{marginBottom:15,borderTopColot:'#f4f4f4',borderTopWidth:1}}>
      <DrawerItem 
      onPress={()=>signOut()}
      
      label="Sign Out"
      />

      </Drawer.Section>
      </View>
    )
}
const styles=StyleSheet.create({
  drawerContent:{flex:1,},
  userInfoSection:{
    paddingLeft:20,
  },
  title:{
    fontSize:16,
    marginTop:3,
    fontWeight:'bold'
  },
  caption:{
    fontSize:14,
    lineHeight:14,
  },
  row:{
    marginTop:20,
    flexDirection:'row',
    alignItems:'center'
  },
  section:{
    flexDirection:'row',
    alignItems:'center',
    marginRight:3
  },
  paragraph:{
    fontWeight:'bold',
    marginRight:3,
  },
  drawerSection:{
    marginTop:15
  },
  bottomDrawerSection:{
    marginBottom:15,
    borderTopColor:'#f4f4f4',
    borderWidth:1
  },
  preference:{

  }

})
export default DrawerContent;