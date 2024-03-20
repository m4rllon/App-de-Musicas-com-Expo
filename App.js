import React from 'react';
import TopMusicas from './src/screens';

import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar/>
      <TopMusicas/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1717',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
