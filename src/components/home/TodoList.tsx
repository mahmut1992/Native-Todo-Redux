import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import Input from '../ui/Input';
import Button from '../ui/Button';

const TodoList: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);
  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, todo]);
    }
    setTodo('');
  };
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <View style={styles.container}>
      <Input
        type="input"
        placeholder="Todo ekleyiniz"
        value={todo}
        onChange={event => setTodo(event.nativeEvent.text)}
      />
      <Button handleClick={addTodo} title="Ekle" color="#007BFF" />
      <FlatList
        data={todos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderColor: '#ccc',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 20}}> {item} </Text>
            <Button
              title="Sil"
              color="red"
              handleClick={() => deleteTodo(index)}
            />
          </View>
        )}
        style={{marginTop: 20}}
      />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
