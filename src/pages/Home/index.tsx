import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { useAppActions } from 'src/store/hooks';

const Home: React.FC = () => {
  const { signOut } = useAppActions();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'black' }}>Home Screen</Text>
      <Button title='Logout' onPress={() => signOut()} />
    </View>
  );
};

export { Home };
