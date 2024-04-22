import React from 'react';
import {
  Container,
  Content,
  ContentTitle,
  Footer,
  Input,
  Loading,
  Text,
  Touchable,
} from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import types from './index.d';
import { Alert } from 'react-native';
import { useAppActions } from 'src/store/hooks';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getApp, getAuth } from 'src/firebase/config';

const Registration: React.FC<types.Props> = ({ navigation }) => {
  const { setInstallation } = useAppActions();
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = () => {
    setLoading(true);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!fullName) {
      Alert.alert('Name is required', 'Please enter your full name');
      setLoading(false);
      return;
    }
    if (!email) {
      Alert.alert('Email is required', 'Please enter your email');
      setLoading(false);
      return;
    }
    if (!emailRegex.test(email)) {
      Alert.alert('Email invalid', 'Please enter a valid email');
      setLoading(false);
      return;
    }
    if (!password) {
      Alert.alert('Password is required', 'Please enter your password');
      setLoading(false);
      return;
    }
    if (!confirmPassword) {
      Alert.alert('Confirm Password is required', 'Please enter your confirm password');
      setLoading(false);
      return;
    }
    if (!email.match(/\S+@\S+\.\S+/)) {
      Alert.alert('Invalid Email', 'Please enter a valid email');
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      Alert.alert('Invalid Password', 'Please enter a password with at least 6 characters');
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', 'Please enter matching passwords');
      setLoading(false);
      return;
    }
    createUserWithEmailAndPassword(getAuth(getApp()), email, password)
      .then((userCredential: any) => {
        const { uid, email } = userCredential.user;
        const data: types.UserData = {
          id: uid,
          email,
          fullName,
        };
        setInstallation(data);
        Alert.alert('Account created!', 'Your account has been created successfully');
        navigation.navigate('Login');
      })
      .catch((e: GlobalProps.all) => {
        setLoading(false);
        console.log(`erro ao criar um usuário ${e}`);
        if (e.code === 'auth/email-already-in-use') {
          Alert.alert('E-mail already in use', 'Please try another one');
        }
      });
  };

  return (
    <Container>
      <Content>
        <KeyboardAwareScrollView
          style={{ flex: 1, width: '100%' }}
          keyboardShouldPersistTaps='always'
        >
          <ContentTitle>
            <Text variant='title'>Create Account</Text>
          </ContentTitle>
          <Input
            placeholder='Full Name'
            placeholderTextColor='#aaaaaa'
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            underlineColorAndroid='transparent'
            autoCapitalize='none'
          />
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
          <Input
            placeholderTextColor='#aaaaaa'
            secureTextEntry
            placeholder='Confirm Password'
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            underlineColorAndroid='transparent'
            autoCapitalize='none'
          />
          <Touchable onPress={() => onRegisterPress()}>
            {isLoading ? <Loading /> : <Text variant='create'>Create account</Text>}
          </Touchable>
          <Footer>
            <Text variant='footer'>
              Already got an account?{' '}
              <Text variant='footerLink' onPress={onFooterLinkPress}>
                Log in
              </Text>
            </Text>
          </Footer>
        </KeyboardAwareScrollView>
      </Content>
    </Container>
  );
};

export { Registration };
