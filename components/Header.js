import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const Header = ({title}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>{title}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 23,
    color: '#d3e0ea',
    backgroundColor:'#1687a7',
    fontWeight: "bold",
    textAlign: 'center',
    justifyContent: 'center',
    height: 60,
    textAlignVertical: 'center'
  },
});

export default Header;
