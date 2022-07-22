import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Color, Fonts, LocalImages} from '../../utils';
import {normalize} from '../../utils/Dimensions';

const LanguageCardItem = (props: any) => {
  const {title} = props;
  const [isSelected, setIsSelected] = useState(false);
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.textStyle}>{title}</Text>
      <TouchableOpacity
        onPress={() => setIsSelected(!isSelected)}
        style={{
          marginStart: 'auto',
          alignItems: 'center',
          width: normalize(25),
          height: normalize(25),
          justifyContent: 'center',
          backgroundColor: Color.white,
        }}>
        {isSelected && (
          <Image
            source={LocalImages.checkIconBlue}
            style={styles.checkIcontyle}
          />
        )}
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
