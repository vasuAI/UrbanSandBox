import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {ChildAction} from '../../actions';
import {normalize} from '../../utils/Dimensions';
import React, {useCallback, useState} from 'react';
import {showAlert} from '../../utils/CommonFunction';
import Tooltip from 'react-native-walkthrough-tooltip';
import AddChild from '../../modules/addChildDetails/AddChild';
import {Color, Fonts, LocalImages, ScreenNames} from '../../utils';
interface Props {
  onPressCard?: Function;
  imageUrl: string;
  name: string;
  _id: string;
  containerColor: any;
  childListData: any;
}

const ChildProfileCard = (props: Props) => {
  const {imageUrl, name, _id, containerColor} = props;

  const [isVisble, setIsVisble] = useState(false);
  const dispatch: Function = useDispatch();
  const _onPressDelete = useCallback(() => {
    setIsVisble(false);
    Alert.alert('Alert', 'Are you sure you want to delete child ?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () =>
          dispatch(
            ChildAction.deleteChildApi(
              _id,
              (response: any) => {
                if (response == 'Success') {
                  // screenType(ScreenNames.ADD_CHILD);
                }
              },
              (err: any) => console.log(err),
            ),
            {},
          ),
      },
    ]);
    return AddChild;
  }, [isVisble]);
  const _contentTooltip = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => showAlert('edit')}>
          <Text>{'Edit'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_onPressDelete}>
          <Text>Delete</Text>
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
        // showChildInTooltip={false}
        arrowSize={styles.arrowSize}
        onClose={() => setIsVisble(false)}
        contentStyle={styles.toolTipContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.menuIconStyle}
          onPress={() => setIsVisble(true)}>
          <Image source={LocalImages.menuIcon} style={{}} />
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
    left: normalize(145),
    top: normalize(-160),
  },
  toolTipContainer: {
    top: normalize(-90),
    left: normalize(30),
    width: normalize(60),
    height: normalize(60),
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowSize: {
    width: 0,
    height: 0,
  },
});
