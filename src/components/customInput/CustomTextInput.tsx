import {
  View,
  Image,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

import React, {useState} from 'react';
import {normalize} from '../../utils/Dimensions';
import Color from '../../utils/Color';

/**
 * @params Props
 * @returns
 */
interface Props {
  value: string;
  leftIcon?: any;
  rigtIcon?: any;
  callback?: Function;
  onChangeText: any;
  placeholder: string;
  rigtHiddenIcon?: any;
  secureTextEntry?: boolean;
}

const CustomInput = (props: Props) => {
  const [eyeVisble, setEyeVisble] = useState(true);
  const {
    leftIcon,
    rigtIcon,
    placeholder,
    onChangeText,
    rigtHiddenIcon,
    secureTextEntry,
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
  const toggleEyeButton = (status: boolean) => {
    setEyeVisble(!status);
  };
  return (
    <View style={styles.parentContainer}>
      <Image source={leftIcon} style={styles.leftIconSty} />
      <TextInput
        value={props.value}
        autoCapitalize="none"
        placeholder={placeholder}
        style={[styles.container]}
        secureTextEntry={
          (eyeVisble && placeholder == 'Password') ?? secureTextEntry
        }
        onChangeText={handleChangeText}
      />
      <TouchableOpacity onPress={() => toggleEyeButton(eyeVisble)}>
        <Image
          source={eyeVisble ? rigtIcon : rigtHiddenIcon}
          style={styles.eyeIconSty}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
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
  },
});

export default React.memo(CustomInput);
