import {View, Image, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function PrimaryHeader() {
  const user = require('../../assets/img/user.png');

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={user} />
      <Text style={styles.heading}>QuickMark</Text>
      <Text style={styles.subHeading}>
        created by <Text style={styles.subHeadingBold}>@arungovil</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '30%',
    padding: 20,
    justifyContent: 'center',
  },
  avatar: {
    height: 70,
    width: 70,
  },
  heading: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#1E1649',
  },
  subHeading: {
    fontSize: 16,
    color: '#556080',
  },
  subHeadingBold: {
    fontSize: 16,
    color: '#1E1649',
    fontWeight: 'bold',
  },
});
