import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Success from '../Success';
import SetMpin from '../SetMpin';
import LangSpoken from '../LangSpoken';
import Mocks from '../../../utils/Mocks';
import ConfirmMpin from '../ConfirmMpin';
import BasicDetails from '../BasicDetails';
import AddChildCard from './AddChildCard';
import LangInterest from '../LangInterest';
import Intrested from '../interested/Intrested';
import React, {useCallback, useEffect, useState} from 'react';
import {normalize} from '../../../utils/Dimensions';
import ScreenNames from '../../../utils/ScreenNames';
import {Color, Fonts, LocalImages, String} from '../../../utils';
import CustomHeader2 from '../../../components/customHeader/CustomHeader2';
import EndPoint from '../../../utils/EndPoint';
import WebService from '../../../utils/WebService';

const AddChild = () => {
  const [types, setTypes] = useState('');
  const [data, setData] = useState([]);
  console.log('🚀 ~ file: AddChild.tsx ~ line 29 ~ AddChild ~ data', data);
  const [isLoading, setIsLoading] = useState(false);
  const onPressCard = useCallback(() => {
    setTypes(ScreenNames.BASIC_DETAILS);
  }, [types]);

  useEffect(() => {
    setIsLoading(true);
    WebService.getApiCall(
      EndPoint.CHILD_DASHBOARD_PARENT,
      (response: any) => {
        setData(response.data.result);
      },
      (err: any) => {
        console.log(err);
      },
    );
    setIsLoading(false);
  }, []);

  /**
   *
   * @param props
   */
  const _screenType = (props: string) => {
    setTypes(props);
  };
  switch (types) {
    case ScreenNames.BASIC_DETAILS:
      return <BasicDetails screenType={_screenType} />;
    case ScreenNames.LANG_INTEREST:
      return <LangInterest screenType={_screenType} />;
    case ScreenNames.LANG_SPOKEN:
      return <LangSpoken screenType={_screenType} />;
    case ScreenNames.INTERESTED:
      return <Intrested screenType={_screenType} />;
    case ScreenNames.SET_MPIN:
      return <SetMpin screenType={_screenType} />;
    case ScreenNames.CONFIRM_MPIN:
      return <ConfirmMpin screenType={_screenType} />;
    case ScreenNames.SUCCESS:
      return <Success />;
    default:
      break;
  }

  const _renderItem = (items: any) => {
    const {imageUrl} = items;
    return <AddChildCard onPressCard={onPressCard} imageUrl={imageUrl} />;
  };
  return (
    <ImageBackground
      source={LocalImages.background}
      imageStyle={styles.imgBackgroundStyle}
      style={styles.parentContainer}>
      <CustomHeader2 title={String.signup} icon={true} text={String.skip} />
      <View style={styles.headingCon}>
        <Text style={styles.addChildDescriptionText}>
          {String.addChildDescription}
        </Text>
      </View>
      <FlatList
        data={Mocks.addChildData}
        renderItem={_renderItem}
        numColumns={2}
        horizontal={false}
      />
      {isLoading && <ActivityIndicator size={'large'} />}
    </ImageBackground>
  );
};

export default React.memo(AddChild);

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: Color.pureWhite,
  },
  imgBackgroundStyle: {
    opacity: 0.15,
  },
  headingCon: {
    marginTop: normalize(40),
  },
  addChildDescriptionText: {
    alignSelf: 'center',
    width: normalize(312),
    height: normalize(60),
    fontSize: normalize(16),
    lineHeight: normalize(27),
    marginBottom: normalize(20),
    fontFamily: Fonts.muliSemiBold,
    marginHorizontal: normalize(30),
  },
  childContainer: {
    marginStart: normalize(5),
  },
});
