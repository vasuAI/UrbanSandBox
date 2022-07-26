import {useDispatch, useSelector} from 'react-redux';
import InteresetCard from './InteresetCard';
import EndPoint from '../../../utils/EndPoint';
import React, {useEffect, useState} from 'react';
import WebService from '../../../utils/WebService';
import {InterstedRenderItem} from '../../../modals';
import {normalize} from '../../../utils/Dimensions';
import ActionType from '../../../actions/ActionType';
import ScreenNames from '../../../utils/ScreenNames';
import {showToast} from '../../../utils/CommonFunction';
import {Color, Fonts, LocalImages, String} from '../../../utils';
import CustomHeader2 from '../../../components/customHeader/CustomHeader2';
import {CustomActionButton, CustomProgressBar} from '../../../components';
import {Text, View, FlatList, StyleSheet, ImageBackground} from 'react-native';
import ChildAction from '../../../actions/ChildAction';

let selected: Array<any> = [];
interface Props {
  screenType: Function;
}
const Intrested = (props: Props) => {
  const {screenType} = props;
  const childerName = 'Skye';
  const [data, setData] = useState<Array<any>>([]);
  const dispatch: Function = useDispatch();

  const {childId} = useSelector((state: any) => state.childReducer);

  const submitStep4 = () => {
    let interesrSelected = selected.map((item: any) => {
      return {
        id: item._id,
        name: item.name,
      };
    });
    let params = {
      stepNumber: 4,
      childId: childId,
      interests: [...interesrSelected],
    };

    dispatch(
      ChildAction.hitAddChildApi(
        params,
        (response: any) => {
          if (response == 'Success') {
            screenType(ScreenNames.SET_MPIN);
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
        type: ActionType.INTERESTED,
        payload: {interested: [...selected]},
      });
      submitStep4();
    } else {
      showToast(String.showEmptyFieldError);
    }
  };
  useEffect(() => {
    WebService.getApiCall(
      EndPoint.GET_INTEREST_PARENT,
      (response: any) => {
        setData(response.data.result.data);
      },
      () => {},
    );
  }, []);

  /**
   *
   * @param _id
   */
  const onSelectCard = (_id: string) => {
    let index = data.findIndex((current: any) => current?._id === _id);
    if (index != -1) {
      let selectInterested: any = [...data];
      if (selectInterested[index].status === 1) {
        selectInterested[index].status = selectInterested[index]?.status + 1;
        selected = [...selected, data[index]];
      } else {
        selectInterested[index].status = selectInterested[index]?.status - 1;
        let unselectInterested = selected.findIndex(
          (element: any) => element._id === _id,
        );
        selected.splice(unselectInterested, 1);
      }
      setData([...selectInterested]);
    }
  };
  /**
   *
   * @param param0
   * @returns
   */
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
        _id={_id}
        name={name}
        index={index}
        imageUrl={imageUrl}
        onPress={onSelectCard}
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

export default React.memo(Intrested);

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: Color.pureWhite,
  },
  imgBackgroundStyle: {
    opacity: 0.15,
  },
  detailsDescriptionContainer: {
    width: '70%',
    marginHorizontal: normalize(60),
  },
  titleText: {
    textAlign: 'center',
    fontSize: normalize(14),
    lineHeight: normalize(27),
    fontFamily: Fonts.muliBold,
  },
  descriptionTextStyle: {
    textAlign: 'center',
    fontSize: normalize(14),
    lineHeight: normalize(27),
    fontFamily: Fonts.muliRegular,
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
