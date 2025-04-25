import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, Text} from 'react-native';
import Button from '../ui/Button';
import {setTotal} from '../../utils/functions';

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counterContainer}>
        <Text style={styles.text}>{count} </Text>
        <Text style={styles.text}>{setTotal(count)} </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Artır" color="green" handleClick={increase} />
        <Button title="Azalt" color="red" handleClick={decrease} />
        <Button title="Reset" color="blue" handleClick={reset} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  counterContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Counter;
