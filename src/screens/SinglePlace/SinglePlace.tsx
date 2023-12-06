import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'
import { useRoute} from '@react-navigation/native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import TopTabNavigator from '../../navigation/TopTab/TopTabNavigator';
import PlaceGallery from '../../components/PlaceGallery';
import PlaceDescription from '../../components/PlaceDescription';
import Ionicons from 'react-native-vector-icons/Ionicons';
import places from '../../assets/data/places.json';
// import BackButton from '../../components/BackButton/BackButton';


const SinglePlace = () => {
const route = useRoute();

//const {placeId} = route.params
// query place data from database with placeId
// better to send only IDs than full objects

const {place} = route.params


  return (
    <View style={[styles.wrapper, {backgroundColor: colors.colors.background}]}>
            <Image style={styles.image} source={{uri: place.mainImage}} />

            {/* <BackButton /> */}
         
      
          <View style={styles.headerWrapper}>
             <View style={styles.titleWrapper}>
                <Text style={[styles.title, {color: colors.colors.text}]}>{place.title}</Text>
                <View style={styles.ratingcard}>
                <AntDesign name="hearto" size={20} color="white" />
                <Text style={[styles.rating, {color: colors.colors.text}]}>{place.nofLikes}</Text>
            </View>
              </View>
                <View style={styles.location}>
                  <Ionicons name="location" size={16} color={colors.colors.inactive} />
                </View>
            </View>
           
      
    <TopTabNavigator 
    left={"25%"}
    TabScreenOne={PlaceDescription} TabScreenTitleOne="Place Description" 
    TabScreenTwo={PlaceGallery} TabScreenTitleTwo="Gallery" screenParamsOne={place} 
    screenParamsTwo={place}/>
       
    </View>
  )
}

export default SinglePlace