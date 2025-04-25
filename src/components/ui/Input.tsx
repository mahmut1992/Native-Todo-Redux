import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {InputProps} from './inputProps';

const Input: React.FC<InputProps> = ({placeholder, value, onChange, label}) => {
  return (
    <View>
      <Text style={{fontWeight: 'bold'}}> {label} </Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    fontSize: 20,
    color: '#000',
    backgroundColor: '#fff',
  },
});
