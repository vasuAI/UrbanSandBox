import {Image, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import LocalImages from '../../utils/LocalImages';
import {normalize} from '../../utils/Dimensions';

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.headerCon}>
      <Image source={LocalImages.backIcon} style={styles.backIconSty} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerCon: {
    height: normalize(50),
    marginTop: normalize(35),
  },
  backIconSty: {
    width: normalize(16),
    height: normalize(16),
    marginLeft: normalize(16),
  },
});
export default React.memo(CustomHeader);
