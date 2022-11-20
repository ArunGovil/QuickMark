import React, {createContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();
export const AppContext = createContext(null);

const RootNavigator = () => {
  const [isInitialized, setIsInitialized] = useState(null);

  useEffect(() => {
    setIsInitialized(null);
  }, []);

  return (
    <NavigationContainer>
      <AppContext.Provider value={isInitialized}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Group>
            <Stack.Screen name="Sidebar" component={HomeScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </AppContext.Provider>
    </NavigationContainer>
  );
};

export default RootNavigator;
