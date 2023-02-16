import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import home from '../../screens/homes/home';
import splash from '../../screens/auth/splash';
import login from '../../screens/auth/login';
import signup from '../../screens/auth/signup';
import forgotPassword from '../../screens/auth/forgotPassword';
import otp from '../../screens/auth/otp';
import changePassword from '../../screens/auth/changePassword';

const Stack = createStackNavigator();

export const Auth = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="splash"
        component={splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="signup"
        component={signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="forgotPassword"
        component={forgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="otp"
        component={otp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="changePassword"
        component={changePassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export const HomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="home"
        component={home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Auth'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
