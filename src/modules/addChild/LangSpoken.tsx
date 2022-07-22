import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color, Fonts, LocalImages, String} from '../../utils';
import CustomHeader2 from '../../components/customHeader/CustomHeader2';
import {
  CustomActionButton,
  CustomProgressBar,
  CustomTextInput,
} from '../../components';
import {normalize} from '../../utils/Dimensions';
import LanguageCardItem from '../../components/flatListComponents/LanguageCardItem';
import WebService from '../../utils/WebService';
import EndPoint from '../../utils/EndPoint';

const LangSpoken = (props: any) => {
  const {screenType} = props;
  const childerName = 'Skye';
  const [data, setData] = useState([]);

  const _onPressActionBtn = () => {
    screenType('INTERESTED');
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
      <CustomHeader2
        title={String.languageSpoken}
        icon={true}
        screenType="LANG_INTEREST"
      />
      <CustomProgressBar curntStatus={3} />
      <View style={styles.detailsDescriptionContainer}>
        <Text style={styles.descriptionTextStyle}>
          Tell us more about what languages {childerName} speaks
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

export default LangSpoken;

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
    // backgroundColor: 'red',
  },
  nextButtonCon: {
    flex: 0.25,
    marginBottom: normalize(34),
    backgroundColor: Color.twilightBlue,
  },
});
