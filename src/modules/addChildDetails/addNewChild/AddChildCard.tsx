import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Color, LocalImages} from '../../../utils';
import {normalize} from '../../../utils/Dimensions';

const AddChildCard = (props: any) => {
  const {onPressCard} = props;
  return (
    <TouchableOpacity
      onPress={onPressCard}
      style={styles.rectagularContainer}
      activeOpacity={0.7}>
      <Image source={LocalImages.addIcon} style={styles.addIconSty} />
    </TouchableOpacity>
  );
};

export default React.memo(AddChildCard);

const styles = StyleSheet.create({
  rectagularContainer: {
    alignItems: 'center',
    width: normalize(145),
    height: normalize(145),
    justifyContent: 'center',
    backgroundColor: Color.white,
    margin: normalize(20),
  },
  addIconSty: {
    height: normalize(36),
    width: normalize(36),
    opacity: 3,
  },
});
