import {View, Image, FlatList, Pressable, Modal} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../theme/colors';

const PlaceGallery = ({route}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  const showDetail = (indexNum: number) => {
    setModalVisible(!modalVisible);
    setImageIndex(indexNum);
  };
  const closeDetail = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeDetail}
        presentationStyle="overFullScreen">
        <View style={styles.modal}>
          <View style={styles.modalContainer}>
            <Pressable onPress={closeDetail} style={styles.iconContainer}>
              <View style={styles.icon}>
                <Ionicons
                  name="close"
                  size={24}
                  color={colors.colors.text}
                  style={{padding: 10}}
                />
              </View>
            </Pressable>

            <Image
              source={{uri: route.params.images[imageIndex]}}
              style={styles.modalImage}
            />
          </View>
        </View>
      </Modal>
      <FlatList
        data={route.params.images}
        columnWrapperStyle={{justifyContent: 'space-around'}}
        numColumns={2}
        renderItem={({item, index}) => (
          <Pressable
            style={styles.imagePress}
            onPress={() => showDetail(index)}>
            <Image source={{uri: item}} style={styles.image} />
          </Pressable>
        )}
      />
    </View>
  );
};

export default PlaceGallery;
