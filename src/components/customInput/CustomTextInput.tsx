import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardTypeOptions,
} from 'react-native';
import React, {useState} from 'react';

import Color from '../../utils/Color';
import {normalize} from '../../utils/Dimensions';
import localImages from '../../utils/LocalImages';

/**
 * @params Props
 * @description defining required props
 */

interface Props {
  value?: string;
  leftIcon?: any;
  rigtIcon?: any;
  onChangeText: any;
  placeholder: string;
  rigtHiddenIcon?: any;
  secureTextEntry?: boolean;
  customContainerStyle?: any;
  customLefticonStyle?: any;
  keyboardType?: KeyboardTypeOptions;
}

const CustomInput = (props: Props) => {
  console.log('render');

  const [eyeVisble, setEyeVisble] = useState(true);
  const {
    leftIcon,
    placeholder,
    onChangeText,
    keyboardType,
    secureTextEntry,
    customLefticonStyle,
    customContainerStyle,
  } = props;

  /**
   * @description called on changing text
   * @param value
   */
  const handleChangeText = (value: any) => {
    onChangeText(value);
  };

  /**
   * @description toggle eyeIcon
   * @param status
   */
  const toggleEyeButton = () => {
    setEyeVisble(!eyeVisble);
  };

  return (
    <View style={[styles.parentContainer, customContainerStyle]}>
      <Image
        source={leftIcon}
        style={[styles.leftIconSty, customLefticonStyle]}
      />
      <TextInput
        value={props.value}
        autoCapitalize="none"
        style={styles.container}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={handleChangeText}
        placeholderTextColor={Color.grey}
        secureTextEntry={secureTextEntry && eyeVisble}
      />

      {secureTextEntry && (
        <TouchableOpacity onPress={() => toggleEyeButton()}>
          <Image
            source={eyeVisble ? localImages.eyeIcon : localImages.hiddenEyeIcon}
            style={styles.eyeIconSty}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    // flex: 1,
    flexDirection: 'row',
    height: normalize(50),
    borderRadius: normalize(10),
    backgroundColor: Color.white,
    marginVertical: normalize(5),
    marginHorizontal: normalize(16),
  },
  container: {
    width: normalize(250),
    fontSize: normalize(16),
  },
  leftIconSty: {
    width: normalize(24),
    margin: normalize(12),
    height: normalize(24),
  },
  eyeIconSty: {
    top: normalize(15),
    width: normalize(22),
    height: normalize(22),
  },
});

export default React.memo(CustomInput);
