import { isEqual } from 'lodash';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { store } from 'src/store';
import { useAppActions, useAppSelector } from 'src/store/hooks';

const Home: React.FC = () => {
  const { signOut } = useAppActions();
  const hasId = store.getState().installation;
  console.log('hasId :', hasId);

  const { fullName, email } = useAppSelector(
    ({ installation }) => ({
      fullName: installation.fullName || '',
      email: installation.email || '',
    }),
    isEqual,
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'black' }}>Olá, {fullName}</Text>
      <Text style={{ fontSize: 20, color: 'black' }}>Seu e-mail é: {email}</Text>
      <Button title='Logout' onPress={() => signOut()} />
    </View>
  );
};

export { Home };
