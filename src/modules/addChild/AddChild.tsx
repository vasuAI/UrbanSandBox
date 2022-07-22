import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Mocks from '../../utils/Mocks';
import BasicDetails from './BasicDetails';
import LangInterest from './LangInterest';
import {normalize} from '../../utils/Dimensions';
import {Color, Fonts, LocalImages, String} from '../../utils';
import CustomHeader2 from '../../components/customHeader/CustomHeader2';
import Intrested from './Intrested';
import {UserAction} from '../../actions';
import {useDispatch} from 'react-redux';
import LangSpoken from './LangSpoken';
import SetMpin from './SetMpin';
import ConfirmMpin from './ConfirmMpin';
import Success from './Success';
import ChildAction from '../../actions/ChildAction';

const AddChild = () => {
  const dispatch: Function = useDispatch();
  const [types, setTypes] = useState('');

  const onPressCard = useCallback(() => {
    setTypes('BASIC_DETAILS');
  }, [types]);

  const _screenType = (props: any) => {
    setTypes(props);
  };

  switch (types) {
    case 'BASIC_DETAILS':
      return <BasicDetails screenType={_screenType} />;
    case 'LANG_INTEREST':
      return <LangInterest screenType={_screenType} />;
    case 'LANG_SPOKEN':
      return <LangSpoken screenType={_screenType} />;
    case 'INTERESTED':
      return <Intrested screenType={_screenType} />;
    case 'SET_MPIN':
      return <SetMpin screenType={_screenType} />;
    case 'CONFIRM_MPIN':
      return <ConfirmMpin screenType={_screenType} />;
    case 'SUCCESS':
      return <Success />;
    default:
      break;
  }

  const params = {};

  dispatch(
    ChildAction.languageApiHit(
      params,
      (success: any) => {
        if (success) {
          console.dir('Success', success);
        }
      },
      (failure: any) => {
        console.dir(
          '🚀 ~ file: AddChild.tsx ~ line 63 ~ AddChild ~ failure',
          failure,
        );
      },
    ),
  );
  const _renderItem = () => {
    return (
      <TouchableOpacity
        onPress={onPressCard}
        style={styles.rectagularContainer}
        activeOpacity={0.7}>
        <Image source={LocalImages.addIcon} style={styles.addIconSty} />
      </TouchableOpacity>
    );
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
    marginHorizontal: normalize(30),
    fontFamily: Fonts.muliSemiBold,
  },
  childContainer: {
    marginStart: normalize(5),
  },
  rectagularContainer: {
    alignItems: 'center',
    width: normalize(145),
    height: normalize(145),
    justifyContent: 'center',
    backgroundColor: Color.white,
    margin: 20,
  },
  addIconSty: {
    height: normalize(36),
    width: normalize(36),
    opacity: 3,
  },
});
function dispatch(arg0: (dispatch: Function, getState: Function) => void) {
  throw new Error('Function not implemented.');
}
