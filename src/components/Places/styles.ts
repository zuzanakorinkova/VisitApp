import {StyleSheet} from 'react-native';
import fonts from '../../theme/fonts';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  card: {
    marginBottom: 40,
    marginHorizontal: 10,
  },
  image: {
    aspectRatio: 1 / 2,
    borderRadius: 100,
  },
  title: {
    marginTop: 10,
    fontWeight: fonts.weight.semibold,
    textAlign: 'center',
    fontSize: fonts.size.md,
  },
  rating: {
    marginLeft: 5,
    fontSize: fonts.size.sm,
  },
  ratingcard: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    opacity: 0.6,
  },
});

export default styles;
