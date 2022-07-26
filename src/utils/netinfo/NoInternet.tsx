import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LocalImages from '../LocalImages';

const NoInternet = () => {
  return (
    <View style={styles.contentContainer}>
      <Image source={LocalImages.noInternet} style={styles.imageStyle} />
    </View>
  );
};

export default NoInternet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 0.5,
    borderRadius: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});
