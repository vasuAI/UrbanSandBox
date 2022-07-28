import {
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  CustomTextInput,
  CustomProgressBar,
  CustomActionButton,
  CustomLoader,
  CustomHeader2,
} from '../../components';
import moment from 'moment';
import {normalize} from '../../utils/Dimensions';
import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ChildAction, ActionType} from '../../actions';
import ImagePicker from 'react-native-image-crop-picker';
import {showAlert, showToast} from '../../utils/CommonFunction';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Color, Fonts, LocalImages, String, ScreenNames} from '../../utils';

interface Props {
  screenType: Function;
}
const AddBasicDetails = (props: Props) => {
  const {screenType} = props;
  let loginUserName = 'fabio';
  const {
    userDetails: {
      userData: {_id},
    },
  } = useSelector((state: any) => state.authReducer);
  const dispatch: Function = useDispatch();
  const {name, DOB, profileImg, location, schoolName, gender} = useSelector(
    (state: any) => state.childReducer,
  );

  const [radioButtonStatus, setRadioButtonStatus] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  /**
   * @description name input handle
   */
  const onChangeName = useCallback((value: string) => {
    return dispatch({type: ActionType.CHILD_NAME, payload: {name: value}});
  }, []);

  /**
   * @description date of birth input handle
   */

  const handleConfirm: any = (date: string) => {
    dispatch({
      type: ActionType.CHILD_DOB,
      payload: {DOB: date},
    });
    hideDatePicker();
  };

  /**
   * @description school name input handle
   */
  const onChangeSchoolName = useCallback(
    (value: string) => {
      return dispatch({
        type: ActionType.CHILD_NAME,
        payload: {schoolName: value},
      });
    },
    [schoolName],
  );

  /**
   * @description location input handle
   */
  const onChangeLocation = useCallback(
    (value: string) => {
      return dispatch({
        type: ActionType.CHILD_NAME,
        payload: {location: value},
      });
    },
    [location],
  );

  /**
   *
   * @param value
   * @param number
   * @returns gender Value
   */
  const handelRadioBtn = (value: string, number: number) => {
    setRadioButtonStatus(value);
    let selectedGender = number;
    return dispatch({
      type: ActionType.GENDER,
      payload: {gender: selectedGender},
    });
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  /**
   * @params
   * @return error message
   * @descrption validate input fields on press next
   */
  const _onPressNext = useCallback(() => {
    if (
      name.trim().length === 0 ||
      location.trim().length === 0 ||
      schoolName.trim().length === 0 ||
      DOB.length === 0 ||
      !gender
    )
      showToast(String.showEmptyFieldError);
    else if (name.length <= 2) {
      showToast(String.errorName);
    } else if (schoolName.length <= 4) {
      showToast(String.errorSchoolName);
    } else if (location.trim().length <= 4) {
      showToast(String.errorLocation);
    } else {
      submitStep1();
    }
  }, [name, DOB, schoolName, location, gender]);

  /**
   * @description upload image
   */
  const _onPressUploadPic = () => {
    ImagePicker.openPicker({
      cropping: true,
    })
      .then(image => {
        let childImage;
        if (Platform.OS === 'ios') {
          childImage = image.sourceURL;
        } else {
          childImage = `file://${image.path}`;
        }
        dispatch({
          type: ActionType.CHILD_PROFILE_IMAGE,
          payload: {profileImg: childImage},
        });
      })
      .catch(error => {
        console.log(error);
        showAlert(error);
      });
  };

  /**
   *
   * @returns date
   */
  const maximumDate = () => {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 2);
    return date;
  };
  const minimumDate = () => {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 18);
    return date;
  };
  /**
   * @description
   */
  const submitStep1 = () => {
    // isLoading(true);
    let params = {
      dob: DOB,
      name: name,
      gender: gender,
      school: schoolName,
      lat: 0,
      long: 0,
      imageUrl: profileImg,
      stepNumber: 1,
      address: location,
    };

    dispatch(
      ChildAction.hitAddChildApi(
        params,
        (response: any) => {
          // isLoading(false);
          if (response == 'Success') {
            screenType(ScreenNames.LANG_INTEREST);
          }
        },
        (error: any) => {
          // isLoading(false);
          console.log(error);
        },
      ),
    );
  };

  return (
    <ImageBackground
      source={LocalImages.background}
      style={styles.parentContainer}
      imageStyle={styles.imgBackgroundStyle}>
      <CustomHeader2
        icon={true}
        screenType={ScreenNames.INTERESTED}
        title={String.basicDetails}
      />
      <ScrollView style={styles.childContainer}>
        <CustomProgressBar curntStatus={1} />
        <View style={styles.detailsDescriptionContainer}>
          <Text
            style={styles.titleText}>{`${String.hey} ${loginUserName},`}</Text>
          <Text style={styles.descriptionTextStyle}>
            {String.basicDetailDescription}
          </Text>
        </View>
        <View style={styles.profileContiner}>
          <Image
            resizeMode={profileImg ? 'cover' : 'center'}
            source={profileImg ? {uri: profileImg} : LocalImages.skyIcon}
            style={styles.imageContainer}
          />
        </View>
        <TouchableOpacity
          style={styles.editIconContainer}
          onPress={_onPressUploadPic}>
          <Image source={LocalImages.editIcon} style={styles.editIconStyle} />
        </TouchableOpacity>

        <CustomTextInput // input name
          value={name}
          keyboardType={'default'}
          placeholder={String.name}
          onChangeText={onChangeName}
          leftIcon={LocalImages.nameIcon}
          customContainerStyle={styles.textContainerStyle}
        />

        <TouchableOpacity // input DOB
          onPress={showDatePicker}
          activeOpacity={0.7}
          style={styles.dateInput}>
          <Image style={styles.dateImage} source={LocalImages.dateIcon} />
          <Text
            style={[
              styles.dateText,
              DOB ? {color: Color.black} : {color: Color.grey},
            ]}>
            {DOB ? moment(DOB).format('DD-MM-YYYY') : String.DOB}
          </Text>
        </TouchableOpacity>

        <CustomTextInput // input school
          value={schoolName}
          keyboardType={'default'}
          placeholder={String.school}
          onChangeText={onChangeSchoolName}
          leftIcon={LocalImages.schoolIcon}
          customContainerStyle={styles.textContainerStyle}
        />
        <CustomTextInput // input location
          value={location}
          keyboardType={'default'}
          placeholder={String.location}
          onChangeText={onChangeLocation}
          leftIcon={LocalImages.location}
          customContainerStyle={styles.textContainerStyle}
        />
        <Text style={styles.genderContainer}>{String.gender}</Text>
        <View style={styles.genderSelectionView}>
          <TouchableOpacity // radio btn gender
            onPress={() => handelRadioBtn(String.girl, 1)}
            style={[
              styles.radioButtonStyle,
              radioButtonStatus === String.girl && styles.radioButtonActive,
            ]}
          />
          <Text style={styles.genderSelectionTextStyle}>{String.girl}</Text>
          <TouchableOpacity
            onPress={() => handelRadioBtn(String.boy, 2)}
            style={[
              styles.radioButtonStyle,
              radioButtonStatus === String.boy && styles.radioButtonActive,
            ]}
          />
          <Text style={styles.genderSelectionTextStyle}>{String.boy}</Text>
        </View>

        <CustomActionButton // button next
          title={String.next}
          // isDisable={isDisable}
          onPress={_onPressNext}
          customContainerStyle={styles.nextButtonCon}
        />
      </ScrollView>
      <DateTimePicker // date selector
        mode="date"
        date={maximumDate()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={maximumDate()}
        minimumDate={minimumDate()}
        isVisible={isDatePickerVisible}
      />
      {isLoading && <CustomLoader />}
    </ImageBackground>
  );
};

export default React.memo(AddBasicDetails);

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: Color.pureWhite,
  },
  childContainer: {
    flex: 1,
  },
  imgBackgroundStyle: {
    opacity: 0.15,
  },
  detailsDescriptionContainer: {
    width: '70%',
    marginHorizontal: normalize(60),
  },
  titleText: {
    textAlign: 'center',
    color: Color.black,
    fontSize: normalize(14),
    lineHeight: normalize(27),
    fontFamily: Fonts.muliBold,
  },
  descriptionTextStyle: {
    color: Color.black,
    textAlign: 'center',
    fontSize: normalize(14),
    lineHeight: normalize(27),
    fontFamily: Fonts.muliRegular,
  },
  profileContiner: {
    alignSelf: 'center',
    width: normalize(100),
    height: normalize(100),
    borderRadius: normalize(50),
    marginVertical: normalize(18),
    backgroundColor: Color.duckEggBlue,
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    marginBottom: normalize(30),
    borderRadius: normalize(50),
  },
  editIconContainer: {
    top: normalize(230),
    alignItems: 'center',
    position: 'absolute',
    width: normalize(27),
    left: normalize(210),
    height: normalize(27),
    justifyContent: 'center',
    borderRadius: normalize(50),
    backgroundColor: Color.twilightBlue,
  },
  editIconStyle: {
    width: normalize(13),
    height: normalize(13),
  },
  textContainerStyle: {
    borderWidth: 1,
    borderColor: Color.wheat,
    backgroundColor: Color.pureWhite,
  },
  genderTextStyle: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: Color.black,
    fontSize: normalize(16),
    marginTop: normalize(20),
    marginLeft: normalize(16),
    lineHeight: normalize(25),
  },
  radioButtonStyle: {
    width: normalize(20),
    height: normalize(20),
    borderColor: Color.grey,
    borderWidth: normalize(1),
    borderRadius: normalize(10),
  },
  radioButtonActive: {
    borderWidth: normalize(5),
    borderRadius: normalize(10),
    borderColor: Color.twilightBlue,
  },
  genderSelectionView: {
    flexDirection: 'row',
    width: normalize(140),
    marginTop: normalize(18),
    marginLeft: normalize(9),
    justifyContent: 'space-around',
  },
  genderSelectionTextStyle: {
    textAlign: 'left',
    color: Color.black,
    letterSpacing: 0.7,
    bottom: normalize(3),
    fontSize: normalize(16),
    lineHeight: normalize(25),
  },
  genderContainer: {
    textAlign: 'left',
    marginStart: normalize(16),
    fontSize: normalize(16),
    lineHeight: normalize(25),
    fontFamily: Fonts.muliBold,
  },
  nextButtonCon: {
    flex: 0.5,
    marginTop: normalize(34),
    backgroundColor: Color.twilightBlue,
  },
  dateInput: {
    flexDirection: 'row',
    alignItems: 'center',
    height: normalize(50),
    borderColor: Color.wheat,
    borderWidth: normalize(1),
    borderRadius: normalize(10),
    marginVertical: normalize(6),
    marginHorizontal: normalize(16),
  },
  dateImage: {
    marginLeft: normalize(12),
  },
  dateText: {
    color: Color.grey,
    fontSize: normalize(16),
    marginLeft: normalize(10),
  },
});
