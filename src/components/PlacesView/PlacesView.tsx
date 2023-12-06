import { View, Text, FlatList } from 'react-native'
import React from 'react';
import Places from '../Places';
import colors from '../../theme/colors';
import { IPlace, ICategory } from '../../types/models';

export interface ChildProps{
    places?: IPlace[],
    category?: string | undefined
}

const PlacesView = ({places, category}: ChildProps) => {
  return (
    <FlatList
        columnWrapperStyle={{justifyContent: 'space-around'}}
        numColumns={2}
        keyExtractor={item => item.id}
        style={{backgroundColor: colors.colors.background}} 
        data={places}
        renderItem={({item}) => item && <Places place={item} category={category}/>} 
        ListFooterComponent={<View style={{height: 150}}/>}
        />

  )
}

export default PlacesView