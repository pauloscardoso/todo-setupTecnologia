import { ReactNode } from 'react';
import { CheckIcon, CloseIcon } from 'src/components/Icon';
import Button from 'src/components/button';
import theme from 'src/global/theme';
import { Normalize } from 'src/utils/normalize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding-top: 30px;
  padding-right: 20px;
  justify-content: flex-start;
  width: 100%;
  align-items: flex-end;
`;

export const SignOutButton = styled(Button).attrs({
  styleText: {
    fontSize: Normalize.fontSize(18, 14),
    color: theme.colors.grayDark,
    fontWeight: 'bold',
  },
})`
  width: 60px;
  height: 40px;
  border-radius: 8px;
  background-color: transparent;
  font-weight: bold;
`;

export const TodosContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${Normalize.fontSize(18, 12)}px;
  color: ${({ theme }) => theme.colors.grayDarkMedium};
  margin-bottom: 10px;
  font-weight: bold;
`;

export const AddedTodo = styled.View<{ selected: ReactNode | string | null }>`
  background-color: ${({ theme }) => theme.colors.grayDark};
  border-radius: 10px;
  padding-left: 15px;

  align-items: center;
  flex-direction: row;
  height: 40px;
  width: 320px;

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.gray};
    `};
`;

export const AddTodoButton = styled(Button).attrs({
  styleText: {
    fontSize: Normalize.fontSize(30, 14),
    color: theme.colors.green,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
})`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.grayDark};
`;

export const ToggleTodoButton = styled(Button).attrs<{ selected: ReactNode | string | null }>({
  hitSlop: {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30,
  },
})`
  width: 14px;
  height: 14px;
  background-color: ${({ theme }) => theme.colors.grayDark};
  border: 2px solid ${({ theme }) => theme.colors.white};
  margin-right: 10px;
  ${({ selected }) =>
    selected &&
    css`
      background-color: ${({ theme }) => theme.colors.gray};
      border: none;
    `};
`;

export const IconCheck = styled(CheckIcon).attrs({
  width: Normalize.size(20, 14),
  height: Normalize.size(20, 14),
  color: theme.colors.green,
})``;

export const AddedTodoText = styled.Text<{ selected: ReactNode | string | null }>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${Normalize.fontSize(16, 12)}px;
  font-weight: bold;

  ${({ selected }) =>
    selected &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.black};
    `};
`;

export const DeleteTodoButtonContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  margin-right: 10px;
`;

export const DeleteTodoButton = styled(Button).attrs({
  activeOpacity: 0.8,
  hitSlop: {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30,
  },
})`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.red_primary};
`;

export const IconClose = styled(CloseIcon).attrs({
  width: Normalize.size(10),
  height: Normalize.size(10),
  color: theme.colors.white,
})``;

export const Separator = styled.View`
  height: 1px;
  width: 291px;
  margin-left: 16px;
  border-color: ${({ theme }) => theme.colors.gray};
  border-width: 0.5px;
  margin-vertical: 6px;
`;

export const FooterContent = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 10px;
`;

export const AddNewTodoInput = styled.TextInput`
  height: 40px;
  width: 240px;
  margin-right: 30px;
  border-color: ${({ theme }) => theme.colors.gray};
  border-width: 1px;
  text-align: center;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.grayDark};
  color: ${({ theme }) => theme.colors.white};
`;
