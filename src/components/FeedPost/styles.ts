import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  post: {
    padding: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1 / 1,
    borderRadius: 50,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    display: 'flex',
    marginBottom: 10,
  },
  avatar: {
    width: 45,
    aspectRatio: 1,
    borderRadius: 25,
  },
  description: {
    position: 'absolute',
    top: 260,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    padding: 20,
  },
  like: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default styles;
