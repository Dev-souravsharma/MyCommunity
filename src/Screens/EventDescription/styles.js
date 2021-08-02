import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'contain',
    padding: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 36,
    color: '#fff',
    margin: 40,
  },
  eventTitle: {
    color: '#fff',
    margin: 10,
    fontSize: 20,
  },
  eventSubTitle: {
    color: '#FFA000',
    margin: 10,
    fontSize: 16,
  },
  cardContainer: {
    marginTop: -60,
  },
  card: {
    backgroundColor: '#626262',
    padding: 8,
    margin: 24,
    alignItems: 'center',
  },
  eventLogo: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginTop: -48,
  },
  backIconContainer: {
    position: 'absolute',
    margin: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  eventDetailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    marginBottom: 8,
  },
  eventDetailPosition: {
    flex: 1,
    alignItems: 'flex-end',
  },
  mapText: {
    color: '#FFA000',
    // fontSize: 16,
  },
  venue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  venueContainer: {
    marginLeft: 16,
    marginRight: 16,
    flex: 3,
  },
  addToCalender: {
    width: '60%',
    marginTop: 8,
    marginBottom: 16,
    alignSelf: 'center',
  },
});
export default styles;
