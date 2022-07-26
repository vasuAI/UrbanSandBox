import {Color, Fonts} from '../../utils';
import React, {useRef, useState} from 'react';
import {normalize} from '../../utils/Dimensions';
import {Keyboard, StyleSheet, TextInput, View} from 'react-native';

const OtpScreen = (props: any) => {
  console.log('🚀 ~ file: OtpScreen.tsx ~ line 7 ~ OtpScreen ~ props', props);

  const pin1ref = useRef<any>();
  const pin2ref = useRef<any>();
  const pin3ref = useRef<any>();
  const pin4ref = useRef<any>();
  let mpin1 = '';
  // let mpin2 = '',
  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');

  mpin1 = pin1 + pin2 + pin3 + pin4;
  props?.setMpin1(mpin1);
  // props?.setMpin2();

  return (
    <View style={styles.childContainer}>
      <TextInput
        ref={pin1ref}
        focusable={true}
        maxLength={1}
        onChangeText={(value: any) => {
          setPin1(value);
          if (pin1 != ' ') {
            pin2ref.current.focus();
          }
        }}
        onKeyPress={(e: any) => {
          if (e.nativeEvent.key == 'Backspace') {
            Keyboard.dismiss();
          }
        }}
        style={styles.customInputContainerStyle}
        keyboardType={'numeric'}
      />
      <TextInput
        ref={pin2ref}
        maxLength={1}
        onChangeText={(value: any) => {
          setPin2(value);
          if (pin2 != ' ' && pin2.length <= 0) {
            pin3ref.current.focus();
          }
        }}
        onKeyPress={(e: any) => {
          if (e.nativeEvent.key == 'Backspace') {
            setPin2('');
            if (pin2.length === 0) {
              pin1ref.current.focus();
            }
          } else {
            setPin4(e.nativeEvent.key);
            Keyboard.dismiss();
          }
        }}
        style={styles.customInputContainerStyle}
        keyboardType={'numeric'}
      />
      <TextInput
        ref={pin3ref}
        maxLength={1}
        onChangeText={(value: any) => {
          setPin3(value);
          if (pin3 != ' ' && pin3.length <= 0) {
            pin4ref.current.focus();
          }
        }}
        onKeyPress={(e: any) => {
          if (e.nativeEvent.key == 'Backspace') {
            setPin3('');
            if (pin3.length === 0) {
              pin2ref.current.focus();
            }
          } else {
            setPin4(e.nativeEvent.key);
            Keyboard.dismiss();
          }
        }}
        style={styles.customInputContainerStyle}
        keyboardType={'numeric'}
      />
      <TextInput
        ref={pin4ref}
        maxLength={1}
        onChangeText={(value: any) => {
          setPin4(value);
          if (pin4 != ' ') {
          }
        }}
        onKeyPress={(e: any) => {
          if (e.nativeEvent.key == 'Backspace') {
            setPin4('');
            if (pin4.length === 0) {
              pin3ref.current.focus();
            }
          } else {
            setPin4(e.nativeEvent.key);
            Keyboard.dismiss();
          }
        }}
        style={styles.customInputContainerStyle}
        keyboardType={'numeric'}
      />
    </View>
  );
};

export default React.memo(OtpScreen);

const styles = StyleSheet.create({
  childContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: normalize(16),
    marginTop: normalize(20),
  },
  customInputContainerStyle: {
    borderWidth: 1,
    textAlign: 'center',
    width: normalize(75),
    height: normalize(70),
    fontSize: normalize(30),
    borderColor: Color.wheat,
    borderRadius: normalize(10),
    backgroundColor: Color.pureWhite,
    marginHorizontal: normalize(5),
    fontFamily: Fonts.muliSemiBold,
  },
  customInputTextStyleStyle: {
    marginStart: normalize(28),
    fontSize: normalize(24),
  },
});
