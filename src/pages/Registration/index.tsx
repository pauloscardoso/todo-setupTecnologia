import React from 'react';
import { Container, Content, ContentTitle, Footer, Input, Text, Touchable } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import types from './index.d';
import { Alert } from 'react-native';
import { firebase } from 'src/firebase/config';
import { useAppActions } from 'src/store/hooks';

const Registration: React.FC<types.Props> = ({ navigation }) => {
  const { signIn } = useAppActions();
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = () => {
    if (!fullName) {
      Alert.alert('Invalid Name', 'Please enter your full name');
      return;
    }
    if (!email.match(/\S+@\S+\.\S+/)) {
      Alert.alert('Invalid Email', 'Please enter a valid email');
      return;
    }
    if (password.length < 6) {
      Alert.alert('Invalid Password', 'Please enter a password with at least 6 characters');
      return;
    }
    if (!password) {
      Alert.alert('Invalid Password', 'Please enter your password');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match', 'Please enter matching passwords');
      return;
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res: any) => {
        const uid = res.user.uid;
        const data: types.UserData = {
          id: uid,
          email,
          fullName,
        };
        const usersRef = firebase.firestore().collection('users');
        usersRef.doc(uid).set(data);

        signIn();
      })
      .catch((e) => {
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
            <Text variant='create'>Create account</Text>
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