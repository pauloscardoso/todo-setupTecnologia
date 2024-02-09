import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from 'src/firebase/config';
import {
  Container,
  Content,
  ContentTitle,
  Footer,
  FooterLink,
  Input,
  Text,
  Touchable,
} from './styles';
import types from './index.d';
import { Alert } from 'react-native';
import { useAppActions } from 'src/store/hooks';

const Login: React.FC<types.Props> = ({ navigation }) => {
  const { signIn } = useAppActions();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  const onLoginPress = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response: GlobalProps.all) => {
        const uid = response.user.uid;
        const usersRef = firebase.firestore().collection('users');
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              Alert.alert('User does not exist anymore.');
              return;
            }
            const user = firestoreDocument.data();
            signIn();
          })
          .catch((error) => {
            console.log(`error ${error}`);
          });
      })
      .catch((e) => {
        console.log(`erro ao criar um usuário ${e}`);
        if (e.code === 'auth/invalid-credential') {
          Alert.alert('User does not exist', 'Please try again');
        }
      });
  };

  return (
    <Container>
      <Content>
        <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
          <ContentTitle>
            <Text variant='title'>Todo List</Text>
          </ContentTitle>
          <Input
            placeholder='E-mail'
            placeholderTextColor='#aaaaaa'
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid='transparent'
            autoCapitalize='none'
            keyboardType='email-address'
          />
          <Input
            placeholderTextColor='#aaaaaa'
            secureTextEntry
            placeholder='Password'
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid='transparent'
            autoCapitalize='none'
          />
          <Touchable onPress={() => onLoginPress()}>
            <Text variant='login'>Log in</Text>
          </Touchable>
          <Footer>
            <Text variant='footer'>Don't have an account?</Text>
            <FooterLink onPress={onFooterLinkPress}>Sign up</FooterLink>
          </Footer>
        </KeyboardAwareScrollView>
      </Content>
    </Container>
  );
};

export { Login };
