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




const Hr = ({navigation}) => {


  return (
  
<View>
<ScrollView>
    <List.Section style={{marginHorizontal: 10,backgroundColor:"#FFFFFF",borderRadius:10}}> 
    <List.Subheader style={{fontSize: 20,color:"#223752",fontWeight:'bold'}}>Finance</List.Subheader>
    <TouchableOpacity onPress={()=>navigation.navigate('Invoice')}>
    <List.Item title="Invoices" left={() => <List.Icon icon="eye" />} titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}}/>
    </TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigation.navigate('Po')}>
    <List.Item title="Purchase Orders" left={() => <List.Icon icon="eye" />}titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}} />
    </TouchableOpacity>
  </List.Section>

  <List.Section style={{marginHorizontal: 10,backgroundColor:"#FFFFFF",borderRadius: 10}}> 
    <List.Subheader style={{fontSize: 20,color:"#223752",fontWeight:'bold'}}>Payroll</List.Subheader>
    <TouchableOpacity  onPress={()=>navigation.navigate('Salarypackage')}>
    <List.Item title="Salary Packages" left={() => <List.Icon icon="eye" />}titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}} />
    </TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigation.navigate('Monthlypackage')}>
    <List.Item title="Monthly Salary" left={() => <List.Icon icon="eye" />} titleStyle={{fontWeight:'bold',fontSize:18,color:'#223752'}}/>
    </TouchableOpacity>
     
  </List.Section>
  </ScrollView>
  </View>
  );
};

const styles = StyleSheet.create({

});

export default Hr;
