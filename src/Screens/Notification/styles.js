import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carousalContainer: {
    flex: 3,
  },
  eventContainer: {
    flex: 5,
  },
  eventItems: {
    flexDirection: 'row',
    margin: 16,
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  icon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  dateColor: {
    color: 'orange',
  },
  iconFlex: {
    flex: 1,
  },
  itemFlex: {
    flex: 4,
  },
});
export default styles;
