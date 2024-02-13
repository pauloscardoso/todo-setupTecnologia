import React from 'react';
import { Alert } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useAppActions } from 'src/store/hooks';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getApp, getAuth } from 'src/firebase/config';
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

const Login: React.FC<types.Props> = ({ navigation }) => {
  const { signIn } = useAppActions();
  const { setInstallation } = useAppActions();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  const onLoginPress = () => {
    if (password.length < 6) {
      Alert.alert('Incorrect password', 'Please try again');
      return;
    }

    signInWithEmailAndPassword(getAuth(getApp()), email, password)
      .then((userCredential: GlobalProps.all) => {
        const { uid, email: userEmail } = userCredential.user;
        setInstallation({ id: uid, email: userEmail });
        signIn();
      })
      .catch((e: GlobalProps.error) => {
        console.log(`erro ao logar um usuário ${e}`);
        if (e.code === 'auth/invalid-credential') {
          Alert.alert('Something went wrong', 'Please try again');
        }
        if (e.code === 'auth/invalid-login-credentials') {
          Alert.alert('E-mail or password incorrect', 'Please try again');
        }
        if (e.code === 'auth/invalid-email') {
          Alert.alert('Email not found', 'Register or try again');
        }
        if (e.code === 'auth/too-many-requests') {
          Alert.alert(
            'Many wrong attempts',
            'You can immediately restore it by resetting your password or you can try again later',
          );
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
