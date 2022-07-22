import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color, Fonts, LocalImages, String} from '../../../utils';
import CustomHeader2 from '../../../components/customHeader/CustomHeader2';
import {CustomActionButton, CustomProgressBar} from '../../../components';
import {normalize} from '../../../utils/Dimensions';
import InteresetCard from './InteresetCard';
import WebService from '../../../utils/WebService';
import EndPoint from '../../../utils/EndPoint';

const Intrested = (props: any) => {
  const {screenType} = props;
  const childerName = 'Skye';
  const [data, setData] = useState([]);
  const _onPressActionBtn = () => {
    screenType('SET_MPIN');
  };
  useEffect(() => {
    WebService.getApiCall(
      EndPoint.GET_INTERESTPARENT,
      (response: any) => {
        console.log(
          '🚀 ~ file: Intrested.tsx ~ line 30 ~ useEffect ~ response',
          response,
        );
        setData(response.data.result.data);
      },
      () => {},
    );
  }, []);
  const _renderItem = ({item, index}: any) => {
    const {name, imageUrl, _id} = item;
    return (
      <InteresetCard name={name} imageUrl={imageUrl} _id={_id} index={index} />
    );
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
      <FlatList
        data={data}
        renderItem={_renderItem}
        numColumns={2}
        horizontal={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
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
    marginBottom: normalize(40),
    backgroundColor: Color.twilightBlue,
  },
  contentContainerStyle: {
    flex: 1,
    marginHorizontal: 25,
  },
});
