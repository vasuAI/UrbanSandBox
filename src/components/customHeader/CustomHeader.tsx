import React from 'react';
import {normalize} from '../../utils/Dimensions';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames, LocalImages} from '../../utils';
import {Image, Platform, StyleSheet, TouchableOpacity} from 'react-native';

const CustomHeader = () => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      style={styles.headerCon}
      onPress={() => navigation.navigate(ScreenNames.LOG_IN)}>
      <Image source={LocalImages.backIcon} style={styles.backIconSty} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  headerCon: {
    width: normalize(50),
    height: normalize(50),
    justifyContent: 'center',
    marginTop: normalize(Platform.OS == 'ios' ? 20 : 0),
  },
  backIconSty: {
    width: normalize(16),
    height: normalize(16),
    marginLeft: normalize(16),
  },
});
export default React.memo(CustomHeader);
