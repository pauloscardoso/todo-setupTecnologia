import styled, { css } from 'styled-components/native';
import { stylesProps } from './index.d';
import { normalizeFont } from 'src/utils/normalize/scale';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  height: 100%;
  justify-content: center;
  padding-top: 200px;
`;

export const ContentTitle = styled.View`
  align-items: center;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  height: 48px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  overflow: hidden;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 30px;
  margin-right: 30px;
  padding-left: 16px;
`;

export const Touchable = styled.TouchableOpacity`
  background-color: #788eec;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
  height: 48px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const FooterLink = styled.Text`
  color: #788eec;
  font-weight: bold;
  font-size: ${normalizeFont(16)};
  margin-top: 6px;
`;

export const Text = styled.Text<stylesProps.Text>`
  ${({ variant, theme }) => {
    switch (variant) {
      case 'title':
        return css`
          font-size: ${normalizeFont(20)};
          color: ${({ theme }) => theme.colors.grayDarkMedium};
          font-weight: bold;
        `;
      case 'login':
        return css`
          font-size: ${normalizeFont(16)};
          font-weight: bold;
          color: ${theme.colors.white};
        `;
      case 'footer':
        return css`
          font-size: ${normalizeFont(16)};
          color: ${({ theme }) => theme.colors.gray};
          margin-right: 4px;
          margin-top: 6px;
        `;
      default:
        return undefined;
    }
  }}
`;
