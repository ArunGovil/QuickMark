import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

interface FloatingRatingProps {
  onPress: any;
}

export default function FloatingButton({onPress}: FloatingRatingProps) {
  const floating = require('../assets/img/floating.png');
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={floating} style={styles.floating} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  floating: {
    width: 100,
    height: 100,
  },
});
