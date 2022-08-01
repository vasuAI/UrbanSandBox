import React from 'react';
import {normalize} from '../../utils/Dimensions';
import {Color, Fonts, LocalImages, ScreenNames} from '../../utils';
import {
  View,
  Text,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface Props {
  icon?: any;
  image1?: any;
  image2?: any;
  image3?: any;
  text?: string;
  title?: string;
  onPress: Function;
}

const CustomHeader2 = (props: Props) => {
  const {title, text, image1, image2, image3, icon, onPress} = props;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerChildContainer}>
        {icon && (
          <TouchableOpacity onPress={() => onPress()}>
            <Image source={LocalImages.backIcon} style={styles.backIconSty} />
          </TouchableOpacity>
        )}
        <Text style={styles.headingTextStyle}>{title}</Text>
      </View>
      <View style={styles.iconContainer}>
        {text && <Text style={styles.textStyle}>{text}</Text>}
        <Image source={image1} style={styles.headerSearchIconStyle} />
        <Image source={image2} style={styles.headerIconStyle} />
        <Image source={image3} style={styles.headerIconStyle} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? normalize(45) : normalize(10),
    marginHorizontal: normalize(15),
  },
  headerChildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingTextStyle: {
    color: Color.black,
    fontSize: normalize(20),
    fontFamily: Fonts.muliBold,
    marginLeft: normalize(10),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: normalize(140),
  },
  textStyle: {
    color: Color.twilightBlue,
    fontSize: normalize(16),
    lineHeight: normalize(25),
    fontFamily: Fonts.muliBold,
    marginStart: normalize(60),
  },
  headerIconStyle: {
    width: normalize(25),
    height: normalize(25),
    margin: normalize(6),
  },
  headerSearchIconStyle: {
    width: normalize(20),
    height: normalize(20),
    margin: normalize(6),
  },
  backIconSty: {
    top: 2,
  },
});
export default React.memo(CustomHeader2);
