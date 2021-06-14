import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linkContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#626262',
  },
  image: {
    backgroundColor: 'yellow',
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 10,
  },
  linkText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    flex: 5,
  },
  forwardIcon: {
    width: 20,
    height: 20,
  },
  forwardIconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
