import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.text_title};
`;

