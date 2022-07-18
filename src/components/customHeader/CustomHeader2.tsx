import React from 'react';
import {Color, Fonts, LocalImages} from '../../utils';
import {normalize} from '../../utils/Dimensions';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const CustomHeader2 = (props: any) => {
  const {screenType} = props;
  const navigate: any = useNavigation();

  const _navigate = () => screenType('LANG_INTEREST');
  const {title, text, image1, image2, image3, icon} = props;

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerChildContainer}>
        {icon && (
          <TouchableOpacity onPress={_navigate} style={{}}>
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
    marginTop: normalize(45),
    marginHorizontal: normalize(15),
  },
  headerChildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headingTextStyle: {
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
