
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
  Alert
} from 'react-native';

import { TextInput,Button ,RadioButton, Menu, Divider, Provider } from 'react-native-paper';

import Axios from 'axios'






   
const Addticket = ({navigation}) => {

const [complaint,setComlaint]=React.useState()
const [description,setDescription]=React.useState()
const [stage,setStage]=React.useState()
const [status,setStatus]=React.useState()
const [solution,setSolution]=React.useState()
const [complaint_related_to,setComplaint_related_to]=React.useState()
const [complaint_by,setComplaint_by]=React.useState()
const [complaint_handler,setComplaint_handler]=React.useState()


const [servicelist,setServicelist]=React.useState([])
const [customerlist,setCustomerlist]=React.useState([])
const [handlerlist,setHandlerlist]=React.useState([])

  React.useState(()=>{

   async function getService() {
      await  Axios.get('http://196.29.238.98/service/serviceApi')
            .then((res)=>{setServicelist(res.data)
              console.log(companylist)
            })  
            .catch((err) =>{ 
        console.log(err)});}

         async function getCustomer() {
      await  Axios.get('http://196.29.238.98/auth/customerApi')
            .then((res)=>{setCustomerlist(res.data)
            })  
            .catch((err) =>{ 
        console.log(err)});}

           async function getHandler() {
      await  Axios.get('http://196.29.238.98/auth/registerApi')
            .then((res)=>{setHandlerlist(res.data)
            })  
            .catch((err) =>{ 
        console.log(err)});}

    
            getService()
            getCustomer()
            getHandler()

},[0])


        // "ticket_no": "compservInternet",

function Createticket(){

        const bodyParameters = {
                
        "complaint": complaint,
        "description":description,
        "stage": stage,
        "status": status,
        "solution": solution,
        "complaint_related_to": complaint_related_to,
        "complaint_by": 5,
        "complaint_handler": complaint_related_to
        
        };
        console.log(bodyParameters)
  Axios.post('http://196.29.238.98/service/complaintApi/',bodyParameters)
        .then(res=>{console.log("Service Added",res.data)
    Alert.alert("Success", "Added")
      navigation.navigate("Ticket")})
        .catch(err=>{console.log(err)
        Alert.alert("Oops!", "Something went wrong")
      })
}

   
  return (
    <ScrollView>
   <View style={{padding:5}}>

    <TextInput
      label="Complaint About"
      value={complaint}
      onChangeText={text => setComlaint(text)}
     style={{padding:5,margin:5}}
    /> 
    <TextInput
      label="Description "
      value={description}
      onChangeText={text => setDescription(text)}
     style={{padding:5,margin:5}}
    /> 

           <Text style={{fontWeight:'bold',fontSize:20}}>Stage</Text>
    <RadioButton.Group onValueChange={newValue => setStage(newValue)} value={stage}>
   

    <View style={{flexDirection:'row',padding:5}}>
    <View style={{flexDirection:'row',padding:5}}>
        <Text>Initialize</Text>
        <RadioButton value={"initialize"} />
      </View>
          <View style={{flexDirection:'row',padding:5}}>
        <Text>Inprogress</Text>
        <RadioButton value={"inprogress"} />
      </View>
          <View style={{flexDirection:'row',padding:5}}>
        <Text>Solved</Text>
        <RadioButton value={"solved"} />
      </View>
      </View>

     
    </RadioButton.Group>

     <Text style={{fontWeight:'bold',fontSize:20}}>Status</Text>
    <RadioButton.Group onValueChange={newValue => setStatus(newValue)} value={status}>
   

    <View style={{flexDirection:'row',padding:5}}>
    <View style={{flexDirection:'row',padding:5}}>

        <Text>Inprogress</Text>
        <RadioButton value={"inprogress"} />
      </View>
          <View style={{flexDirection:'row',padding:5}}>
        <Text>Solved</Text>
        <RadioButton value={"solved"} />
      </View>
      </View>
        

     
    </RadioButton.Group>


        <TextInput
      label="Solution"
      value={solution}
      onChangeText={text => setSolution(text)}
     style={{padding:5,margin:5}}
    />  
       <Text style={{fontWeight:'bold',fontSize:20}}>Complaint related</Text>
    <RadioButton.Group onValueChange={newValue => setComplaint_related_to(Number(newValue))} value={complaint_related_to}>
    <View style={{flexDirection:'row',padding:5}}>
        <ScrollView horizontal>

     {
  servicelist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}}>
        <Text>{item.name}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}
</ScrollView>
      </View>
     
    </RadioButton.Group>

   

    <Text style={{fontWeight:'bold',fontSize:20}}>Complaint By</Text>
    <RadioButton.Group onValueChange={newValue => setComplaint_by(Number(newValue))} value={complaint_by}>
    <View style={{flexDirection:'row',padding:5}}>
    <ScrollView horizontal>
     {
  customerlist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}}>
        <Text>{item.first_name}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}
    </ScrollView>
      </View>
     
    </RadioButton.Group>


    <Text style={{fontWeight:'bold',fontSize:20}}>Complaint Handler</Text>
    <RadioButton.Group onValueChange={newValue => setComplaint_handler(Number(newValue))} value={complaint_handler}>
    <View style={{flexDirection:'row',padding:5}}>
    <ScrollView horizontal>
     {
  handlerlist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}}>
        <Text>{item.firstname}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}
    </ScrollView>
      </View>
     
    </RadioButton.Group>


     
    
      <Button  mode="contained" 
      color="dodgerblue"
      style={{marginTop:20,padding:10,marginBottom:10}}
      onPress={() => Createticket()}>
    Add Ticket
  </Button>
</View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Addticket;
