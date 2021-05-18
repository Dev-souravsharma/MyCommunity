import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: '#eaeaea',
    padding: 10,
    elevation: 8,
  },
  detail: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 10,
  },
  icon: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  map: {
    color: 'orange',
    fontSize: 16,
  },
});
export default styles;
