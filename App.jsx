import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Hello from './src/components/Hello';

export default function App() {
  return (
    <View style={styles.container}>
      <Hello bang>World</Hello>
      <Hello bang style={{ fontSize: 16 }}>
        World
      </Hello>
      <Text>hogehoge</Text>
      {/* eslint-disable*/}
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
