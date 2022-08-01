import {
  Text,
  View,
  Alert,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {normalize} from '../../utils/Dimensions';
import React, {useCallback, useState} from 'react';
import {ActionType, ChildAction} from '../../actions';
import Tooltip from 'react-native-walkthrough-tooltip';
import {Color, Fonts, LocalImages, String} from '../../utils';

interface Props {
  _id: string;
  name: string;
  index: number;
  imageUrl: string;
  containerColor: any;
  childListData: any;
  onPressCard?: Function;
}

const ChildProfileCard = (props: Props) => {
  const {imageUrl, name, _id, containerColor, childListData} = props;

  const [isVisble, setIsVisble] = useState(false);
  const dispatch: Function = useDispatch();
  const _onPressDelete = useCallback(() => {
    setIsVisble(false);
    Alert.alert(String.alert, String.deleteConfirmation, [
      {
        text: String.cancel,
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {
        text: String.ok,
        onPress: () =>
          dispatch(
            ChildAction.deleteChildApi(
              _id,
              (response: any) => {
                if (response == 'Success') {
                  let index = childListData.findIndex(
                    (item: any) => item?._id === _id,
                  );
                  childListData.splice(index, 1);
                  if (index != -1) {
                    dispatch({
                      type: ActionType.CHILD_LIST_DATA,
                      payload: {childListData: childListData},
                    });
                  }
                }
              },
              (err: any) => console.log(err),
            ),
            {},
          ),
      },
    ]);
  }, [isVisble]);
  const _onPressEdit = () => {
    setIsVisble(false);
  };
  const _contentTooltip = () => {
    return (
      <View>
        <TouchableOpacity onPress={_onPressEdit}>
          <Text style={styles.textStyle}>{String.edit}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_onPressDelete}>
          <Text style={styles.textStyle}>{String.delete}</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{}}>
      <View
        style={[styles.rectagularContainer, {backgroundColor: containerColor}]}>
        <Image source={{uri: imageUrl}} style={styles.addIconSty} />
        <Text style={styles.titleSttyle}>{name}</Text>
      </View>
      <Tooltip
        isVisible={isVisble}
        content={_contentTooltip()}
        showChildInTooltip={false}
        arrowSize={styles.arrowSize}
        onClose={() => setIsVisble(false)}
        contentStyle={styles.toolTipContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.menuIconStyle}
          onPress={() => setIsVisble(true)}>
          <Image source={LocalImages.menuIcon} style={styles.menuIcon} />
        </TouchableOpacity>
      </Tooltip>
    </View>
  );
};

export default React.memo(ChildProfileCard);

const styles = StyleSheet.create({
  rectagularContainer: {
    alignItems: 'center',
    margin: normalize(20),
    width: normalize(145),
    height: normalize(145),
    justifyContent: 'center',
    borderRadius: normalize(5),
    backgroundColor: Color.white,
  },
  addIconSty: {
    opacity: 3,
    height: normalize(50),
    width: normalize(50),
  },
  titleSttyle: {
    color: Color.black,
    fontFamily: Fonts.muliBold,
    fontSize: normalize(16),
    lineHeight: normalize(25),
    marginTop: normalize(15),
  },
  menuIconStyle: {
    left: normalize(140),
    top: normalize(-160),
  },
  menuIcon: {
    width: normalize(20),
    height: normalize(20),
  },
  toolTipContainer: {
    left: normalize(30),
    alignItems: 'center',
    position: 'absolute',
    width: normalize(73),
    bottom: normalize(30),
    height: normalize(62),
    justifyContent: 'center',
  },
  arrowSize: {
    width: 0,
    height: 0,
  },
  textStyle: {
    color: Color.black,
    fontSize: normalize(14),
  },
});
