import styled, { css } from 'styled-components/native';
import { stylesProps } from './index.d';
import { Normalize } from 'src/utils/normalize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.View`
  height: 100%;
  justify-content: center;
  padding-top: 100px;
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

export const Text = styled.Text<stylesProps.Text>`
  ${({ variant, theme }) => {
    switch (variant) {
      case 'title':
        return css`
          font-size: ${Normalize.fontSize(20, 14)}px;
          color: ${({ theme }) => theme.colors.grayDarkMedium};
          font-weight: bold;
        `;
      case 'create':
        return css`
          font-size: ${Normalize.fontSize(16, 12)}px;
          font-weight: bold;
          color: ${theme.colors.white};
        `;
      case 'footer':
        return css`
          font-size: ${Normalize.fontSize(16, 12)}px;
          color: ${({ theme }) => theme.colors.gray};
          margin-right: 4px;
          margin-top: 6px;
        `;
      case 'footerLink':
        return css`
          font-size: ${Normalize.fontSize(16, 12)}px;
          font-weight: bold;
          margin-top: 6px;
          color: #788eec;
        `;
      default:
        return undefined;
    }
  }}
`;
