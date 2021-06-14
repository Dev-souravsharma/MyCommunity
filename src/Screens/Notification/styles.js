import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carousalContainer: {
    // flex: 3,
    height: 250,
    marginBottom: 16,
  },
  eventContainer: {
    // flex: 5,
    marginLeft: 8,
    marginRight: 8,
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
