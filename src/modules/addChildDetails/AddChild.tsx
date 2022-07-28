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
} from '../../utils';
import Success from './Success';
import SetMpin from './SetMpin';
import AddLangSpoken from './AddLangSpoken';
import ConfirmMpin from './ConfirmMpin';
import AddBasicDetails from './AddBasicDetails';
import AddChildCard from '../../components/ChildProfileCard/ChildProfileCard';
import AddLangInterest from './AddLangInterest';
import AddIntrested from './AddIntrest';
import {normalize} from '../../utils/Dimensions';
import {showToast} from '../../utils/CommonFunction';
import {ActionType} from '../../actions';
import {CustomLoader, CustomHeader2} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback, useEffect, useMemo, useState} from 'react';

const AddChild = () => {
  const [types, setTypes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const onPressCard = useCallback(() => {
    setTypes(ScreenNames.BASIC_DETAILS);
  }, [types]);
  const dispatch = useDispatch();
  const {childListData} = useSelector((state: any) => state.childReducer);
  console.log(
    '🚀 ~ file: AddChild.tsx ~ line 43 ~ AddChild ~ childListData',
    childListData.length,
  );

  useEffect(() => {
    setIsLoading(true);
    WebService.getApiCall(
      EndPoint.CHILD_DASHBOARD_PARENT,
      (response: any) => {
        dispatch({
          type: ActionType.CHILD_LIST_DATA,
          payload: {childListData: response.data.result},
        });
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
      return <AddBasicDetails screenType={_screenType} />;
    case ScreenNames.LANG_INTEREST:
      return <AddLangInterest screenType={_screenType} />;
    case ScreenNames.LANG_SPOKEN:
      return <AddLangSpoken screenType={_screenType} />;
    case ScreenNames.INTERESTED:
      return <AddIntrested screenType={_screenType} />;
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
    childListData.length < 4 ? onPressCard() : showToast(String.cannotAddChild);
  };
  const _renderItem = ({item, index}: any) => {
    const {imageUrl, name, _id} = item;

    return (
      <>
        <AddChildCard
          _id={_id}
          name={name}
          imageUrl={imageUrl}
          childListData={childListData}
          containerColor={Constants.colorArray[index]}
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
      <CustomHeader2 title={String.addChild} icon={true} text={String.skip} />
      <View style={styles.headingCon}>
        <Text style={styles.addChildDescriptionText}>
          {String.addChildDescription}
        </Text>
      </View>
      <FlatList
        data={childListData}
        numColumns={2}
        horizontal={false}
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
    color: Color.black,
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
