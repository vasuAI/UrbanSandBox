import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Color, Fonts, LocalImages, Constants} from '../../../utils';
import {normalize} from '../../../utils/Dimensions';

interface Props {
  name: string;
  imageUrl: string;
  _id: string;
  index: number;
  onPress: Function;
}
const InteresetCard = (props: Props) => {
  const [isSelected, setIsSelected] = useState(false);

  const {name, imageUrl, _id, index, onPress} = props;
  return (
    <TouchableOpacity
      style={[
        styles.rootContainer,
        {backgroundColor: Constants.colorArray[index % 7]},
        isSelected && {borderWidth: 2, borderColor: Color.twilightBlue},
      ]}
      onPress={() => {
        onPress(_id);
        setIsSelected(!isSelected);
      }}>
      {isSelected && (
        <View style={styles.checkIcon}>
          <Image source={LocalImages.checkIconWhite} />
        </View>
      )}
      <View style={styles.imageContainer}>
        <Image source={{uri: imageUrl}} style={styles.imageContainer} />
      </View>
      <Text style={styles.textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default InteresetCard;

const styles = StyleSheet.create({
  rootContainer: {
    height: normalize(145),
    width: normalize(145),
    alignItems: 'center',
    margin: normalize(10),
    justifyContent: 'center',
    borderRadius: normalize(5),
  },
  checkIcon: {
    position: 'absolute',
    left: normalize(123),
    bottom: normalize(125),
    padding: normalize(2),
    borderRadius: normalize(50),
    width: normalize(27),
    height: normalize(27),
    backgroundColor: Color.twilightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1.5,
    borderBottomWidth: 1.5,
    borderRightWidth: 1.5,
    borderLeftColor: Color.white,
    borderBottomColor: Color.white,
    borderRightColor: Color.white,
  },
  imageContainer: {
    backgroundColor: 'red',
    width: normalize(70),
    height: normalize(75),
  },
  textStyle: {
    fontSize: normalize(16),
    marginTop: normalize(10),
    lineHeight: normalize(25),
    fontFamily: Fonts.muliBold,
  },
});
