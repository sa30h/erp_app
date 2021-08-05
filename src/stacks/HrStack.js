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

const HrStacks=createStackNavigator()

import Hr from '../screens/Hr'
import Invoice from '../screens/Invoice'
import Po from '../screens/Po'
import Salarypackage from '../screens/Salarypackage'
import Monthlypackage from '../screens/Monthlypackage'
import Company from '../screens/Company'
import Invoicecard from '../components/Invoicecard'


const HrStack = ({navigation}) => {


  return (
<HrStacks.Navigator>
        <HrStacks.Screen name="Hr" component={Hr} 

        options={{
          title:'HR',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
             <HrStacks.Screen name="Invoice" component={Invoice} 

        options={{
          title:'Invoices',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
         <HrStacks.Screen name="Invoicecard" component={Invoicecard} 

        options={{
          title:'Invoice',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
             <HrStacks.Screen name="Po" component={Po} 

        options={{
          title:'Purchase Orders',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
                  <HrStacks.Screen name="Salarypackage" component={Salarypackage} 

        options={{
          title:'Salary package',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
                  <HrStacks.Screen name="Monthlypackage" component={Monthlypackage} 

        options={{
          title:'Monthly package',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        /> 
       
      </HrStacks.Navigator>
  );
};

const styles = StyleSheet.create({

});

export default HrStack;
