import {Color, Fonts} from '../../utils';
import React, {useRef, useState} from 'react';
import {normalize} from '../../utils/Dimensions';
import {Keyboard, StyleSheet, TextInput, View} from 'react-native';
interface Props {
  setMpin1: Function;
}

const OtpScreen = (props: Props) => {
  const {setMpin1} = props;
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
  setMpin1(mpin1);

  const _onEnterPin = (
    value: any,
    setPin: Function,
    pinNumber: string,
    pinRef?: any,
  ) => {
    setPin(value);
    if (pinNumber.length == 0) {
      pinRef.current.focus();
    } else {
    }
  };
  const _onPressBackKey = (
    event: any,
    emptyPin: Function,
    pinNumber: string,
    pinRef: any,
  ) => {
    if (event.nativeEvent.key == 'Backspace') {
      emptyPin('');
      if (pinNumber.length === 0) {
        pinRef.current.focus();
      }
    } else {
      setPin4(event.nativeEvent.key);
      Keyboard.dismiss();
    }
  };
  return (
    <View style={styles.childContainer}>
      <TextInput
        ref={pin1ref}
        focusable={true}
        maxLength={1}
        onChangeText={(value: any) => {
          _onEnterPin(value, setPin1, pin1, pin2ref);
        }}
        onKeyPress={(e: any) => {
          _onPressBackKey(e, setMpin1, pin1, pin2ref);
        }}
        style={styles.customInputContainerStyle}
        keyboardType={'numeric'}
      />
      <TextInput
        ref={pin2ref}
        maxLength={1}
        onChangeText={(value: any) =>
          _onEnterPin(value, setPin2, pin2, pin3ref)
        }
        onKeyPress={(e: any) => _onPressBackKey(e, setPin2, pin2, pin1ref)}
        style={styles.customInputContainerStyle}
        keyboardType={'numeric'}
      />
      <TextInput
        ref={pin3ref}
        maxLength={1}
        onChangeText={(value: any) =>
          _onEnterPin(value, setPin3, pin3, pin4ref)
        }
        onKeyPress={(e: any) => _onPressBackKey(e, setPin3, pin3, pin2ref)}
        style={styles.customInputContainerStyle}
        keyboardType={'numeric'}
      />
      <TextInput
        ref={pin4ref}
        maxLength={1}
        onChangeText={(value: any) =>
          _onEnterPin(value, setPin4, pin4, pin4ref)
        }
        onKeyPress={(e: any) => _onPressBackKey(e, setPin4, pin4, pin3ref)}
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
    marginHorizontal: normalize(5),
    fontFamily: Fonts.muliSemiBold,
    backgroundColor: Color.pureWhite,
  },
  customInputTextStyleStyle: {
    fontSize: normalize(24),
    marginStart: normalize(28),
  },
});
