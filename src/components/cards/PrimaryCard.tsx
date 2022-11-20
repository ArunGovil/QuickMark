import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface PrimaryCardProps {
  title: string;
  icon: any;
}
export default function PrimaryCard({title, icon}: PrimaryCardProps) {
  const card = require('../../assets/img/card.png');

  return (
    <TouchableOpacity style={styles.container}>
      <ImageBackground style={styles.background} source={card}>
        <View style={styles.content}>
          <Image style={styles.icon} source={icon} />
          <Text style={styles.heading}>{title}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    height: 120,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    borderRadius: 24,
    width: '100%',
    height: '100%',
  },
  content: {
    padding: 20,
    height: '100%',
    justifyContent: 'space-between',
  },
  icon: {
    height: 30,
    width: 30,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E1649',
  },
});
