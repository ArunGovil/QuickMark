import {View, StyleSheet} from 'react-native';
import React from 'react';
import {PrimaryHeader, PrimaryList, FloatingButton} from '../components';

export default function HomeScreen() {
  const openDrawer = () => {
    console.log('Opening drawer');
  };
  return (
    <View style={styles.container}>
      <PrimaryHeader />
      <PrimaryList />
      <View style={styles.floating}>
        <FloatingButton onPress={openDrawer} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  floating: {
    position: 'absolute',
    right: 12,
    bottom: 24,
  },
});
