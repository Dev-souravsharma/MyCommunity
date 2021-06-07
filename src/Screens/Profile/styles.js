import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    padding: 50,
    alignItems: 'center',
    resizeMode: 'contain',
  },
  user: {
    borderRadius: 100,
    width: 100,
    height: 100,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  backIcon: {
    width: 30,
    height: 30,
  },
  iconContainer: {
    position: 'absolute',
    margin: 15,
  },
  button: {
    width: '70%',
    alignSelf: 'center',
    marginBottom: 16,
  },
  progress: {flex: 1, justifyContent: 'center', alignSelf: 'center'},
});
export default styles;
