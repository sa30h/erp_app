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
import Ionicons from 'react-native-vector-icons/Ionicons';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const PmStacks=createStackNavigator()

import Pm from '../screens/Pm'
import Createproject from '../screens/PM/Createproject.js'
import Totalproject from '../screens/PM/Totalproject.js'
import Completeproject from '../screens/PM/Completeproject.js'
import Inprogressproject from '../screens/PM/Inprogressproject.js'
import Projectcard from '../components/Projectcard'
import Createteam from '../screens/PM/Createteam.js'
import Viewteam from '../screens/PM/Viewteam.js'
import Addmember from '../screens/PM/Addmember.js'
import Allmember from '../screens/PM/Allmember.js'
import Addtask from '../screens/PM/Addtask.js'
import Taskput from '../screens/Taskput.js'
import Viewtask from '../screens/PM/Viewtask.js'
import Updateprogress from '../screens/PM/Updateprogress.js'


const PmStack = ({navigation}) => {


  return (
<PmStacks.Navigator>
        <PmStacks.Screen name="Pm" component={Pm}
         options={{
          title:'PM',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />   
             <PmStacks.Screen name="Createproject" component={Createproject}
         options={{
          title:'Create Project',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />
                <PmStacks.Screen name="Totalproject" component={Totalproject}
         options={{
          title:'All Project',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />
                <PmStacks.Screen name="Completeproject" component={Completeproject}
         options={{
          title:'Complete Projects',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />
                <PmStacks.Screen name="Inprogressproject" component={Inprogressproject}
         options={{
          title:'Inprogress Project',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />    
                <PmStacks.Screen name="Projectcard" component={Projectcard}
         options={{
          title:'Project Card',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />    

                <PmStacks.Screen name="Createteam" component={Createteam}
         options={{
          title:'Create team',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />


                <PmStacks.Screen name="Viewteam" component={Viewteam}
         options={{
          title:'Team',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />
                <PmStacks.Screen name="Addmember" component={Addmember}
         options={{
          title:'Add Member',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />
                <PmStacks.Screen name="Allmember" component={Allmember}
         options={{
          title:'All Member',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />
                <PmStacks.Screen name="Addtask" component={Addtask}
         options={{
          title:'Add Task',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />
           <PmStacks.Screen name="Taskput" component={Taskput}
         options={{
          title:'Update ',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />
                <PmStacks.Screen name="Viewtask" component={Viewtask}
         options={{
          title:'View Task',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />
                <PmStacks.Screen name="Updateprogress" component={Updateprogress}
         options={{
          title:'Update Progress',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
         />
     
      </PmStacks.Navigator>
  );
};

const styles = StyleSheet.create({

});

export default PmStack;
