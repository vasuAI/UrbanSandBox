import React from 'react';
import {normalize} from '../../utils/Dimensions';
import {Color, LocalImages} from '../../utils';
import {Image, StyleSheet, Text, View} from 'react-native';

const arr = [1, 2, 3, 4, 5];
const lastElement = arr.length - 1;
interface Props {
  curntStatus: number;
}
const CustomProgressBar = (props: Props) => {
  console.log(
    '🚀 ~ file: CustomProgressBar.tsx ~ line 12 ~ CustomProgressBar ~ props',
  );

  const {curntStatus} = props;

  const Node = (props: any) => {
    const {elements, index} = props;
    return (
      <>
        <View
          style={[
            styles.nodeContainer,
            index >= curntStatus - 1 ? null : styles.nodeContainerFilled,
          ]}>
          {index >= curntStatus - 1 ? (
            <Text>{elements}</Text>
          ) : (
            <Image source={LocalImages.checkIcon} style={styles.iconStyle} />
          )}
        </View>
        {index < lastElement ? (
          <Text
            style={[index >= curntStatus - 1 ? null : styles.linkNodeStyle]}>
            ___
          </Text>
        ) : null}
      </>
    );
  };
  return (
    <View style={styles.parentContainer}>
      {arr.map((e, i) => {
        return <Node elements={e} index={i} key={i} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: normalize(20),
    marginBottom: normalize(15),
  },
  nodeContainer: {
    borderWidth: 1,
    borderRadius: 50,
    color: Color.black,
    width: normalize(30),
    alignItems: 'center',
    height: normalize(30),
    justifyContent: 'center',
  },
  nodeContainerFilled: {
    backgroundColor: Color.wheat,
  },
  linkNodeStyle: {
    color: Color.wheat,
  },
  iconStyle: {
    width: normalize(14),
    height: normalize(14),
  },
});

export default React.memo(CustomProgressBar);
