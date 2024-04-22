import { isEqual } from 'lodash';
import React from 'react';
import { Alert, FlatList } from 'react-native';
import { useAppActions, useAppSelector } from 'src/store/hooks';
import {
  AddNewTodoInput,
  AddTodoButton,
  AddedTodo,
  Container,
  DeleteTodoButton,
  DeleteTodoButtonContainer,
  FooterContent,
  Header,
  Separator,
  SignOutButton,
  Title,
  TodosContent,
  ToggleTodoButton,
  AddedTodoText,
  IconCheck,
  IconClose,
} from './styles';
import theme from 'src/global/theme';

const TodoScreen: React.FC = () => {
  const { signOut, addTodo, toggleTodo, deleteTodo } = useAppActions();
  const [newTodo, setNewTodo] = React.useState('');

  const { todos } = useAppSelector(
    ({ installation, todos }) => ({
      fullName: installation.fullName || '',
      email: installation.email || '',
      todos: todos,
    }),
    isEqual,
  );

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => signOut(),
      },
    ]);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo({ id: todos.length + 1, text: newTodo });
      setNewTodo('');
    }
  };

  const handleToggleTodo = (id: number) => {
    toggleTodo({ id });
  };

  const handleDeleteTodo = (id: number) => {
    deleteTodo(id);
  };

  return (
    <Container>
      <Header>
        <SignOutButton onPress={handleLogout}>Logout</SignOutButton>
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
              <ToggleTodoButton
                selected={item.completed}
                onPress={() => handleToggleTodo(item.id)}
                testID='todo-toggleButton'
              >
                {item.completed && <IconCheck />}
              </ToggleTodoButton>
              <AddedTodoText selected={item.completed}>{item.text}</AddedTodoText>
              <DeleteTodoButtonContainer>
                <DeleteTodoButton onPress={() => handleDeleteTodo(item.id)}>
                  <IconClose />
                </DeleteTodoButton>
              </DeleteTodoButtonContainer>
            </AddedTodo>
          )}
        />
      </TodosContent>
      <FooterContent>
        <AddNewTodoInput
          placeholder='Add a new task'
          placeholderTextColor={theme.colors.gray}
          value={newTodo}
          onChangeText={(text: string) => setNewTodo(text)}
        />
        <AddTodoButton onPress={handleAddTodo}>+</AddTodoButton>
      </FooterContent>
    </Container>
  );
};

export { TodoScreen };
