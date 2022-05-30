import { Image, StyleSheet, Text, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import LocalImages from '../../utils/LocalImages'
import { normalize } from '../../utils/Dimensions'
export default class index extends Component {
  render() {
    return (
    <SafeAreaView style={styles.headerCon}>
      <Image 
      source={LocalImages.backIcon}
      style={styles.backIconSty}
      />
    </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  headerCon:{
    height:normalize(50),
    marginTop:normalize(35)
  },
  backIconSty:{
    marginLeft:normalize(16),
    height:normalize(16),
    width:normalize(16)
  }
})