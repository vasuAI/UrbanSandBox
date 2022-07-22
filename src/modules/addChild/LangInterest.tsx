import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color, Fonts, LocalImages, String} from '../../utils';
import CustomHeader2 from '../../components/customHeader/CustomHeader2';
import {
  CustomActionButton,
  CustomProgressBar,
  CustomTextInput,
} from '../../components';
import {normalize} from '../../utils/Dimensions';
import WebService from '../../utils/WebService';
import EndPoint from '../../utils/EndPoint';
import LanguageCardItem from '../../components/flatListComponents/LanguageCardItem';

const LangInterest = (props: any) => {
  const {screenType} = props;
  const [data, setData] = useState([]);
  console.log('data', data);

  const childerName = 'Skye';
  const _onPressActionBtn = () => {
    screenType('LANG_SPOKEN');
  };

  useEffect(() => {
    WebService.getApiCall(
      EndPoint.GET_LANGUAGES_PARENT,
      (response: any) => {
        setData(response.data.result.data);
      },
      () => {},
    );
  }, []);
  const _renderItem = ({item}: any) => {
    const {title, _id} = item;
    return <LanguageCardItem title={title} id={_id} />;
  };
  return (
    <ImageBackground
      source={LocalImages.background}
      imageStyle={styles.imgBackgroundStyle}
      style={styles.parentContainer}>
      <CustomHeader2 title={String.languageInterested} icon={true} />
      <CustomProgressBar curntStatus={2} />
      <View style={styles.detailsDescriptionContainer}>
        <Text style={styles.descriptionTextStyle}>
          Tell us more about what languages {childerName} is interested in
        </Text>
      </View>
      <CustomTextInput // input name
        value={''}
        onChangeText={undefined}
        keyboardType={'default'}
        leftIcon={LocalImages.seachIcon2}
        placeholder={String.seachlanguage}
        customLefticonStyle={styles.customLefticonStyle}
        customContainerStyle={styles.customContainerStyle}
      />
      <FlatList data={data} renderItem={_renderItem} />
      <CustomActionButton // button next
        title={String.next}
        onPress={_onPressActionBtn}
        customContainerStyle={styles.nextButtonCon}
      />
    </ImageBackground>
  );
};

export default React.memo(LangInterest);

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
    flex: 0.25,
    marginBottom: normalize(34),
    backgroundColor: Color.twilightBlue,
  },
});
