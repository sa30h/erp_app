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

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ProfileStacks=createStackNavigator()

import Profile from '../screens/Profile'
import Account from '../screens/Account'
import Position from '../screens/Position'
import Department from '../screens/Department'
import Customer from '../screens/Customer'
import Ticket from '../screens/Ticket'
import Business from '../screens/Business'
import Service from '../screens/Service'


const ProfileStack = ({navigation}) => {


  return (
<ProfileStacks.Navigator>
        <ProfileStacks.Screen name="Profile" component={Profile} 
         options={{
          title:'Profile',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.openDrawer()}} />
          )

        }}
        />
     
      </ProfileStacks.Navigator>
  );
};

const styles = StyleSheet.create({

});

export default ProfileStack;
