import React from 'react';
import {View} from 'react-native';
// import styles from './styles';
import {SliderBox} from 'react-native-image-slider-box';
// import {AppImages} from '../../utils/Themes';
const Carousal = props => {
  let images = [
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?tree', // Network image
  ];
  return (
    <View>
      <SliderBox
        images={images}
        sliderBoxHeight={400}
        // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
        // parentWidth={this.state.width}
      />
    </View>
  );
};
export default Carousal;
