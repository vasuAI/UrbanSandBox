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
import {normalize} from '../../utils/Dimensions';

/**
 * @description defining required props
 */
interface Props {
  title: string;
  leftIcon?: any;
  rightIcon?: any;
  onPress: Function;
  activeOpacity?: any;
  titleStyle?: TextStyle;
  leftIconStyle?: ImageStyle;
  rightIconStyle?: ImageStyle;
  customContainerStyle?: ViewStyle;
}

/**
 *
 * @param props
 * @returns
 */
const CustomActionButton = (props: Props) => {
  console.log('CutomBTN render');

  const {
    onPress,
    title,
    titleStyle,
    activeOpacity = 0.5,
    customContainerStyle,
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity}
      onPress={() => onPress()}
      style={[styles.parentContainer, customContainerStyle]}>
      <View style={{flexDirection: 'row'}}>
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
 *@description cu
 */
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
    height: normalize(50),
    justifyContent: 'center',
    backgroundColor: '#000000',
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
    color: '#ffffff',
    fontSize: normalize(18),
  },
});

/**
 *
 * @exports
 */
export default React.memo(CustomActionButton);
