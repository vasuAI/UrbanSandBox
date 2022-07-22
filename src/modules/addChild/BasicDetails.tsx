import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Color, Fonts, LocalImages, String} from '../../utils';
import CustomHeader2 from '../../components/customHeader/CustomHeader2';
import {normalize} from '../../utils/Dimensions';
import {
  CustomActionButton,
  CustomTextInput,
  CustomProgressBar,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import ActionType from '../../actions/ActionType';
import ImagePicker from 'react-native-image-crop-picker';
import {showAlert, showToast} from '../../utils/CommonFunction';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';

interface Props {
  screenType: Function;
}
const BasicDetails = (props: Props) => {
  const {screenType} = props;
  let loginUserName = 'fabio';
  const dispatch = useDispatch();
  const {name, DOB, profileImg, location, schoolName} = useSelector(
    (state: any) => state.childReducer,
  );
  const [check, isCheck] = useState(true);
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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
      payload: {DOB: moment(date).format('DD-MM-YYYY')},
    });
    setDate(date);
    hideDatePicker();
  };

  /**
   * @description school name input handle
   */
  const onChangeSchoolName = useCallback((value: string) => {
    return dispatch({
      type: ActionType.CHILD_NAME,
      payload: {schoolName: value},
    });
  }, []);

  /**
   * @description location input handle
   */
  const onChangeLocation = useCallback((value: string) => {
    return dispatch({
      type: ActionType.CHILD_NAME,
      payload: {location: value},
    });
  }, []);

  /**
   *
   * @param value
   * @returns gender Value
   */
  const handelRadioBtn = (value: any) => {
    let selectedGender = value;
    isCheck(!check);
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
   */
  const _onPressNext = useCallback(() => {
    if (
      name.trim().length === 0 ||
      location.trim().length === 0 ||
      schoolName.trim().length === 0 ||
      DOB.trim().length === 0
    )
      showToast(String.showEmptyFieldError);
    else if (name.length <= 2) {
      showToast('String.Name_ERROR');
    } else if (schoolName.length <= 4) {
      showToast(String.errorSchoolName);
    } else if (location.trim().length <= 4) {
      showToast(String.errorLocation);
    } else {
      screenType('LANG_INTEREST');
    }
  }, [name, DOB, schoolName, location]);

  const _onPressUploadPic = () => {
    ImagePicker.openPicker({
      cropping: true,
    })
      .then(image => {
        let childImage = image.sourceURL;
        dispatch({
          type: ActionType.CHILD_PROFILE_IMAGE,
          payload: {profileImg: childImage},
        });
        showToast(String.profilePicUpdated);
      })
      .catch(error => {
        console.log(error);
        showAlert(error);
      });
  };
  const maximumDate = () => {
    let date = new Date();
    date.setFullYear(date.getFullYear() - 2);
    return date;
  };

  return (
    <ImageBackground
      source={LocalImages.background}
      style={styles.parentContainer}
      imageStyle={styles.imgBackgroundStyle}>
      <CustomHeader2
        icon={true}
        screenType={'INTERESTED'}
        title={String.basicDetails}
      />
      <ScrollView style={styles.childContainer}>
        <CustomProgressBar curntStatus={0} />
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
              date ? {color: Color.black} : {color: Color.grey},
            ]}>
            {date ? moment(date).format('DD-MM-YYYY') : String.DOB}
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
          <TouchableOpacity
            onPress={() => handelRadioBtn(String.girl)}
            style={check ? styles.radioOuterView : styles.radioInnnerView}
          />
          <Text style={styles.genderSelectionTextStyle}>{String.girl}</Text>
          <TouchableOpacity
            onPress={() => handelRadioBtn(String.boy)}
            style={check ? styles.radioInnnerView : styles.radioOuterView}
          />
          <Text style={styles.genderSelectionTextStyle}>{String.boy}</Text>
        </View>
        <CustomActionButton // button next
          title={String.next}
          onPress={_onPressNext}
          customContainerStyle={styles.nextButtonCon}
        />
      </ScrollView>
      <DateTimePicker
        mode="date"
        date={maximumDate()}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={maximumDate()}
        isVisible={isDatePickerVisible}
      />
    </ImageBackground>
  );
};

export default React.memo(BasicDetails);

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
  profileContiner: {
    alignSelf: 'center',
    backgroundColor: Color.duckEggBlue,
    height: normalize(100),
    width: normalize(100),
    borderRadius: normalize(50),
    marginVertical: normalize(18),
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
  radioOuterView: {
    alignItems: 'center',
    width: normalize(20),
    height: normalize(20),
    borderColor: Color.grey,
    justifyContent: 'center',
    borderWidth: normalize(1),
    borderRadius: normalize(10),
  },
  radioInnnerView: {
    width: normalize(20),
    height: normalize(20),
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
    borderWidth: normalize(1),
    borderColor: Color.wheat,
    borderRadius: normalize(10),
    marginHorizontal: normalize(16),
    marginVertical: normalize(6),
  },
  dateImage: {
    marginLeft: normalize(12),
  },
  dateText: {
    opacity: 0.7,
    color: Color.grey,
    fontSize: normalize(16),
    marginLeft: normalize(10),
  },
});
function type(type: any, options: any): void {
  throw new Error('Function not implemented.');
}

function options(type: (type: any, options: any) => void, options: any): void {
  throw new Error('Function not implemented.');
}
