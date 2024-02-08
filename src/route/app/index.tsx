import { createNativeStackNavigator } from '@react-navigation/native-stack';

import typ from './index.d';
import { Home } from 'src/pages/Home';

const Stack = createNativeStackNavigator<typ.ParamList>();

const AppStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName='Home'
    >
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  );
};

export {AppStack}