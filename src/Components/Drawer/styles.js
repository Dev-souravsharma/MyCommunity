import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
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
    // resizeMode: 'contain',
    width: 70,
    height: 70,
    borderRadius: 200,
  },
  dashboard: {
    margin: 16,
  },
  dashboardTitle: {
    color: '#66BB6A',
  },
  versionContainer: {
    padding: 16,
    justifyContent: 'center',
    marginLeft: 16,
  },
  versionText: {
    color: '#eaeaea',
  },
  logoutIcon: {
    width: 24,
    height: 24,
    marginLeft: 5,
    resizeMode: 'contain',
  },
  logoutText: {color: '#fff'},
});
export default styles;
