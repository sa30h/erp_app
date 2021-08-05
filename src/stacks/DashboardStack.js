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


const DashStack=createStackNavigator()

import Dashboard from '../screens/Dashboard'
import Account from '../screens/Account'
import Addaccount from '../screens/Addaccount'
import Accountcard from '../components/Accountcard'
import Login from '../screens/Login'
import Profile from '../screens/Profile'
import Position from '../screens/Position'
import Addposition from '../screens/Addposition'
import Department from '../screens/Department'
import Adddepartment from '../screens/Adddepartment'
import Customer from '../screens/Customer'
import Addcustomer from '../screens/Addcustomer'
import Customercard from '../components/Customercard'
import Ticket from '../screens/Ticket'
import Addticket from '../screens/Addticket'
import Ticketcard from '../components/Ticketcard'
import Business from '../screens/Business'
import Addbusiness from '../screens/Addbusiness'
import Service from '../screens/Service'
import Addservice from '../screens/Addservice'
import Company from '../screens/Company'
import Companycard from '../components/Companycard'
import Contactperson from '../screens/Contactperson'
import Addcontactperson from '../screens/Addcontactperson'
import Contactpersoncard from '../components/Contactpersoncard'


const DashboardStack = ({navigation}) => {


  return (
<DashStack.Navigator >
        <DashStack.Screen name="Dashboard" component={Dashboard} 
        options={{
          title:'Dashboard',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.openDrawer()}} />
          )

        }}/>  
              <DashStack.Screen name="Account" component={Account} 
         options={{
          title:'Account',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
         <DashStack.Screen name="Addaccount" component={Addaccount} 
         options={{
          title:'Addaccount',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />  
           <DashStack.Screen name="Accountcard" component={Accountcard} 
         options={{
          title:'Account Card',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
           <DashStack.Screen name="Position" component={Position} 
         options={{
          title:'Position',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.openDrawer()}} />
          )

        }}
        />
                 <DashStack.Screen name="Addposition" component={Addposition} 
         options={{
          title:'Add Position',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
           <DashStack.Screen name="Department" component={Department} 
         options={{
          title:'Department',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.openDrawer()}} />
          )

        }}
        />
               <DashStack.Screen name="Adddepartment" component={Adddepartment} 
         options={{
          title:'Add Department',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
           <DashStack.Screen name="Business" component={Business} 
         options={{
          title:'Business',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        /> 
         <DashStack.Screen name="Addbusiness" component={Addbusiness} 
         options={{
          title:'Add Business',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
           <DashStack.Screen name="Customer" component={Customer} 
         options={{
          title:'Customer',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.openDrawer()}} />
          )

        }}
        />  
             <DashStack.Screen name="Addcustomer" component={Addcustomer} 
         options={{
          title:'Add Customer',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
        <DashStack.Screen name="Customercard" component={Customercard} 
         options={{
          title:'Customer Card',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
           <DashStack.Screen name="Ticket" component={Ticket} 
         options={{
          title:'Ticket',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.openDrawer()}} />
          )

        }}
        /> 
                  <DashStack.Screen name="Addticket" component={Addticket} 
         options={{
          title:'Add Ticket',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />

                       <DashStack.Screen name="Ticketcard" component={Ticketcard} 
         options={{
          title:'Ticket Card',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
             <DashStack.Screen name="Service" component={Service} 
         options={{
          title:'Service',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.openDrawer()}} />
          )

        }}
        />
         <DashStack.Screen name="Addservice" component={Addservice} 
         options={{
          title:'Add Service',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />   
             <DashStack.Screen name="Company" component={Company} 
         options={{
          title:'Company',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
                  <DashStack.Screen name="Companycard" component={Companycard} 
         options={{
          title:'Company Card',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />

                 <DashStack.Screen name="Contactperson" component={Contactperson} 
         options={{
          title:'Contact Person ',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />  
    <DashStack.Screen name="Contactpersoncard" component={Contactpersoncard} 
         options={{
          title:'Contact Person ',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />  
          <DashStack.Screen name="Addcontactperson" component={Addcontactperson} 
         options={{
          title:'Add Contact Person ',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.goBack()}} />
          )

        }}
        />
          <DashStack.Screen name="Login" component={Login} 
         options={{
          title:'Login',
          headerLeft:()=>(
            <Ionicons name="ios-reorder-three" size={40} onPress={()=>{navigation.openDrawer()}} />
          ),
               headerRight:()=>(
            <Ionicons name="arrow-back" size={40} style={{marginRight: 10}}onPress={()=>{navigation.openDrawer()}} />
          )

        }}
        />
             
      </DashStack.Navigator>
  );
};

const styles = StyleSheet.create({

});

export default DashboardStack;
