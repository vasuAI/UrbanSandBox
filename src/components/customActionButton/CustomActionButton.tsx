import React from 'react';
import {
  View,
  Text,
  Image,
  ViewStyle,
  TextStyle,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Color} from '../../utils';
import {normalize} from '../../utils/Dimensions';

/**
 * @description defining required props
 */
interface Props {
  title: string;
  leftIcon?: any;
  onPress: Function;
  activeOpacity?: any;
  titleStyle?: TextStyle;
  leftIconStyle?: ImageStyle;
  customContainerStyle?: ViewStyle;
}

/**
 *
 * @param props
 * @returns
 */
const CustomActionButton = (props: Props) => {
  const {
    onPress,
    title,
    titleStyle,
    activeOpacity = 0.7,
    customContainerStyle,
  } = props;

  return (
    <TouchableOpacity
      // disabled={true}
      activeOpacity={activeOpacity}
      onPress={() => onPress()}
      style={[styles.parentContainer, customContainerStyle]}>
      <View style={styles.childContainer}>
        <Image
          source={props.leftIcon}
          style={[styles.leftIconStyle, props.leftIconStyle]}
        />
        <Text style={[styles.titleStyle, titleStyle]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

/**
 *@description initial styling of CustomActionButton
 */
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
    height: normalize(50),
    justifyContent: 'center',
    backgroundColor: Color.black,
    marginVertical: normalize(8),
    borderRadius: normalize(10),
    marginHorizontal: normalize(16),
  },
  leftIconStyle: {
    alignSelf: 'center',
    width: normalize(10),
    height: normalize(10),
    marginRight: normalize(2),
  },
  titleStyle: {
    color: Color.white,
    fontSize: normalize(18),
  },
  childContainer: {
    flexDirection: 'row',
  },
});

/**
 *@description binded in memo
 * @exports
 */
export default React.memo(CustomActionButton);
``;
