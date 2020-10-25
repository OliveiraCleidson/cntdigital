import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Auth from '../screens/Auth';
import Hodometro from '../screens/Hodometro';
import Trechos from '../screens/Trechos';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Auth"
  >
    <AuthStack.Screen name="Auth" component={Auth} />
    <AuthStack.Screen name="Trechos" component={Trechos} />
    <AuthStack.Screen name="Hodometro" component={Hodometro} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
