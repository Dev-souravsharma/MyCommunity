import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: '#eaeaea',
    padding: 8,
    marginRight: 16,
    // elevation: 8,
  },
  detail: {
    justifyContent: 'center',
    flex: 3,
    marginLeft: 10,
  },
  icon: {
    resizeMode: 'contain',
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  map: {
    color: 'orange',
    fontSize: 16,
  },
  iconContainer: {
    // justifyContent: 'center',
    marginRight: 8,
    alignItems: 'flex-end',
    flex: 1,
  },
});
export default styles;
