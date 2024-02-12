import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodoScreen } from 'src/pages/Todo';
import typ from './index.d';

const Stack = createNativeStackNavigator<typ.ParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Todo'
    >
      <Stack.Screen name='Todo' component={TodoScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;
