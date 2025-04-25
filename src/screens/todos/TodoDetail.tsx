import {Calendar, Calendar1, Status, Subtitle} from 'iconsax-react-nativejs';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../components/ui/Button';
import {useDispatch} from 'react-redux';
import {removeTodo, updateTodo} from '../../store/actions/todoActions';
import {TODO_LIST, UPDATE_TODO} from '../../utils/routes';
import {todoStatus} from '../../utils/constants';

const TodoDetail: React.FC = ({route, navigation}) => {
  const dispatch = useDispatch();
  const {todo} = route.params;
  const handleUpdateTodo = (status: string) => {
    todo.status = status;
    dispatch(updateTodo(todo));
    Alert.alert('Güncelleme Başarılı', 'Todo Güncellendi', [
      {text: 'Tamam', onPress: () => navigation.goBack()},
    ]);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#ccc',
            padding: 15,
            backgroundColor: 'white',
          }}>
          <Subtitle size={25} color="#ccc" variant="Outline" />
          <View style={{marginHorizontal: 10, flex: 1}}>
            <Text style={{fontSize: 16, color: 'gray'}}>Başlık</Text>
            <Text style={{fontSize: 16, color: 'black', marginTop: 10}}>
              {todo.title}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#ccc',
            padding: 15,
            backgroundColor: 'white',
          }}>
          <Subtitle size={25} color="#ccc" variant="Outline" />
          <View style={{marginHorizontal: 10, flex: 1}}>
            <Text style={{fontSize: 16, color: 'gray'}}>Açıklama</Text>
            <Text style={{fontSize: 16, color: 'black', marginTop: 10}}>
              {todo.description}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#ccc',
            padding: 15,
            backgroundColor: 'white',
          }}>
          <Calendar size={25} color="#ccc" variant="Outline" />
          <View style={{marginHorizontal: 10, flex: 1}}>
            <Text style={{fontSize: 16, color: 'gray'}}>Başlangıç Tarihi</Text>
            <Text style={{fontSize: 16, color: 'black', marginTop: 10}}>
              {todo.startDate}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#ccc',
            padding: 15,
            backgroundColor: 'white',
          }}>
          <Calendar1 size={25} color="#ccc" variant="Outline" />
          <View style={{marginHorizontal: 10, flex: 1}}>
            <Text style={{fontSize: 16, color: 'gray'}}>Bitiş Tarihi</Text>
            <Text style={{fontSize: 16, color: 'black', marginTop: 10}}>
              {todo.endDate}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: '#ccc',
            padding: 15,
            backgroundColor: 'white',
          }}>
          <Status size={25} color="#ccc" variant="Outline" />
          <View style={{marginHorizontal: 10, flex: 1}}>
            <Text style={{fontSize: 16, color: 'gray'}}>Durumu</Text>
            <Text style={{fontSize: 16, color: 'black', marginTop: 10}}>
              {todo.status}
            </Text>
          </View>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Button
            title="Completed"
            color="#37d57a"
            handleClick={() => handleUpdateTodo(todoStatus.complate)}
          />
          <Button
            title="Development"
            color="#BA68CB"
            handleClick={() => handleUpdateTodo(todoStatus.development)}
          />
          <Button
            title="Test"
            color="#FF8A65"
            handleClick={() => handleUpdateTodo(todoStatus.test)}
          />
          <Button
            title="Close"
            color="#f47373"
            handleClick={() => handleUpdateTodo(todoStatus.closeed)}
          />
          <Button
            handleClick={() => {
              dispatch(removeTodo(todo.id));
              Alert.alert('Todo başarıyla silindi');
              navigation.navigate(TODO_LIST);
            }}
            title="Sil"
            color="red"
          />
          <Button
            handleClick={() => navigation.navigate(UPDATE_TODO, {todo})}
            title="Güncelle"
            color="blue"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default TodoDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
