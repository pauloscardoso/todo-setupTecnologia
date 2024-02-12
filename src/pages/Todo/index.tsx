import { isEqual } from 'lodash';
import React from 'react';
import { FlatList } from 'react-native';
import { useAppActions, useAppSelector } from 'src/store/hooks';
import {
  AddNewTodoInput,
  AddTodoButton,
  AddedTodo,
  Container,
  DeleteTodoButton,
  DeleteTodoButtonContainer,
  DeleteTodoButtonTitle,
  FooterContent,
  Header,
  Separator,
  SignOutButton,
  Title,
  TodosContent,
  ToggleTodoButton,
  AddTodoText,
} from './styles';
import Button from 'src/components/button';
import theme from 'src/global/theme';

const Todo: React.FC = () => {
  const { signOut, addTodo, toggleTodo, deleteTodo } = useAppActions();
  const [newTodo, setNewTodo] = React.useState('');

  const { fullName, email, todos } = useAppSelector(
    ({ installation, todos }) => ({
      fullName: installation.fullName || '',
      email: installation.email || '',
      todos: todos,
    }),
    isEqual,
  );

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id: number) => {
    toggleTodo(id);
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  return (
    <Container>
      <Header>
        <SignOutButton onPress={() => signOut()}>Logout</SignOutButton>
      </Header>
      <TodosContent>
        <Title>Todo</Title>
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AddedTodo selected={item.completed}>
              <ToggleTodoButton onPress={() => handleToggleTodo(item.id)}></ToggleTodoButton>
              <AddTodoText>{item.text}</AddTodoText>
              <DeleteTodoButtonContainer>
                <DeleteTodoButton onPress={() => handleDeleteTodo(item.id)}>
                  <DeleteTodoButtonTitle>X</DeleteTodoButtonTitle>
                </DeleteTodoButton>
              </DeleteTodoButtonContainer>
            </AddedTodo>
          )}
        />
      </TodosContent>
      <FooterContent>
        <AddNewTodoInput
          placeholder='Add a new todo'
          placeholderTextColor={theme.colors.gray}
          value={newTodo}
          onChangeText={(text) => setNewTodo(text)}
        />
        <AddTodoButton onPress={handleAddTodo}>+</AddTodoButton>
      </FooterContent>
    </Container>
  );
};

export { Todo };
