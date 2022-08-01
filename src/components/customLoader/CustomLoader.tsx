import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {Color} from '../../utils';

const CustomLoader = () => {
  return (
    <ActivityIndicator
      size={'large'}
      style={styles.parentContainer}
      color={Color.twilightBlue}
    />
  );
};

export default React.memo(CustomLoader);

const styles = StyleSheet.create({
  parentContainer: {
    alignSelf: 'center',
    position: 'absolute',
    top: '50%',
  },
});
