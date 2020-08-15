import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MyStack } from './src/pages/Stack';

export default function App() {
  return (
    <View style={styles.container}>
      <MyStack />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F0DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
