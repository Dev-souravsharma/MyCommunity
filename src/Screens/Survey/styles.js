import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
    borderBottomWidth: 1,
  },
  titleContainer: {
    flex: 3,
    marginLeft: 6,
    padding: 8,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
  },
  iconContainer: {
    flex: 1,
    marginRight: 6,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    width: 20,
    height: 20,
  },
  iconArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default styles;
