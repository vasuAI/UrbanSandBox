import React from 'react';
import {Color, Fonts} from '../../../utils';
import {normalize} from '../../../utils/Dimensions';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
interface Props {
  onPressCard?: Function;
  imageUrl: string;
  name: string;
  _id: string;
  containerColor: any;
}

const AddChildCard = (props: Props) => {
  const {imageUrl, name, _id, containerColor} = props;
  return (
    <TouchableOpacity
      style={[styles.rectagularContainer, {backgroundColor: containerColor}]}
      activeOpacity={0.7}>
      <Image source={{uri: imageUrl}} style={styles.addIconSty} />
      <Text style={styles.titleSttyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(AddChildCard);

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
    height: normalize(50),
    width: normalize(50),
    opacity: 3,
  },
  titleSttyle: {
    fontFamily: Fonts.muliBold,
    fontSize: normalize(16),
    lineHeight: normalize(25),
    marginTop: normalize(15),
  },
});
