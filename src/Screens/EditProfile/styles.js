import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuContainer: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#66BB6A',
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
  userProfile: {
    width: 80,
    height: 80,
    borderRadius: 100,
  },
  user: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-around',
  },
  upload: {
    justifyContent: 'center',
    padding: 10,
  },
  uploadText: {
    fontSize: 16,
    color: 'white',
  },
  uploadContainer: {
    backgroundColor: '#626262',
    overflow: 'hidden',
    borderRadius: 30,
    width: 'auto',
    height: 40,
  },
  btnMargin: {
    justifyContent: 'center',
  },
  userDetail: {
    flexDirection: 'row',
    marginLeft: 16,
    marginRight: 16,
  },
  userTitle: {
    color: '#626262',
    fontWeight: 'bold',
    marginLeft: 15,
    marginRight: 15,
  },
  userSubTitle: {
    color: 'black',
    fontWeight: '500',
  },
  subTitleContainer: {
    justifyContent: 'space-evenly',
    flex: 2,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
  },
  inputContainer: {
    marginBottom: 16,
  },
  zipContainer: {
    flexDirection: 'row',
  },
  state: {
    flex: 1,
    marginRight: 5,
  },
  zipCode: {
    flex: 1,
    marginLeft: 5,
  },
  buttonContainer: {
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 24,
    marginRight: 24,
  },
});

export default styles;
