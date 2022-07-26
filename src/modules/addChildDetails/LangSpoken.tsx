import React, {useEffect, useState} from 'react';
import {
  CustomTextInput,
  CustomProgressBar,
  CustomActionButton,
} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import EndPoint from '../../utils/EndPoint';
import WebService from '../../utils/WebService';
import {LanguageRenderItem} from '../../modals';
import {normalize} from '../../utils/Dimensions';
import ActionType from '../../actions/ActionType';
import ScreenNames from '../../utils/ScreenNames';
import {showToast} from '../../utils/CommonFunction';
import {Color, Fonts, LocalImages, String} from '../../utils';
import CustomHeader2 from '../../components/customHeader/CustomHeader2';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import LanguageCardItem from '../../components/flatListComponents/LanguageCardItem';
import {ChildAction} from '../../actions';

let selected: any = [];
interface Props {
  screenType: Function;
}
const LangSpoken = (props: Props) => {
  const {screenType} = props;
  const childerName = 'Skye';
  const [data, setData] = useState<Array<any>>([]);
  const dispatch: Function = useDispatch();
  const {childId} = useSelector((state: any) => state.childReducer);

  const submitStep3 = () => {
    let languageSpoken = selected.map((item: any) => {
      return {
        id: item._id,
        name: item.title,
      };
    });
    let params = {
      stepNumber: 2,
      childId: childId,
      languageSpoken: [...languageSpoken],
    };

    dispatch(
      ChildAction.hitAddChildApi(
        params,
        (response: any) => {
          if (response == 'Success') {
            screenType(ScreenNames.INTERESTED);
          }
        },
        (error: any) => {
          console.log(error);
        },
      ),
    );
  };
  const _onPressActionBtn = () => {
    if (selected.length != 0) {
      dispatch({
        type: ActionType.LANGUAGE_SPOKEN,
        payload: {langSpoken: [...selected]},
      });
      submitStep3();
    } else {
      showToast(String.showEmptyFieldError);
    }
  };

  /**
   *
   * @param _id
   */
  const onSelectlanguage = (_id: string) => {
    let index = data.findIndex((current: any) => current?._id === _id);
    if (index != -1) {
      let selectedLanguage: any = [...data];
      if (selectedLanguage[index].__v === 0) {
        selectedLanguage[index].__v = selectedLanguage[index]?.__v + 1;
        selected = [...selected, data[index]];
      } else {
        selectedLanguage[index].__v = selectedLanguage[index]?.__v - 1;
        let unSelectedLanguage = selected.findIndex(
          (element: any) => element._id === _id,
        );
        selected.splice(unSelectedLanguage, 1);
      }
      setData([...selectedLanguage]);
    }
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
  /**
   *
   * @param item
   * @returns
   */
  const _renderItem = ({item}: {item: LanguageRenderItem}) => {
    const {title, _id, __v} = item;
    return (
      <LanguageCardItem
        _id={_id}
        __v={__v}
        title={title}
        onPress={onSelectlanguage}
      />
    );
  };
  return (
    <ImageBackground
      source={LocalImages.background}
      imageStyle={styles.imgBackgroundStyle}
      style={styles.parentContainer}>
      <CustomHeader2
        title={String.languageSpoken}
        icon={true}
        screenType={ScreenNames.LANG_INTEREST}
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
      <FlatList
        data={data}
        renderItem={_renderItem}
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

export default React.memo(LangSpoken);

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
    height: normalize(36),
    width: normalize(335),
    marginHorizontal: normalize(20),
  },
  nextButtonCon: {
    flex: 0.12,
    marginBottom: normalize(34),
    backgroundColor: Color.twilightBlue,
  },
  contentContainerStyle: {
    flex: 1,
    marginHorizontal: 10,
  },
});
