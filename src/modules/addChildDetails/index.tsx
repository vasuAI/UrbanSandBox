import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BasicDetails from './AddBasicDetails';
import LangInterest from './AddLangInterest';

const index = () => {
  const [types, setTypes] = useState('');
  const type = (props: any) => {
    setTypes(props);
  };
  // switch (types) {
  //   case 'BASIC_DETAILS':
  //     return <BasicDetails screenType={type} />;
  //   case 'LANG_INTEREST':
  //     return <LangInterest />;
  //   default:
  //     break;
  // }
};

export default index;

const styles = StyleSheet.create({});
