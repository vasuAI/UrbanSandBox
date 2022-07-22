import {Text, View, FlatList, StyleSheet, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color, Fonts, LocalImages, String} from '../../../utils';
import CustomHeader2 from '../../../components/customHeader/CustomHeader2';
import {CustomActionButton, CustomProgressBar} from '../../../components';
import {normalize} from '../../../utils/Dimensions';
import InteresetCard from './InteresetCard';
import WebService from '../../../utils/WebService';
import EndPoint from '../../../utils/EndPoint';
import {useDispatch} from 'react-redux';
import ActionType from '../../../actions/ActionType';
import {InterstedRenderItem} from '../../../modals';
import ScreenNames from '../../../utils/ScreenNames';

let select: any = [];

const Intrested = (props: any) => {
  const {screenType} = props;
  const childerName = 'Skye';
  const [data, setData] = useState<Array<any>>([]);
  const dispatch: Function = useDispatch();
  const _onPressActionBtn = () => {
    screenType(ScreenNames.SET_MPIN);
    dispatch({
      type: ActionType.LANGUAGE_SPOKEN,
      payload: {interested: [...select]},
    });
  };
  useEffect(() => {
    WebService.getApiCall(
      EndPoint.GET_INTERESTPARENT,
      (response: any) => {
        setData(response.data.result.data);
      },
      () => {},
    );
  }, []);

  const onPressLanguage = (_id: string) => {
    let index = data.findIndex((current: any) => current?._id === _id);
    if (index != -1) {
      let selectedLanguage: any = [...data];
      if (selectedLanguage[index].status === 1) {
        selectedLanguage[index].status = selectedLanguage[index]?.status + 1;
        select = [...select, data[index]];
      } else {
        selectedLanguage[index].status = selectedLanguage[index]?.status - 1;
        let unSelectedLanguage = select.findIndex(
          (element: any) => element._id === _id,
        );
        select.splice(unSelectedLanguage, 1);
      }
      setData([...selectedLanguage]);
    }
  };

  const _renderItem = ({
    item,
    index,
  }: {
    item: InterstedRenderItem;
    index: number;
  }) => {
    const {name, imageUrl, _id} = item;
    return (
      <InteresetCard
        name={name}
        imageUrl={imageUrl}
        _id={_id}
        index={index}
        onPress={onPressLanguage}
      />
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
