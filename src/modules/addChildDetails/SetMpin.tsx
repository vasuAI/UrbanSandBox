import {normalize} from '../../utils/Dimensions';
import {
  CustomActionButton,
  CustomProgressBar,
  CustomHeader2,
} from '../../components';
import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import {ActionType} from '../../actions';
import {showToast} from '../../utils/CommonFunction';
import OtpScreen from '../../components/otpScreen/OtpScreen';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Color, Fonts, LocalImages, String, ScreenNames} from '../../utils';

interface Props {
  screenType: Function;
}
const SetMpin = (props: Props) => {
  const {screenType} = props;
  const [mPin, setMpin] = useState('');

  const dispatch: Function = useDispatch();
  const _onPressActionBtn = () => {
    if (mPin.length > 3) {
      screenType(ScreenNames.CONFIRM_MPIN);
      dispatch({
        type: ActionType.ADD_MPIN,
        payload: {Mpin: mPin},
      });
    } else {
      showToast(String.showEmptyFieldError);
    }
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
      <OtpScreen setMpin1={setMpin} />

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
