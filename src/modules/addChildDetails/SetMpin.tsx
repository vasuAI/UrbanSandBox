import React from 'react';
import {normalize} from '../../utils/Dimensions';
import ScreenNames from '../../utils/ScreenNames';
import {Color, Fonts, LocalImages, String} from '../../utils';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import CustomHeader2 from '../../components/customHeader/CustomHeader2';
import {
  CustomActionButton,
  CustomProgressBar,
  CustomTextInput,
} from '../../components';

interface Props {
  screenType: Function;
}
const SetMpin = (props: Props) => {
  const {screenType} = props;

  const _onPressActionBtn = () => {
    screenType(ScreenNames.CONFIRM_MPIN);
  };
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
      <View style={styles.childContainer}>
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
        />
        <CustomTextInput
          maxLength={1}
          onChangeText={() => console.log('')}
          customContainerStyle={styles.customInputContainerStyle}
          CustomTextInputStyle={styles.customInputTextStyleStyle}
          keyboardType={'numeric'}
        />
      </View>

      <CustomActionButton // button next
        title={String.next}
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
    marginTop: normalize(34),
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
