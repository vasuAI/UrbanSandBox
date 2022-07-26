import React from 'react';
import {normalize} from '../../utils/Dimensions';
import {Color, Fonts, LocalImages} from '../../utils';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface Props {
  _id: string;
  __v: number;
  title: string;
  onPress: Function;
}

const LanguageCardItem = (props: Props) => {
  const {title, onPress, _id, __v} = props;
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textStyle}>{title}</Text>
      <TouchableOpacity
        onPress={() => onPress(_id, __v)}
        style={{
          marginStart: 'auto',
          alignItems: 'center',
          width: normalize(25),
          height: normalize(25),
          justifyContent: 'center',
          backgroundColor: Color.white,
        }}>
        {__v ? (
          <Image
            source={LocalImages.checkIconBlue}
            style={styles.checkIcontyle}
          />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(LanguageCardItem);

const styles = StyleSheet.create({
  rootContainer: {
    margin: 10,
    flexDirection: 'row',
    marginHorizontal: normalize(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcontyle: {
    width: normalize(19.6),
    height: normalize(19.6),
  },
  textStyle: {
    fontFamily: Fonts.muliRegular,
    fontSize: normalize(16),
    lineHeight: normalize(46),
  },
});
