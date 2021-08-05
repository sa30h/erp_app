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

import { Card, Title, Paragraph,DataTable,Divider,Badge,Subheading } from 'react-native-paper';
import Axios from 'axios'

  



const Dashboard = () => {
  const[project,setProject]=React.useState([])
  const [inprogress,setInprogress]=React.useState([])
  const [company,setCompany]=React.useState([])
  const [completed,setCompleted]=React.useState([])
  const [account,setAccount]=React.useState([])
  const [manageraccount,setManageraccount]=React.useState([])
  const [department,setDepartment]=React.useState([])
  const [position,setPosition]=React.useState([])
  const [business,setBusiness]=React.useState([])

   React.useEffect(() => {
    async function getProject() {
  

      await  Axios.get('http://196.29.238.98/api/pm/projectAPI/')
            .then((res)=>{setProject(res.data)
              // console.log(project)
                   setInprogress(res.data.filter(function (item) {
                   return item.project_complete_or_Inprogress == "inprogress";}))
                   setCompleted(res.data.filter(function (item) {
                   return item.project_complete_or_Inprogress == "completed";}))
            })
            .catch((err) =>{           
         console.log(err)});
          }

        async function getCompany() {
  

      await  Axios.get('http://196.29.238.98/auth/companyApi')
            .then((res)=>{setCompany(res.data)})  
            .catch((err) =>{ 
        console.log(err)});}

      async function getAccount() {
  

      await  Axios.get('http://196.29.238.98/auth/registerApi')
            .then((res)=>{setAccount(res.data)

// console.log(res.data)
            })  
            .catch((err) =>{ 
        console.log(err)});}

       async function getDepartment() {
      await  Axios.get('http://196.29.238.98/auth/departmentApi')
            .then((res)=>{setDepartment(res.data)
            })  
            .catch((err) =>{ 
        console.log(err)});}

       async function getPosition() {

      await  Axios.get('http://196.29.238.98/auth/positionApi/')
            .then((res)=>{setPosition(res.data)
            })  
            .catch((err) =>{ 
        console.log(err)});}

  async function getBusiness() {

      await  Axios.get('http://196.29.238.98/auth/businessApi/')
            .then((res)=>{setBusiness(res.data)

             

            })  
            .catch((err) =>{ 
        console.log(err)});}

   

    getProject();
    getCompany();
    getAccount()
    getDepartment()
    getPosition()
    getBusiness()


  }, []);


  return (
    <ScrollView style={{padding:10}}>
 <Card style={{marginBottom:10}}>  
    <Card.Content>
      <Title style={{fontSize:25,fontWeight:'bold'}}>Projects</Title>
      <Divider />
          <DataTable>
      <DataTable.Row>
        <DataTable.Cell ><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Total Project</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>{project.length}</Text></DataTable.Cell>
      </DataTable.Row>
            <DataTable.Row>
        <DataTable.Cell><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Complete Project</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>{completed.length}</Text></DataTable.Cell>
      </DataTable.Row>
            <DataTable.Row>
        <DataTable.Cell><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Inprogress Project</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>{inprogress.length}</Text></DataTable.Cell>
      </DataTable.Row>
      </DataTable>
    </Card.Content>
  </Card>
  <Card style={{marginBottom:10}}> 
    <Card.Content>
      <Title style={{fontSize:25,fontWeight:'bold'}}>Companies</Title>
      <Divider />
          <DataTable>
      <DataTable.Row>
        <DataTable.Cell > <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Total Companies</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>{company.length}</Text></DataTable.Cell>
      </DataTable.Row>
      </DataTable>
    </Card.Content>
  </Card>



 <Card style={{marginBottom:10}}>  
    <Card.Content>
      <Title style={{fontSize:25,fontWeight:'bold'}}>Account</Title>
      <Divider />


          <DataTable>
            {position.map((item)=>{return(
                 <DataTable.Row key={item.id}>
        <DataTable.Cell > <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>{item.position}</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>
{account.filter(x => x.position===item.id).length}
        </Text></DataTable.Cell>
      </DataTable.Row>
            )})
 }
     
      </DataTable>
    </Card.Content>
  </Card>

     <Card style={{marginBottom:10}}>  
    <Card.Content>
      <Title style={{fontSize:25,fontWeight:'bold'}}>Department</Title>
      <Divider />

          <DataTable>
          {department.map((item)=>{return(
                 <DataTable.Row key={item.id}>
        <DataTable.Cell > <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>{item.department_name}</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>
        {account.filter(x => x.department===item.id).length}

        </Text></DataTable.Cell>
      </DataTable.Row>
            )})
 }
           
      </DataTable>
    </Card.Content>
  </Card>

     <Card style={{marginBottom:10}}>  
    <Card.Content>
      <Title style={{fontSize:25,fontWeight:'bold'}}>Business</Title>
      <Divider />

    <DataTable>
      <DataTable.Header>
        <DataTable.Title><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Business</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>Owner</Text></DataTable.Title>
      </DataTable.Header>
                {
          business.map((item)=>{return(

         <DataTable.Row key={item.id}>
        <DataTable.Cell ><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>{item.business_name}</Text></DataTable.Cell>
        <DataTable.Cell numeric><Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>{item.business_owner}</Text></DataTable.Cell>
      </DataTable.Row>   
                    )})

                }

    </DataTable>
    </Card.Content>
  </Card>

  </ScrollView>
  );
};

const styles = StyleSheet.create({

});

export default Dashboard;
