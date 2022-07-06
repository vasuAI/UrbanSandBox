import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';
import {Color, Fonts, LocalImages, String} from '../../utils';
import {normalize} from '../../utils/Dimensions';
import RenderFlatlist from './RenderFlatlist';
import Mocks from '../../utils/Mocks';
/**
 *
 * @returns xw
 */
const Discussion = () => {
  return (
    <ImageBackground
      source={LocalImages.background}
      imageStyle={styles.imgBackgroundStyle}
      style={styles.parentContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headingTextStyle}>{String.discussion}</Text>
        <View style={styles.iconContainer}>
          <Image
            source={LocalImages.seachIcon}
            style={styles.headerSearchIconStyle}
          />
          <Image source={LocalImages.mailIcon} style={styles.headerIconStyle} />
          <Image
            source={LocalImages.profileIcon}
            style={styles.headerIconStyle}
          />
        </View>
      </View>
      <RenderFlatlist item={Mocks.discussionData} />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  imgBackgroundStyle: {
    opacity: 0.2,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: normalize(50),
    marginHorizontal: normalize(15),
  },
  headingTextStyle: {
    fontSize: normalize(20),
    fontFamily: Fonts.muliBold,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: normalize(140),
  },
  headerIconStyle: {
    width: normalize(25),
    height: normalize(25),
    margin: normalize(6),
  },
  headerSearchIconStyle: {
    width: normalize(20),
    height: normalize(20),
    margin: normalize(6),
  },
});
export default React.memo(Discussion);
