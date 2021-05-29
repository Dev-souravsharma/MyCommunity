import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    height: 60,
    elevation: 5,
    justifyContent: 'space-between',
  },
  backIcon: {
    marginLeft: 12,
    marginRight: 12,
    width: 30,
    height: 30,
  },
  iconPosition: {
    justifyContent: 'center',
  },
  titlePosition: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});
export default styles;
