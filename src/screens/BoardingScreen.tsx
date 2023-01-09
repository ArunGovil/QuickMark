import {View, Text} from 'react-native';
import React from 'react';
import FlatBoard from 'react-native-flatboard';
import {useNavigation} from '@react-navigation/native';

const data = [
  {
    id: 1,
    title: 'Quickmark your Bookmarks',
    description: 'Saving your bookmarks have never been this easy!',
    icon: require('../assets/icons/bookmark.png'),
  },
  {
    id: 2,
    title: 'Works Online and Offline',
    description: 'Gone offline? Quickmark works!',
    icon: require('../assets/icons/bookmark.png'),
  },
];

export default function BoardingScreen() {
  const navigation = useNavigation();
  function handleFinish() {
    navigation.navigate('Sidebar');
  }
  return (
    <View style={{flex: 1}}>
      <FlatBoard
        data={data}
        onFinish={handleFinish}
        accentColor="#000"
        variant="modern"
        buttonTitle="Start Quickmark"
      />
    </View>
  );
}
