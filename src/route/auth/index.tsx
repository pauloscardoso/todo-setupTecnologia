import { createNativeStackNavigator } from '@react-navigation/native-stack';

import typ from './index.d';
import { SignIn } from 'src/pages/SignIn';

const Stack = createNativeStackNavigator<typ.ParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='SignIn'
    >
      <Stack.Screen name='SignIn' component={SignIn} />
    </Stack.Navigator>
  );
};

export {AuthStack}