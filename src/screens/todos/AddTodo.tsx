import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import {useDispatch} from 'react-redux';
import {addTodo} from '../../store/actions/todoActions';
import {TODO_LIST} from '../../utils/routes';
import {todoStatus} from '../../utils/constants';

const AddTodo: React.FC = ({navigation, route}) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>(todoStatus.open);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [id, setId] = useState<string>(
    Math.random().toString(36).substring(2, 9),
  );
  const dispatch = useDispatch();
  const handleSaveTodo = () => {
    if (
      title.trim() === '' ||
      description.trim() === '' ||
      startDate.trim() === '' ||
      endDate.trim() === ''
    ) {
      Alert.alert('Lütfen tüm alanları doldurunuz!!');
      return;
    }
    dispatch(addTodo({title, description, status, startDate, endDate, id}));
    setTitle('');
    setDescription('');
    Alert.alert('Todo başarı ile eklendi');
    navigation.navigate(TODO_LIST);
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
          handleClick={() => handleSaveTodo()}
          title="Kaydet"
          color="#37d67a"
        />
      </View>
    </View>
  );
};

export default AddTodo;

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
