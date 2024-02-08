import React from 'react';
import { Container, Content, ContentTitle, Footer, Input, Text, Touchable } from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import types from './index.d';

const Registration: React.FC<types.Props> = ({ navigation }) => {
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Login');
  };

  const onRegisterPress = () => {};

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
