import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Color, Fonts, LocalImages, String} from '../../utils';
import CustomHeader2 from '../../components/customHeader/CustomHeader2';
import {CustomActionButton, CustomProgressBar} from '../../components';
import {normalize} from '../../utils/Dimensions';
import ScreenNames from '../../utils/ScreenNames';
import OtpScreen from '../../components/otpScreen/OtpScreen';
import ActionType from '../../actions/ActionType';
import {showToast} from '../../utils/CommonFunction';
import {useDispatch, useSelector} from 'react-redux';
import {ChildAction} from '../../actions';

const ConfirmMpin = (props: any) => {
  const {screenType} = props;
  const [mPin2, setMpin2] = useState('');
  const dispatch: Function = useDispatch();
  const {Mpin, childId} = useSelector((state: any) => state.childReducer);
  const _onPressActionBtn = () => {
    if (Mpin === mPin2) {
      const params = {
        mPin: Mpin,
        stepNumber: 5,
        childId: childId,
      };

      dispatch(
        ChildAction.hitAddChildApi(
          params,
          (response: any) => {
            if (response == 'Success') {
              screenType(ScreenNames.SUCCESS);
            }
          },
          (error: any) => {
            console.log(error);
          },
        ),
      );
    } else {
      showToast(String.missMatchMpin);
    }
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
      <OtpScreen setMpin1={setMpin2} />
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
    marginBottom: normalize(40),
    backgroundColor: Color.twilightBlue,
  },
});
