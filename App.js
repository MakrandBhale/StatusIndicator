import React, {useState} from 'react';
import {StatusBar, View, StyleSheet, FlatList, Text} from 'react-native';
import StatusIndicator from './components/StatusIndicator/StatusIndicator'

const App = () => {
  return (
    <View style={styles.parent}>
      <StatusIndicator/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  }
})



export default App;
