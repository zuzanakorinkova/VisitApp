import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';


const styles = StyleSheet.create({
   container: {
      marginTop: 15,

   },
   imagePress: {
      flex: 1,
      maxWidth: '40%',
      aspectRatio: 1/2,
   },
 image: {
   flex: 1,
   borderRadius: 100
 },
 text: {
   color: colors.colors.text
 },
 modal: {
   flex: 1,
   justifyContent: 'flex-end'
 },
 modalContainer: {
   height: '80%',
   borderRadius: 30,
 },
 iconContainer: {
   alignItems: 'center',
 },
 icon: {
   backgroundColor: colors.colors.textOpacity, 
   borderRadius: 50, 
   margin: 15,
 },
 modalImage: {
   width: '100%',
   flex: 1,
   borderTopLeftRadius: 50,
   borderTopRightRadius: 50,
 }

})

export default styles;