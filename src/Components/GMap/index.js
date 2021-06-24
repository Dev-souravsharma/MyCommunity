import React from 'react';
import {View, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {AppIcons} from '../../utils/Themes';
import styles from './styles';
import Menu from '../Menu';
const GMap = props => (
  <View style={styles.mainContainer}>
    <Menu
      background="#66BB6A"
      title="Map View"
      goBack={() => {
        props.navigation.goBack();
      }}
    />
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 30.7333,
          longitude: 76.7794,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          coordinate={{
            latitude: 30.7333,
            longitude: 76.7794,
          }}>
          <Image source={AppIcons.marker} style={styles.marker} />
        </Marker>
      </MapView>
    </View>
  </View>
);
export default GMap;
