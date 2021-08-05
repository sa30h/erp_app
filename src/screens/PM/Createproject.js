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
import DatePicker from 'react-native-datepicker'







   
const Createproject = ({navigation})=> {



  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const[accountlist,setAccountlist]=React.useState([])
  const[companylist,setCompanylist]=React.useState([])
  const[businesslist,setBusinesslist]=React.useState([])

React.useState(()=>{
  async function getAccount() {
  

      await  Axios.get(`http://196.29.238.98/auth/registerApi/`)
            .then((res)=>{setAccountlist(res.data)
              
            })
            .catch((err) =>{ 
            // navigation.goBack()
          
        console.log("something went wrong")});
    }

       async function getCompany() {

      await  Axios.get('http://196.29.238.98/auth/companyApi')
            .then((res)=>{setCompanylist(res.data)
              
            })  
            .catch((err) =>{ 
        console.log(err)});}

             async function getBusiness() {

      await  Axios.get('http://196.29.238.98/auth/businessApi')
            .then((res)=>{setBusinesslist(res.data)
              
            })  
            .catch((err) =>{ 
        console.log(err)});}

            getBusiness()
            getAccount()
            getCompany()

})

const [checked, setChecked] = React.useState('first');

const [project_name,setProject_name]=React.useState()
const [description,setDescription]=React.useState()
const [start_date,setStart_date]=React.useState("2020-07-05")
const [project_deadline,setProject_deadline]=React.useState("2020-07-05")
const [project_status,setProject_status]=React.useState()
const [project_complete_or_Inprogress,setProject_complete_or_Inprogress]=React.useState()
const [estimate_Price_of_Project,setEstimate_Price_of_Project]=React.useState(0)
const [reminder,setReminder]=React.useState("2020-07-05")
const [reminder_note,setReminder_note]=React.useState()
const [business,setBusiness]=React.useState()
const [client_company_name,setClient_company_name]=React.useState()
const [responsible_person,setResponsible_person]=React.useState()


  const [value, setValue] = React.useState('first');

function Addproject(){

        const bodyParameters = {
            "project_name": project_name,
        "description": description,
        "start_date": start_date,
        "project_deadline": project_deadline,
        "project_status": project_status,
        "project_complete_or_Inprogress":project_complete_or_Inprogress,
        "estimate_Price_of_Project": estimate_Price_of_Project,
        "reminder": reminder,
        "reminder_note": reminder_note,
        "business": business,
        "client_company_name": client_company_name,
        "responsible_person": responsible_person

        };
        console.log(bodyParameters)
      Axios.post('http://196.29.238.98/api/pm/projectAPI/',bodyParameters)
        .then((res)=>{console.log("Project Created",res.data)
          Alert.alert("Success", "Added")
                    navigation.navigate("Totalproject")})
        .catch(err=>{console.log(err)})
}

   
  return (
    <ScrollView>
   <View style={{padding:5}}>
    <TextInput
      label="Project Name"
      value={project_name}
      onChangeText={text => setProject_name(text)}
     style={{padding:5,margin:5}}
    />   
    <TextInput
      label="Description"
      value={description}
      onChangeText={text => setDescription(text)}
      style={{padding:5,margin:5}}
    />
      
   <Text style={{fontWeight:'bold',fontSize:20}}>Stage</Text>
    <RadioButton.Group onValueChange={newValue => setProject_status(newValue)} value={project_status}>
   

    <View style={{flexDirection:'row',padding:5}}>
    <View style={{flexDirection:'row',padding:5}}>
        <Text>Planning</Text>
        <RadioButton value={"PLANNING"} key={"PLANNING"}/>
      </View>

          <View style={{flexDirection:'row',padding:5}}>
        <Text>Development</Text>
        <RadioButton value={"DEVELOPMENT"} key={"DEVELOPMENT"}/>
      </View>
          <View style={{flexDirection:'row',padding:5}}>
        <Text>Testing</Text>
        <RadioButton value={"TESTING"} key={"TESTING"}/>
      </View>
       <View style={{flexDirection:'row',padding:5}}>
        <Text>Deployment</Text>
        <RadioButton value={"DEPLOYMENT"} key={"DEPLOYMENT"}/>
      </View>
       <View style={{flexDirection:'row',padding:5}}>
        <Text>Completed</Text>
        <RadioButton value={"COMPLETED"} key={"COMPLETED"} />
      </View>
      </View>
      </RadioButton.Group>

         <Text style={{fontWeight:'bold',fontSize:20}}>Stage</Text>
    <RadioButton.Group onValueChange={newValue => setProject_complete_or_Inprogress(newValue)} value={project_complete_or_Inprogress}>
   

    <View style={{flexDirection:'row',padding:5}}>
   
          <View style={{flexDirection:'row',padding:5}}>
        <Text>Inprogress</Text>
        <RadioButton value={"inprogress"} key={"inprogress"}/>
      </View>
          <View style={{flexDirection:'row',padding:5}}>
        <Text>Completed</Text>
        <RadioButton value={"completed"} key={"completed"}/>
      </View>
 
      </View>
    </RadioButton.Group>

      <TextInput
      label="Estimate price"
      value={estimate_Price_of_Project}
      onChangeText={text => setEstimate_Price_of_Project(Number(text))}
     style={{padding:5,margin:5}}
    />
    <View style={{flexDirection:'row',margin:10}}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>Start date</Text>
    <DatePicker
      key={"start_date"}
        style={{width: 200}}
        date={start_date}
        mode="date"
        placeholder="Select start date"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2029-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
         
        }}
        onDateChange={(date) => {setStart_date( date)}}
      />
</View>
 <View style={{flexDirection:'row',margin:10}}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>Deadline </Text>
      <DatePicker
      key={"deadline"}
        style={{width: 200}}
        date={project_deadline}
        mode="date"
        placeholder="Project deadline"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2029-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
         
        }}
        onDateChange={(date) => {setProject_deadline( date)}}
      />
</View>
 <View style={{flexDirection:'row',margin:10}}>
    <Text style={{fontSize:20,fontWeight:'bold'}}>Reminder</Text>
      <DatePicker
      key={'reminder'}
        style={{width: 200}}
        date={reminder}
        mode="date"
        placeholder="Reminder"
        format="YYYY-MM-DD"
        minDate="2016-05-01"
        maxDate="2029-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
         
        }}
        onDateChange={(date) => {setReminder( date)}}
      />
</View>
          <TextInput
      label="Reminder note"
      value={reminder_note}
      onChangeText={text => setReminder_note(text)}
     style={{padding:5,margin:5}}
    />
     <Text style={{fontWeight:'bold',fontSize:20}}>Client company</Text>
    <RadioButton.Group onValueChange={newValue => setClient_company_name(Number(newValue))} value={client_company_name}>
    <View style={{flexDirection:'row',padding:5}}>
    <ScrollView horizontal>
     {
  companylist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}} key={item.key}>
        <Text>{item.company_Name}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}
    </ScrollView>
      </View>
     
    </RadioButton.Group>

    <Text style={{fontWeight:'bold',fontSize:20}}>Responsible person</Text>
    <RadioButton.Group onValueChange={newValue => setResponsible_person(Number(newValue))} value={responsible_person}>
    <View style={{flexDirection:'row',padding:5}}>
    <ScrollView horizontal>
     {
  accountlist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}} key={item.key}>
        <Text>{item.email}</Text>
        <RadioButton value={Number(item.id)} />
      </View>
    )})
}
    </ScrollView>
      </View>
     
    </RadioButton.Group>


        <Text style={{fontWeight:'bold',fontSize:20}}> Business</Text>
    <RadioButton.Group onValueChange={newValue => setBusiness(Number(newValue))} value={business}>
    <View style={{flexDirection:'row',padding:5}}>
    <ScrollView horizontal>
     {
  businesslist.map((item)=>{return(

    <View style={{flexDirection:'row',padding:5}} key={item.key}>
        <Text>{item.business_name}</Text>
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
      onPress={() => Addproject()}>
    Add Account
  </Button>


   </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Createproject;
