import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 8,
    // marginTop: 8,
    // marginBottom: 8,
  },
  footerContainer: {
    height: 50,
    backgroundColor: '#4CAF50',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {},
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginLeft: 16,
    marginRight: 16,
  },
  inputContainer: {
    backgroundColor: '#eaeaea',
    flex: 4,
    marginTop: 5,
    marginBottom: 5,
  },
  input: {
    paddingLeft: 5,
    color: '#000',
  },
  userContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    // elevation: 5,
  },
  userProfile: {
    width: 50,
    height: 50,
    borderRadius: 100,
    margin: 8,
  },
  removeIcon: {
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
  },
  selectdImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userInfo: {
    backgroundColor: '#fff',
    elevation: 5,
  },
  userDetail: {
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: '#626262',
  },
  imageContainer: {
    height: 250,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  background: {
    backgroundColor: '#fff',
    elevation: 0,
  },
  // comment: {
  //   margin: 16,
  // },
  progress: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  post: {
    color: '#626262',
    padding: 16,
  },
});
export default styles;
