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
    fontSize: 16,
    fontWeight: 'bold',
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
    padding: 32,
    margin: 16,
    alignItems: 'center',
  },
  eventLogo: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginTop: -67,
  },
  backIconContainer: {
    position: 'absolute',
    margin: 16,
  },
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  eventDetailContainer: {
    alignItems: 'center',
  },
  eventDetailPosition: {
    flexDirection: 'row',
    marginTop: 10,
  },
  mapText: {
    color: '#FFA000',
    fontSize: 16,
  },
  venue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#626262',
  },
  venueContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
});
export default styles;
