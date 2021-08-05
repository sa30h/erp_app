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




const Inprogressproject = ({navigation}) => {

const [project,setProject]=React.useState([])
const [inprogress,setInprogress]=React.useState([])
  const[isloading,setIsloading]=React.useState(true)



 React.useEffect(() => {
    async function getProject() {
  

      await  Axios.get('http://196.29.238.98/api/pm/projectAPI/')
            .then((res)=>{setProject(res.data)
              setInprogress(res.data.filter(function (item) {
                   return item.project_complete_or_Inprogress == "inprogress";}))
            setIsloading(false)
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong",err)});
    }
    getProject();
  },[0]);

  return (
         <>
   {isloading ? (<ActivityIndicator animating={true} color={Colors.red800} style={{marginTop:'30%'}} size='large'/>)
   : (

     <View style={{flex:1}}>
   <FlatList 
   data={inprogress}
   keyExtractor={(item, index) => index.toString()}
  renderItem={({item})=>{return(
    <TouchableOpacity onPress={()=>navigation.navigate('Projectcard',{id:item.id})}>
        <View style={styles.listBox}>
         <View style={{padding:10,flexDirection:'row'}}> 
   <DataTable>
    
      <DataTable.Row>
        <DataTable.Cell><Text style={{fontWeight:'bold',fontSize:20}}>{item.project_name}</Text></DataTable.Cell>
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
    onPress={() => navigation.navigate('Addticket')}
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


export default Inprogressproject;
