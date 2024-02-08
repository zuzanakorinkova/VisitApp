import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import user from '../../assets/data/user.json';
import Button from '../../components/Button/Button';
import {useNavigation} from '@react-navigation/native';
// import {useRoute} from '@react-navigation/native';
import {
  ProfileNavigationProp,
  // MyProfileRouteProp,
  // UserProfileRouteProp,
} from '../../types/navigation';

const ProfileHeader = () => {
  // const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<ProfileNavigationProp>();

  //const {userId} = route.params // later import data with ID from database

  //console.warn('user', userId)

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.userHeader}>
          <Text style={styles.userInfo}>
            <Text style={styles.name}>{user.name}</Text> •{' '}
            <Text style={styles.username}>{user.username}</Text>
          </Text>
          <View style={styles.likes}>
            <AntDesign name={'hearto'} size={24} color={colors.colors.text} />
            <Text style={styles.nofLikes}>{user.nofLikes}</Text>
          </View>
        </View>
        <Text style={styles.bio}>{user.bio}</Text>
        <View style={styles.buttons}>
          <Button
            text="Edit Profile"
            onPress={() => navigation.navigate('EditProfile')}
            inline
            backgroundColor={colors.colors.primaryButton}
            color={colors.colors.text}
          />
          <Button
            text="Upload Post"
            onPress={() => navigation.navigate('PostUpload')}
            inline
            backgroundColor={colors.colors.text}
            color={colors.colors.black}
            margin={10}
          />
        </View>
      </View>
    </View>
  );
};
export default ProfileHeader;
