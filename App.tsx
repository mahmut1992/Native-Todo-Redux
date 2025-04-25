import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import RootStack from './src/router/routeNavigator';
import {Provider} from 'react-redux';
import store from './src/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
