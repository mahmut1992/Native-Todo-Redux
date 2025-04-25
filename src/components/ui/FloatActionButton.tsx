import {useNavigation} from '@react-navigation/native';
import {Add} from 'iconsax-react-nativejs';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ADD_TODO} from '../../utils/routes';

const FloatActionButton: React.FC = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ADD_TODO)}
      style={styles.container}>
      <Add size={35} color="white" />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    right: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6200ee',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
