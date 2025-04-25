import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ADD_TODO, TODO_DETAIL, TODO_LIST, UPDATE_TODO} from '../utils/routes';
import TodoList from '../screens/todos';
import AddTodo from '../screens/todos/AddTodo';
import TodoDetail from '../screens/todos/TodoDetail';
import UpdateTodo from '../screens/todos/UpdateTodo';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TODO_LIST} component={TodoList} />
      <Stack.Screen name={ADD_TODO} component={AddTodo} />
      <Stack.Screen name={TODO_DETAIL} component={TodoDetail} />
      <Stack.Screen name={UPDATE_TODO} component={UpdateTodo} />
    </Stack.Navigator>
  );
}
