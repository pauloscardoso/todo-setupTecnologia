import React from 'react';
import {
  Container,
  Content,
  ContentTitle,
  Footer,
  FooterLink,
  Input,
  // Logo,
  Text,
  Touchable,
} from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import types from './index.d';

const Login: React.FC<types.Props> = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onFooterLinkPress = () => {
    navigation.navigate('Registration');
  };

  const onLoginPress = () => {};

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
