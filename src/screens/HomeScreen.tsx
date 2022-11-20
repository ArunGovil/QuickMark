import {View, StyleSheet} from 'react-native';
import React from 'react';
import {PrimaryHeader, PrimaryList} from '../components';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <PrimaryHeader />
      <PrimaryList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
});
