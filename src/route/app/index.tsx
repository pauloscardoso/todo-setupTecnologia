import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Todo } from 'src/pages/Todo';
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
      <Stack.Screen name='Todo' component={Todo} />
    </Stack.Navigator>
  );
};

export { AppStack };
