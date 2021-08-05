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

  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Stacks
import DashboardStack from '../stacks/DashboardStack';
import PmStack from '../stacks/PmStack';
import HrStack from '../stacks/HrStack';
import ProfileStack from '../stacks/ProfileStack';


const Tab = createBottomTabNavigator();


const Tabbar = ({navigation}) => {


  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'DashboardStack') {
              iconName = focused
                ? 'md-easel'
                : 'md-easel-outline';
            } else if (route.name === 'PmStack') {
              iconName = focused ? 'briefcase' : 'briefcase-outline';
            }
            else if (route.name === 'HrStack') {
              iconName = focused ? 'md-pricetag' : 'md-pricetag-outline';
            }
            else if (route.name === 'ProfileStack') {
              iconName = focused ? 'md-man' : 'md-man-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color}  />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#049477',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="DashboardStack" component={DashboardStack} />
        <Tab.Screen name="PmStack" component={PmStack} />
        <Tab.Screen name="HrStack" component={HrStack} />
        <Tab.Screen name="ProfileStack" component={ProfileStack} />
      </Tab.Navigator>
  );
};

const styles = StyleSheet.create({

});

export default Tabbar;
