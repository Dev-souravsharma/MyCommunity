import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: '#626262',
    height: 60,
  },
  search: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    marginLeft: 16,
    borderRadius: 10,
    marginRight: 16,
    height: 40,
    marginTop: 8,
    marginBottom: 8,
    flex: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchIconPosition: {
    justifyContent: 'center',
    marginLeft: 12,
  },
  searchInput: {
    flex: 1,
    marginLeft: 16,
  },
  textInput: {
    color: '#626262',
  },
  eventContainer: {
    marginTop: 12,
    marginLeft: 16,
    marginRight: 16,
    backgroundColor: '#757575',
    borderRadius: 10,
  },
  eventDetailContainer: {
    flexDirection: 'row',
  },
  dateContainer: {
    padding: 5,
    backgroundColor: '#212121',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  date: {
    marginLeft: 8,
    color: '#fff',
    fontWeight: 'bold',
  },
  iconContainer: {
    justifyContent: 'center',
    marginLeft: 16,
    marginRight: 16,
    height: 80,
  },
  icon: {
    width: 40,
    height: 40,
  },
  infoContainer: {
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 16,
  },
  infoTitle: {
    color: '#FFA000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoSubTitle: {
    color: '#fff',
  },
  flatList: {
    flex: 1,
    marginBottom: 16,
  },
});
export default styles;
