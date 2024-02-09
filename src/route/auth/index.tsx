import { createNativeStackNavigator } from '@react-navigation/native-stack';

import typ from './index.d';
import { Login } from 'src/pages/Login';
import { Registration } from 'src/pages/Registration';

const Stack = createNativeStackNavigator<typ.ParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Login'
    >
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Registration' component={Registration} />
    </Stack.Navigator>
  );
};

export { AuthStack };
