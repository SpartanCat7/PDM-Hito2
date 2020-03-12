/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MyComponent from './src/test/MyComponent.js';
import Logo from './src/login/logo.js'

const App: () => React$Node = () => {
  return (
    <View>
      <Logo/>
      <MyComponent text="Test string"></MyComponent>
    </View>
    
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: "column"
  },
  container: {
    flex: 0.5,
    flexDirection: 'column',
    alignItems: 'center'
  },
  box: {
    height: 100
  }
});

export default App;
