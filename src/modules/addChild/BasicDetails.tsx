import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
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

const BasicDetails = (props: any) => {
  const {screenType} = props;
  let loginUserName = 'fabio';
  const [name, setName] = useState('');
  const [DOB, setDOB] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [location, setSetlocation] = useState('');

  const [check, isCheck] = useState(true);
  const onChangeName = useCallback(
    (value: string) => {
      setName(value);
    },
    [name],
  );
  const onChangeDOB = useCallback(
    (value: string) => {
      setDOB(value);
    },
    [DOB],
  );
  const onChangeSchoolName = useCallback(
    (value: string) => {
      setSchoolName(value);
    },
    [schoolName],
  );
  const onChangeLocation = useCallback(
    (value: string) => {
      setSetlocation(value);
    },
    [location],
  );
  const handelRadioBtn = () => isCheck(!check);
  const _onPress = () => {
    screenType('LANG_INTEREST');
  };
  return (
    <ImageBackground
      source={LocalImages.background}
      imageStyle={styles.imgBackgroundStyle}
      style={styles.parentContainer}>
      <CustomHeader2
        title={String.basicDetails}
        icon={true}
        screenType={'INTERESTED'}
      />
      <ScrollView style={{flex: 1}}>
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
            source={LocalImages.skyIcon}
            style={styles.imageContainer}
            resizeMode="contain"
          />
        </View>
        <View style={styles.editIconContainer}>
          <Image source={LocalImages.editIcon} style={styles.editIconStyle} />
        </View>
        <CustomTextInput // input name
          value={name}
          onChangeText={onChangeName}
          placeholder={String.name}
          keyboardType={'default'}
          leftIcon={LocalImages.nameIcon}
          customContainerStyle={styles.textContainerStyle}
        />
        <CustomTextInput // input DOB
          value={DOB}
          onChangeText={onChangeDOB}
          placeholder={String.DOB}
          keyboardType={'default'}
          leftIcon={LocalImages.dateIcon}
          customContainerStyle={styles.textContainerStyle}
        />
        <CustomTextInput // input school
          value={schoolName}
          onChangeText={onChangeSchoolName}
          placeholder={String.school}
          keyboardType={'default'}
          leftIcon={LocalImages.schoolIcon}
          customContainerStyle={styles.textContainerStyle}
        />
        <CustomTextInput // input location
          value={location}
          onChangeText={onChangeLocation}
          placeholder={String.location}
          keyboardType={'default'}
          leftIcon={LocalImages.location}
          customContainerStyle={styles.textContainerStyle}
        />
        <Text style={styles.genderContainer}>{String.gender}</Text>
        <View style={styles.genderSelectionView}>
          <TouchableOpacity
            onPress={handelRadioBtn}
            style={check ? styles.radioOuterView : styles.radioInnnerView}
          />
          <Text style={styles.genderSelectionTextStyle}>{String.girl}</Text>
          <TouchableOpacity
            onPress={handelRadioBtn}
            style={check ? styles.radioInnnerView : styles.radioOuterView}
          />
          <Text style={styles.genderSelectionTextStyle}>{String.boy}</Text>
        </View>
        <CustomActionButton // button next
          title={String.next}
          onPress={_onPress}
          customContainerStyle={styles.nextButtonCon}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default React.memo(BasicDetails);

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
  profileContiner: {
    alignSelf: 'center',
    backgroundColor: Color.duckEggBlue,
    height: normalize(100),
    width: normalize(100),
    borderRadius: normalize(50),
    marginVertical: normalize(18),
  },
  imageContainer: {
    width: normalize(60),
    height: normalize(100),
    alignSelf: 'center',
    marginBottom: normalize(30),
    borderRadius: normalize(50),
  },
  editIconContainer: {
    top: normalize(315),
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
});
