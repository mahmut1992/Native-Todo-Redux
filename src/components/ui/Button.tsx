import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ButtonProps} from '../../models/ui/buttonProps';

const Button: React.FC<ButtonProps> = ({
  title,
  color = '#000000',
  handleClick,
}) => {
  return (
    <TouchableOpacity
      onPress={handleClick}
      style={[styles.container, {backgroundColor: color}]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 5,
  },
});
