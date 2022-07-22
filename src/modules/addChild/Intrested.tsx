import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Color, Fonts, LocalImages, String} from '../../utils';
import CustomHeader2 from '../../components/customHeader/CustomHeader2';
import {CustomActionButton, CustomProgressBar} from '../../components';
import {normalize} from '../../utils/Dimensions';

const Intrested = (props: any) => {
  const {screenType} = props;
  const childerName = 'Skye';
  const data = [1, 2, 3, 4, 5, 6];
  const _onPressActionBtn = () => {
    screenType('SET_MPIN');
  };

  const _renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={{
          height: 145,
          width: 145,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'green',
          margin: 10,
          borderWidth: 2,
          borderColor: Color.twilightBlue,
        }}>
        <View style={styles.checkIcon}>
          <Image source={LocalImages.checkIconWhite} />
        </View>
        <Text>{'hello'}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <ImageBackground
      source={LocalImages.background}
      imageStyle={styles.imgBackgroundStyle}
      style={styles.parentContainer}>
      <CustomHeader2 title={String.interset} icon={true} />
      <CustomProgressBar curntStatus={4} />
      <View style={styles.detailsDescriptionContainer}>
        <Text style={styles.descriptionTextStyle}>
          Tell us more about what languages {childerName} interest more
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={_renderItem}
        numColumns={2}
        horizontal={false}
        contentContainerStyle={{
          flex: 1,
          marginHorizontal: 40,
          // backgroundColor: 'red',
        }}
      />
      <CustomActionButton // button next
        title={String.next}
        onPress={_onPressActionBtn}
        customContainerStyle={styles.nextButtonCon}
      />
    </ImageBackground>
  );
};

export default Intrested;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: Color.pureWhite,
  },
  imgBackgroundStyle: {
    opacity: 0.15,
  },
  detailsDescriptionContainer: {
    marginHorizontal: normalize(60),
    width: '70%',
  },
  titleText: {
    fontFamily: Fonts.muliBold,
    fontSize: normalize(14),
    textAlign: 'center',
    lineHeight: normalize(27),
  },
  descriptionTextStyle: {
    fontFamily: Fonts.muliRegular,
    fontSize: normalize(14),
    textAlign: 'center',
    lineHeight: normalize(27),
  },
  nextButtonCon: {
    flex: 0.12,
    marginBottom: normalize(40),
    backgroundColor: Color.twilightBlue,
  },
  checkIcon: {
    position: 'absolute',
    left: 125,
    bottom: 295,
    padding: 2,
    borderRadius: normalize(50),
    backgroundColor: Color.twilightBlue,
  },
});
