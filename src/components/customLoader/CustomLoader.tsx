import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';

const CustomLoader = () => {
  return <ActivityIndicator size={'large'} />;
};

export default React.memo(CustomLoader);

const styles = StyleSheet.create({});
