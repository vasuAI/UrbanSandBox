import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CustomLoader = () => {
  return <ActivityIndicator size={'large'} />;
};

export default React.memo(CustomLoader);

const styles = StyleSheet.create({});
