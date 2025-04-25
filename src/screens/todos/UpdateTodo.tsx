import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import {useDispatch} from 'react-redux';
import {updateTodo} from '../../store/actions/todoActions';
import {TODO_LIST} from '../../utils/routes';
import {todoStatus} from '../../utils/constants';

const UpdateTodo: React.FC = ({navigation, route}) => {
  const {todo} = route.params;
  const [title, setTitle] = useState<string>(todo.title);
  const [description, setDescription] = useState<string>(todo.description);
  const [status, setStatus] = useState<string>(todo.status);
  const [startDate, setStartDate] = useState<string>(todo.startDate);
  const [endDate, setEndDate] = useState<string>(todo.endDate);
  const [id, setId] = useState<string>(todo.id);
  const dispatch = useDispatch();
  const handleUpdateTodo = () => {
    todo.status = status;
    dispatch(
      updateTodo({
        title,
        id,
        description,
        startDate,
        endDate,
        status,
      }),
    );
    Alert.alert('Güncelleme Başarılı', 'Todo Güncellendi', [
      {
        text: 'Tamam',
        onPress: () =>
          navigation.reset({
            index: 1,
            routes: [
              {
                name: TODO_LIST,
              },
            ],
          }),
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Input
          value={title}
          label="Başlık"
          placeholder="Başlık Giriniz"
          onChange={value => setTitle(value.nativeEvent.text)}
        />
        <Input
          value={description}
          label="Açıklama"
          placeholder="Açıklama Giriniz"
          onChange={value => setDescription(value.nativeEvent.text)}
        />
        <Input
          value={startDate}
          label="Başlangıç Tarihi"
          placeholder="Başlangıç Tarihi Giriniz"
          onChange={value => setStartDate(value.nativeEvent.text)}
        />
        <Input
          value={endDate}
          label="Bitiş Tarihi"
          placeholder="Bitiş Tarihi Giriniz"
          onChange={value => setEndDate(value.nativeEvent.text)}
        />
        <Button
          handleClick={() => handleUpdateTodo()}
          title="Güncelle"
          color="#37d67a"
        />
      </View>
    </View>
  );
};

export default UpdateTodo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    padding: 10,
  },
});
