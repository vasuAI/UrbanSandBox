import React, {useState} from 'react';
import {normalize} from '../../utils/Dimensions';
import {Color, Fonts, LocalImages, Constants} from '../../utils';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  name: string;
  imageUrl: string;
  _id: string;
  index: number;
  onPress: Function;
}

const AddIntrestCard = (props: Props) => {
  const [isSelected, setIsSelected] = useState(false);
  const {name, imageUrl, _id, index, onPress} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.rootContainer,
        {backgroundColor: Constants.colorArray[index % 4]},
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
        <Image
          source={{uri: imageUrl}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.textStyle}>{name}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(AddIntrestCard);

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
    padding: normalize(2),
    width: normalize(27),
    height: normalize(27),
    alignItems: 'center',
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    bottom: normalize(125),
    borderBottomWidth: 1.5,
    justifyContent: 'center',
    borderRadius: normalize(50),
    borderLeftColor: Color.white,
    borderBottomColor: Color.white,
    borderRightColor: Color.white,
    backgroundColor: Color.twilightBlue,
  },
  imageContainer: {
    width: normalize(110),
    height: normalize(100),
    borderRadius: normalize(5),
    backgroundColor: Color.grey,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  textStyle: {
    color: Color.black,
    fontSize: normalize(16),
    marginTop: normalize(10),
    lineHeight: normalize(25),
    fontFamily: Fonts.muliBold,
  },
});
