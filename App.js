/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
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


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'
import {AuthContext} from './src/screens/context.js'

//screens
import Tabbar from './src/screens/Tabbar'
import DrawerContent from './src/screens/DrawerContent'
import Service from './src/screens/Service'
import Account from './src/screens/Account'
import Position from './src/screens/Position'
import Department from './src/screens/Department'
import Business from './src/screens/Business'
import Customer from './src/screens/Customer'
import Login from './src/screens/Login'



const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
        
      </Text>
    </View>
  );
};

const Drawer = createDrawerNavigator();

// const App: () => Node = () => {
  
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

const App=({navigation})=>{


  const [token, setToken] = React.useState(null);
  const [isLogin, setIsLogin] = React.useState(false);
  const [alreadyLogin,setAlreadyLogin]=React.useState(false)
  const [isLoading,setIsLoading]=React.useState(true)
  const [isRequestSend,setIsRequestSend]=React.useState(false)

   const [state, dispatch] = React.useReducer(

    (prevState, action) => {

      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            userId:action.id,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
            userId:action.id
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            userId:null
          };
   
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userId: null,
      userToken: null,
    }
  );

    React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      let userId;

      try {
        userToken = await  AsyncStorage.getItem("token");
        userId = await  AsyncStorage.getItem("id");
      } catch (e) {
        // Restoring token failed
        console.log("cant fetch token to device")
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken ,id:Number(userId)});
    };

    bootstrapAsync();
  }, []);

  const storeData = async (value) => {
      try {
        await AsyncStorage.setItem("token", value);
        console.log("token saved",value);
      } catch (e) {
        console.log("can not save token");
      }
    };

    const storeId = async (value) => {
      try {
        await AsyncStorage.setItem("id", value);
        console.log("token saved",value);
      } catch (e) {
        console.log("can not save token");
      }
    };

     const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('token')
      await AsyncStorage.removeItem('id')
      console.log(" token removed ,id Removed")
    } catch(e) {
      // remove error
      console.log('cannot remove token id')
    }
  
    console.log('Done.')
  }




    const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        
    
    // login1(data)
     setIsLoading(true)
      setIsRequestSend(true)


        const bodyParameters = {
          email: data.email,
          password: data.password
        };
    
        await axios
          .post(`http://196.29.238.98/auth/loginApi/`, bodyParameters)
          .then((res) => {
            
            setIsLoading(false)
            setIsRequestSend(false)

            storeData(res.data.token)
            // storeData(JSON.stringify(res.data.id))
            const userId=res.data.id;
            storeId(userId.toString())
            const xx=res.data.token
            const yy=res.data.id
             dispatch({ type: 'SIGN_IN', token: xx,id:yy })
            // showToastWithGravity()
            // navigation.goBack()
          })
          .catch((err) => {
           setIsRequestSend(false)
            // showToastWithGravityAndOffset()
          });
    // dispatch({ type: 'SIGN_IN', token: token });


         

        // dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () =>{ 
        removeValue()
        dispatch({ type: 'SIGN_OUT' })},
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token
  

        dispatch({ type: 'SIGN_UP', token: 'dummy-auth-token' });
      },
      profileAvailable:()=>{
        dispatch({type:'PROFILE_AVAILABLE'})
      }
    }),
    []
  );

  return (
   <AuthContext.Provider value={authContext}>
     <NavigationContainer>

      <Drawer.Navigator  drawerContent={props => <DrawerContent {...props} />}>
        {state.userToken == null ? (
          <Drawer.Screen name="Login" component={Login} />
        ) : (
        <Drawer.Screen name="mainscreen" component={Tabbar} />
        )}
      </Drawer.Navigator>
    </NavigationContainer>
   </AuthContext.Provider >

  );
};



export default App;
