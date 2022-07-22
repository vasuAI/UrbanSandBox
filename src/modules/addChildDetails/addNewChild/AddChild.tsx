import {Text, View, FlatList, StyleSheet, ImageBackground} from 'react-native';
import Success from '../Success';
import SetMpin from '../SetMpin';
import LangSpoken from '../LangSpoken';
import Mocks from '../../../utils/Mocks';
import ConfirmMpin from '../ConfirmMpin';
import BasicDetails from '../BasicDetails';
import AddChildCard from './AddChildCard';
import LangInterest from '../LangInterest';
import Intrested from '../interested/Intrested';
import React, {useCallback, useState} from 'react';
import {normalize} from '../../../utils/Dimensions';
import ScreenNames from '../../../utils/ScreenNames';
import {Color, Fonts, LocalImages, String} from '../../../utils';
import CustomHeader2 from '../../../components/customHeader/CustomHeader2';

const AddChild = () => {
  const [types, setTypes] = useState('');

  const onPressCard = useCallback(() => {
    setTypes(ScreenNames.BASIC_DETAILS);
  }, [types]);

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

  const _renderItem = () => {
    return <AddChildCard onPressCard={onPressCard} />;
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
    fontFamily: Fonts.muliSemiBold,
    marginHorizontal: normalize(30),
  },
  childContainer: {
    marginStart: normalize(5),
  },
});
