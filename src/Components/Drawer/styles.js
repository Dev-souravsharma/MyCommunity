import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    marginStart: 15,
  },
  profileName: {
    margin: 15,
    justifyContent: 'center',
  },
  subtitle: {
    color: '#F57F17',
  },
  title: {
    color: '#eaeaea',
  },
  avtar: {
    resizeMode: 'contain',
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  dashboard: {
    margin: 16,
  },
  dashboardTitle: {
    color: '#66BB6A',
  },
});
export default styles;