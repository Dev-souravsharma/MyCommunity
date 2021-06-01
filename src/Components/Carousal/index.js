import React from 'react';
import {View, Image, FlatList} from 'react-native';
import styles from './styles';
const Carousal = props => {
  console.log(props.data);
  return (
    <View>
      <FlatList
        data={props.data}
        horizontal={true}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};
export default Carousal;
