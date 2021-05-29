import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 60,
    elevation: 5,
    justifyContent: 'center',
  },
  toolbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '500',
  },
  icon: {
    marginLeft: 12,
    marginRight: 12,
    width: 20,
    height: 20,
  },
  heading: {
    fontSize: 20,
    color: '#000',
  },
});
export default styles;
