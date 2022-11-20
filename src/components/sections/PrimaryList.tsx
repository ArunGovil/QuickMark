import {View, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {PrimaryCard} from '../../components';

const Items = [
  {
    id: 1,
    title: 'Links',
    icon: require('../../assets/img/user.png'),
  },
  {
    id: 2,
    title: 'Quotes',
    icon: require('../../assets/img/user.png'),
  },
  {
    id: 3,
    title: 'Passwords',
    icon: require('../../assets/img/user.png'),
  },
  {
    id: 4,
    title: 'Notes',
    icon: require('../../assets/img/user.png'),
  },
];

export default function PrimaryList() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        numColumns={2}
        data={Items}
        renderItem={({item}) => (
          <PrimaryCard title={item.title} icon={item.icon} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: '100%',
  },
  list: {},
});
