import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {TodoItemProps} from '../../models/ui/todoItemProps';
import {
  ArrangeHorizontalCircle,
  Clock,
  CloseCircle,
  InfoCircle,
  PlayCircle,
  RepeatCircle,
  ShieldCross,
  TickCircle,
} from 'iconsax-react-nativejs';
import {todoStatus} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {TODO_DETAIL} from '../../utils/routes';

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
  const navigation = useNavigation();
  const setStatusIcon = () => {
    switch (todo.status) {
      case todoStatus.open:
        return <PlayCircle size={24} color="#2ccce4" variant="Bold" />;

      case todoStatus.closeed:
        return <CloseCircle size={24} color="red" variant="Bold" />;
      case todoStatus.development:
        return <RepeatCircle size={24} color="#BA68CB" variant="Bold" />;

      case todoStatus.complate:
        return <TickCircle size={24} color="#37d57a" variant="Bold" />;

      case todoStatus.test:
        return (
          <ArrangeHorizontalCircle size={24} color="#FF8A65" variant="Bold" />
        );

      default:
        return <InfoCircle size={24} color="#37d57a" variant="Bold" />;
    }
  };
  return (
    <Pressable
      onPress={() => navigation.navigate(TODO_DETAIL, {todo})}
      style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'column', gap: 10}}>
          <Text style={{fontSize: 24}}> {todo.title} </Text>
          <Text style={{fontSize: 14}}> {todo.description} </Text>
        </View>
        <View style={{flexDirection: 'row', marginRight: 15}}>
          <Clock size={20} color="gray" />
          <Text style={{fontSize: 16}}> {todo.startDate} -</Text>
          <Text style={{fontSize: 16}}> {todo.endDate} </Text>
        </View>
      </View>

      <View>{setStatusIcon()}</View>
    </Pressable>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginVertical: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
  },
});
