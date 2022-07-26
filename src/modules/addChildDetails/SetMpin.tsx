import React, {useEffect, useRef, useState} from 'react';
import {normalize} from '../../utils/Dimensions';
import ScreenNames from '../../utils/ScreenNames';
import {Color, Fonts, LocalImages, String} from '../../utils';
import {
  ImageBackground,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CustomHeader2 from '../../components/customHeader/CustomHeader2';
import {
  CustomActionButton,
  CustomProgressBar,
  CustomTextInput,
} from '../../components';
import OtpScreen from '../../components/otpScreen/OtpScreen';

interface Props {
  screenType: Function;
}
const SetMpin = (props: Props) => {
  const {screenType} = props;

  const _onPressActionBtn = () => {
    screenType(ScreenNames.CONFIRM_MPIN);
  };
  useEffect(() => {
    useRef;
  });
  return (
    <ImageBackground
      source={LocalImages.background}
      imageStyle={styles.imgBackgroundStyle}
      style={styles.parentContainer}>
      <CustomHeader2 title={String.setMpin} icon={true} />
      <CustomProgressBar curntStatus={5} />
      <View style={styles.detailsDescriptionContainer}>
        <Text style={styles.descriptionTextStyle}>
          {String.setMpinDescription}
        </Text>
      </View>
      <OtpScreen />

      <CustomActionButton // button next
        title={String.add}
        onPress={_onPressActionBtn}
        customContainerStyle={styles.nextButtonCon}
      />
    </ImageBackground>
  );
};

export default React.memo(SetMpin);

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: Color.pureWhite,
  },
  imgBackgroundStyle: {
    opacity: 0.15,
  },
  detailsDescriptionContainer: {
    width: '70%',
    marginHorizontal: normalize(60),
  },
  descriptionTextStyle: {
    textAlign: 'center',
    fontSize: normalize(14),
    lineHeight: normalize(27),
    fontFamily: Fonts.muliRegular,
  },

  customContainerStyle: {
    height: normalize(36),
    width: normalize(335),
    marginHorizontal: normalize(20),
  },
  nextButtonCon: {
    flex: 0.12,
    marginBottom: normalize(40),
    backgroundColor: Color.twilightBlue,
  },
  childContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customInputContainerStyle: {
    borderWidth: 1,
    width: normalize(75),
    height: normalize(70),
    borderColor: Color.wheat,
    marginHorizontal: normalize(5),
    backgroundColor: 'transparent',
  },
  customInputTextStyleStyle: {
    marginStart: normalize(28),
    fontSize: normalize(24),
  },
});

{
  /* <CustomTextInput

  maxLength={1}
  onChangeText={() => console.log('')}
  customContainerStyle={styles.customInputContainerStyle}
  CustomTextInputStyle={styles.customInputTextStyleStyle}
  keyboardType={'numeric'}
/>
<CustomTextInput
  maxLength={1}
  onChangeText={() => console.log('')}
  customContainerStyle={styles.customInputContainerStyle}
  CustomTextInputStyle={styles.customInputTextStyleStyle}
  keyboardType={'numeric'}
/>
<CustomTextInput
  maxLength={1}
  onChangeText={() => console.log('')}
  customContainerStyle={styles.customInputContainerStyle}
  CustomTextInputStyle={styles.customInputTextStyleStyle}
  keyboardType={'numeric'}
/>
<CustomTextInput
  maxLength={1}
  onChangeText={() => console.log('')}
  customContainerStyle={styles.customInputContainerStyle}
  CustomTextInputStyle={styles.customInputTextStyleStyle}
  keyboardType={'numeric'}
/> */
}
