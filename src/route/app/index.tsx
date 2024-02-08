import { createNativeStackNavigator } from '@react-navigation/native-stack';

import typ from './index.d';
import { SignIn } from 'src/pages/SignIn';

const Stack = createNativeStackNavigator<typ.ParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='TodoList'
    >
      <Stack.Screen name='TodoList' component={SignIn} />
    </Stack.Navigator>
  );
};

export {AppStack}