import { TouchableOpacity } from 'react-native';
import { Normalize } from 'src/utils/normalize';
import styled, { css } from 'styled-components/native';

export const Container = styled(TouchableOpacity)<{
  loading?: boolean;
  background: string;
  opacity?: number;
}>`
  position: relative;
  flex-direction: row;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  opacity: ${({ loading, opacity }) => (loading ? 0.7 : opacity ?? 1)};
  background-color: ${({ background }) => background};
`;

export const Title = styled.Text<{ color: string; bold?: boolean }>`
  text-align: center;
  font-size: ${Normalize.fontSize(14, 12)}px;
  color: ${({ color }) => color};
  padding-top: ${({ theme }) => 3}px;
`;

export const ViewIcon = styled.View<{ left?: boolean }>`
  justify-content: center;
  align-items: center;
  ${({ left }) =>
    !left
      ? css`
          margin-left: 8px;
        `
      : css`
          margin-right: 8px;
        `}
`;

export const ButtonView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
