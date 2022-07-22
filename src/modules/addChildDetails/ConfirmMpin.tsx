import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Color, Fonts, LocalImages, String} from '../../utils';
import CustomHeader2 from '../../components/customHeader/CustomHeader2';
import {CustomActionButton, CustomProgressBar} from '../../components';
import {normalize} from '../../utils/Dimensions';
import ScreenNames from '../../utils/ScreenNames';

const ConfirmMpin = (props: any) => {
  const {screenType} = props;

  const _onPressActionBtn = () => {
    screenType(ScreenNames.SUCCESS);
  };
  return (
    <ImageBackground
      source={LocalImages.background}
      imageStyle={styles.imgBackgroundStyle}
      style={styles.parentContainer}>
      <CustomHeader2 title={String.confirmMpin} icon={true} />
      <CustomProgressBar curntStatus={6} />
      <View style={styles.detailsDescriptionContainer}>
        <Text style={styles.descriptionTextStyle}>
          {String.setMpinDescription}
        </Text>
      </View>
      <CustomActionButton // button next
        title={String.next}
        onPress={_onPressActionBtn}
        customContainerStyle={styles.nextButtonCon}
      />
    </ImageBackground>
  );
};

export default React.memo(ConfirmMpin);

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: Color.pureWhite,
  },
  imgBackgroundStyle: {
    opacity: 0.15,
  },
  detailsDescriptionContainer: {
    marginHorizontal: normalize(60),
    width: '70%',
  },
  titleText: {
    fontFamily: Fonts.muliBold,
    fontSize: normalize(14),
    textAlign: 'center',
    lineHeight: normalize(27),
  },
  descriptionTextStyle: {
    fontFamily: Fonts.muliRegular,
    fontSize: normalize(14),
    textAlign: 'center',
    lineHeight: normalize(27),
  },
  customLefticonStyle: {
    height: normalize(14),
    width: normalize(14),
  },
  customContainerStyle: {
    marginHorizontal: normalize(20),
    height: normalize(36),
    width: normalize(335),
  },
  nextButtonCon: {
    flex: 0.12,
    marginTop: normalize(34),
    backgroundColor: Color.twilightBlue,
  },
});
