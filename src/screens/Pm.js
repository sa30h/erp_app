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
  TouchableOpacity
} from 'react-native';

import { Card ,Title,Paragraph,Avatar,IconButton,List} from 'react-native-paper';





const Pm = ({navigation}) => {


  return (
<View>
<ScrollView>
    <List.Section style={{marginHorizontal: 10,backgroundColor:"#FFFFFF",borderRadius:10}}> 
    <List.Subheader style={{fontSize: 20,color:"#223752",fontWeight:'bold'}}>Projects</List.Subheader>
    <TouchableOpacity onPress={()=>navigation.navigate("Createproject")}>
    <List.Item title="Create Project" left={() => <List.Icon icon="plus" />} titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}}/>
    </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Totalproject")}>
    <List.Item title="Total Projects" left={() => <List.Icon icon="eye" />} titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}}/>
    </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Completeproject")}>
    <List.Item title="Completed Projects" left={() => <List.Icon icon="eye" />} titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}}/>
    </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Inprogressproject")}>
    <List.Item title="Inprogress Projects" left={() => <List.Icon icon="eye" />}titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}} />
    </TouchableOpacity>


  </List.Section>
  <List.Section style={{marginHorizontal: 10,backgroundColor:"#FFFFFF",borderRadius: 10}}> 
    <List.Subheader style={{fontSize: 20,color:"#223752",fontWeight:'bold'}}>Team</List.Subheader>
    <TouchableOpacity onPress={()=>navigation.navigate("Createteam")}>
    <List.Item title="Create Team" left={() => <List.Icon icon="plus" />}titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}} />
    </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Viewteam")}>
    <List.Item title="View Team" left={() => <List.Icon icon="eye" />}titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}} />
    </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate("Addmember")}>
    <List.Item title="Add Member" left={() => <List.Icon icon="plus" />}titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}} />
    </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Allmember")}>
    <List.Item title=" Team Members" left={() => <List.Icon icon="eye" />} titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}}/>
    </TouchableOpacity>


  </List.Section>
    <List.Section style={{marginHorizontal: 10,backgroundColor:"#FFFFFF",borderRadius: 10}}> 
    <List.Subheader style={{fontSize: 20,color:"#223752",fontWeight:'bold'}}>Task</List.Subheader>
    <TouchableOpacity onPress={()=>navigation.navigate("Addtask")}>
    <List.Item title="Allocate Task" left={() => <List.Icon icon="plus" />} titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}}/>
    </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("Viewtask")}>
    <List.Item title="View Task" left={() => <List.Icon icon="eye" />} titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}}/>
    </TouchableOpacity>
            <TouchableOpacity style={{}} onPress={()=>navigation.navigate("Updateprogress")}>
    <List.Item title="Update Task Progress" left={() => <List.Icon icon="pen" />} titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}}/>
    </TouchableOpacity>



  </List.Section>

  </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({

});

export default Pm;
