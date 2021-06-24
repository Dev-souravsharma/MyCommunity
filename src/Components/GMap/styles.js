import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    width: 40,
    height: 40,
  },
  mainContainer: {
    flex: 1,
  },
});
export default styles;
