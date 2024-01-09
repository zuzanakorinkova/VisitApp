import {View, FlatList} from 'react-native';
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import PlacesView from '../../components/PlacesView';
import styles from './styles';
import categories from '../../assets/data/categories.json';
import places from '../../assets/data/places.json';
import TopCategories from '../../components/TopCategories';

const HomeScreen = () => {
  // if using Andriod, it is important to Wrap everything with <GestureHandlerRootView style={{flex: 1}}>
  const [category, setCategory] = useState<string | undefined>();
  const onPress = (name: string | undefined) => {
    setCategory(name);
  };
  if (category === undefined) {
    setCategory('All');
  }

  // Screentop on every page with pan gesture handler

  return (
    <View>
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          keyExtractor={item => item.id}
          data={categories}
          renderItem={({item}) =>
            item && <TopCategories category={item} onClick={onPress} />
          }
        />
      </View>
      <PlacesView places={places} category={category} />
    </View>
  );
};

export default HomeScreen;
