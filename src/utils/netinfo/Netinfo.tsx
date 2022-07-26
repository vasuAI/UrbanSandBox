import NoInternet from './NoInternet';
import Modal from 'react-native-modal';
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {useDispatch} from 'react-redux';
import ActionType from '../../actions/ActionType';

export default function NetInfoHandler() {
  const [isConnected, setIsConnected] = useState<boolean | null>(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    dispatch({type: ActionType.UPDATE_INTERNET_FIELDS, payload: {isConnected}});
    return () => {
      unsubscribe();
    };
  }, []);

  if (isConnected) {
    return null;
  }

  return (
    <Modal
      coverScreen
      avoidKeyboard
      isVisible={!isConnected}
      animationInTiming={600}
      animationOutTiming={300}
      animationOut="fadeOutDown"
      style={styles.modalContainer}>
      <NoInternet />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
});
