import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Color, Fonts, LocalImages, String} from '../../utils';
import CustomHeader2 from '../../components/customHeader/CustomHeader2';
import {CustomActionButton, CustomProgressBar} from '../../components';
import {normalize} from '../../utils/Dimensions';

const Intrested = (props: any) => {
  const {screenType} = props;
  const childerName = 'Skye';

  const _onPressActionBtn = () => {
    screenType('SET_MPIN');
  };
  return (
    <ImageBackground
      source={LocalImages.background}
      imageStyle={styles.imgBackgroundStyle}
      style={styles.parentContainer}>
      <CustomHeader2 title={String.interset} icon={true} />
      <CustomProgressBar curntStatus={4} />
      <View style={styles.detailsDescriptionContainer}>
        <Text style={styles.descriptionTextStyle}>
          Tell us more about what languages {childerName} interest more
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

export default Intrested;

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
  nextButtonCon: {
    flex: 0.12,
    marginTop: normalize(34),
    backgroundColor: Color.twilightBlue,
  },
});
