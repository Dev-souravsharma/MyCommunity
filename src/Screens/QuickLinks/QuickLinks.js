import React, {useEffect} from 'react';
import {
  Text,
  View,
  Image,
  Pressable,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Toolbar from '../../Components/Toolbar';
import {getQuickLinks} from '../../redux/actions/action';
import {english} from '../../utils/Language';
import {AppIcons} from '../../utils/Themes';
// import {WebView} from 'react-native-webview';
import styles from './styles';
// import MyWebComponent from '../../Components/WebView';
const QuickLinks = ({navigation, quickLinks, userdata}) => {
  useEffect(() => {
    quickLinks();
  }, [quickLinks]);
  // console.log(userdata.userdata.list);
  return (
    <View style={styles.container}>
      <Toolbar title={english.constantQuickLinks} navigation={navigation} />

      <View style={styles.container}>
        {userdata.loading === true && (
          <View style={styles.progress}>
            {<ActivityIndicator size="large" color="#00ff00" />}
          </View>
        )}

        {userdata.loading === false && (
          <FlatList
            data={userdata.userdata.list}
            keyExtractor={item => item.feedId}
            renderItem={({item, index}) => {
              console.log('Flat is', item);
              return (
                <View style={styles.container}>
                  <Pressable
                    onPress={() => {
                      navigation.navigate('WebView', {link: item.link});
                    }}>
                    <View style={styles.linkContainer}>
                      <Image source={{uri: item.image}} style={styles.image} />
                      <Text style={styles.linkText}>{item.title}</Text>
                      <View style={styles.forwardIconContainer}>
                        <Image
                          source={AppIcons.forward}
                          style={styles.forwardIcon}
                        />
                      </View>
                    </View>
                  </Pressable>
                </View>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

const mapStateToProps = state => {
  console.log('Quick Links State  is\n', state.quickLinks);
  // console.log('Event State 2nd is\n', state.eventData.userdata);
  return {
    userdata: state.quickLinks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    quickLinks: bindActionCreators(getQuickLinks, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuickLinks);
