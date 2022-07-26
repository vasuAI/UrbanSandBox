import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {normalize} from '../../utils/Dimensions';
import {Color, Fonts} from '../../utils';

const OtpScreen = () => {
  const pin1ref = useRef<any>();
  const pin2ref = useRef<any>();
  const pin3ref = useRef<any>();
  const pin4ref = useRef<any>();

  const [pin1, setPin1] = useState('');
  const [pin2, setPin2] = useState('');
  const [pin3, setPin3] = useState('');
  const [pin4, setPin4] = useState('');
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

export default OtpScreen;

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
