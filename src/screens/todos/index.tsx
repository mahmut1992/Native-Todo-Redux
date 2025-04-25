import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FloatActionButton from '../../components/ui/FloatActionButton';
import TodoItem from '../../components/todos/TodoItem';
import {useSelector} from 'react-redux';
import {todoStatus} from '../../utils/constants';
import StatusBox from './StatusBox';
import {SafeAreaView} from 'react-native-safe-area-context';

const TodoList: React.FC = () => {
  const {todos} = useSelector(state => state.todo);
  const statusCount = [
    {
      title: 'Open',
      status: todoStatus.open,
      color: '#2ccce4',
      count: todos.filter(todo => todo.status == todoStatus.open).length,
    },
    {
      title: 'Completed',
      status: todoStatus.complate,
      color: '#37d67a',
      count: todos.filter(todo => todo.status == todoStatus.complate).length,
    },
    {
      title: 'Test',
      status: todoStatus.test,
      color: '#FF8A65',
      count: todos.filter(todo => todo.status == todoStatus.test).length,
    },
    {
      title: 'Closed',
      status: todoStatus.closeed,
      color: '#f47373',
      count: todos.filter(todo => todo.status == todoStatus.closeed).length,
    },
  ];
  const listHeader = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 10,
          paddingTop: 10,
        }}>
        <FlatList
          numColumns={2}
          data={statusCount}
          renderItem={({item}) => <StatusBox item={item} />}
        />
        <Text style={{fontWeight: '600', fontSize: 20, marginVertical: 10}}>
          İş Durumlarım
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={listHeader}
        ListEmptyComponent={
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Veri eklenmedi
          </Text>
        }
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TodoItem todo={item} />}
      />
      <FloatActionButton />
    </SafeAreaView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -60,
  },
});
