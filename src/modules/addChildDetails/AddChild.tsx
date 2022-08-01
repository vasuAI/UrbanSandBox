import {
  Text,
  View,
  Image,
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
import ConfirmMpin from './ConfirmMpin';
import AddIntrested from './AddIntrest';
import {ActionType} from '../../actions';
import AddLangSpoken from './AddLangSpoken';
import AddBasicDetails from './AddBasicDetails';
import AddLangInterest from './AddLangInterest';
import {normalize} from '../../utils/Dimensions';
import {showToast} from '../../utils/CommonFunction';
import {useDispatch, useSelector} from 'react-redux';
import React, {useCallback, useEffect, useState} from 'react';
import {CustomLoader, CustomHeader2, ChildProfileCard} from '../../components';

const AddChild = () => {
  const dispatch = useDispatch();
  const [types, setTypes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {childListData} = useSelector((state: any) => state.childReducer);
  const data = childListData.reverse();

  /**
   *
   */
  const onPressCard = useCallback(() => {
    setTypes(ScreenNames.BASIC_DETAILS);
  }, [types]);
  /**
   *
   */
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
  }, [isLoading]);

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

  const _onPress = () =>
    childListData.length < 2 ? onPressCard() : showToast(String.cannotAddChild);
  const RenderCard = ({item, index}: any) => {
    const {imageUrl, name, _id} = item;
    return (
      <>
        <ChildProfileCard
          _id={_id}
          name={name}
          index={index}
          imageUrl={imageUrl}
          childListData={childListData}
          containerColor={Constants.colorArray[index % 4]}
        />
      </>
    );
  };

  return (
    <ImageBackground
      source={LocalImages.background}
      imageStyle={styles.imgBackgroundStyle}
      style={styles.parentContainer}>
      <CustomHeader2
        title={String.addChild}
        icon={true}
        text={String.skip}
        onPress={() => console.log('hitBack')}
      />
      <View style={styles.headingCon}>
        <Text style={styles.addChildDescriptionText}>
          {String.addChildDescription}
        </Text>
      </View>
      <View style={styles.flaListContainerStyle}>
        {data.map((element: any, i: number) => (
          <RenderCard item={element} index={i} key={i} />
        ))}
        <TouchableOpacity
          onPress={_onPress}
          activeOpacity={0.7}
          style={styles.rectagularContainer}>
          <Image source={LocalImages.addIcon} style={styles.addIconSty} />
        </TouchableOpacity>
      </View>
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
  flaListContainerStyle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
