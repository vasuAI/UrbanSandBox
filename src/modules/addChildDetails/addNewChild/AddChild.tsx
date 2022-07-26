import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  Color,
  Fonts,
  String,
  EndPoint,
  Constants,
  WebService,
  ScreenNames,
  LocalImages,
} from '../../../utils';
import Success from '../Success';
import SetMpin from '../SetMpin';
import LangSpoken from '../LangSpoken';
import ConfirmMpin from '../ConfirmMpin';
import BasicDetails from '../BasicDetails';
import AddChildCard from './AddChildCard';
import LangInterest from '../LangInterest';
import Intrested from '../interested/Intrested';
import {normalize} from '../../../utils/Dimensions';
import {showToast} from '../../../utils/CommonFunction';
import React, {useCallback, useEffect, useState} from 'react';
import {CustomLoader, CustomHeader2} from '../../../components';

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

  const _onPress = () => {
    data.length < 4 ? onPressCard() : showToast(String.cannotAddChild);
  };
  const _renderItem = ({item, index}: any) => {
    const {imageUrl, name, _id} = item;

    return (
      <>
        <AddChildCard
          containerColor={Constants.colorArray[index]}
          name={name}
          imageUrl={imageUrl}
          _id={_id}
        />
      </>
    );
  };
  const _addNewChild = () => {
    return (
      <>
        <TouchableOpacity
          onPress={_onPress}
          style={styles.rectagularContainer}
          activeOpacity={0.7}>
          <Image source={LocalImages.addIcon} style={styles.addIconSty} />
        </TouchableOpacity>
      </>
    );
  };
  const _keyExtractor = (item: any) => {
    return item._id;
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
        data={data}
        numColumns={2}
        horizontal={false}
        scrollEnabled={false}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        ListFooterComponent={_addNewChild}
      />
      {isLoading && <CustomLoader />}
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
  rectagularContainer: {
    alignItems: 'center',
    margin: normalize(20),
    width: normalize(145),
    height: normalize(145),
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  addIconSty: {
    height: normalize(36),
    width: normalize(36),
    opacity: 3,
  },
});
