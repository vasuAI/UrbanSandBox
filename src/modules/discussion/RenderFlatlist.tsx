import React, {useCallback} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {normalize} from '../../utils/Dimensions';
import {Color, Fonts, LocalImages, String} from '../../utils';

/**
 *
 * @param item
 * @returns flatlist data
 */

export default function RenderFlatlist({item}: any) {
  console.log(
    '🚀 ~ file: RenderFlatlist.tsx ~ line 21 ~ RenderFlatlist ~ item',
    item,
  );

  const colorArray = [Color.beige, Color.duckEggBlue, Color.lightKhaki];
  const _renderItem = useCallback(
    ({item}: any) => {
      const {heading, time, title, image, likeCount, commentDetail, id} = item;
      return (
        <View
          style={[
            styles.parentContainer,
            {backgroundColor: colorArray[id % 3]},
          ]}>
          <View style={styles.cardHeaderContainer}>
            <Image source={LocalImages.demoDp} style={styles.profileIcon} />
            <View style={styles.profileText}>
              <Text style={styles.headingTextStyle}>{heading}</Text>
              <Text style={styles.timeTextStyle}>{time}</Text>
            </View>
            <Image
              source={LocalImages.horiztontalIcon}
              style={styles.horiztontalIconStyle}
            />
          </View>

          <Text style={styles.titleTextStyle}>{title}</Text>
          <Image source={image} style={styles.titleImg} />

          <View style={styles.likeContainer}>
            <TouchableOpacity>
              <Image source={LocalImages.heartActiveIcon} />
            </TouchableOpacity>
            <Text style={styles.likeTextStyle}>{`${likeCount} Likes`}</Text>
          </View>

          <Text style={styles.numberOfCommentText}>
            {`View all ${item.numberOfComments} comments`}
          </Text>

          <View style={styles.commentContainer}>
            <Image source={LocalImages.demoDp} style={styles.commentIcon} />
            <View style={styles.commnetVisibleStyle}>
              <Text style={styles.commentUserStyle}>{commentDetail.name}</Text>
              <Text style={styles.commentBodyStyle}>{commentDetail.body}</Text>
            </View>
          </View>

          <View style={styles.postCommentContainer}>
            <Image source={LocalImages.demoDp} style={styles.commentIcon} />
            <TextInput
              placeholder={String.placeholder}
              style={styles.textInputSty}
            />
          </View>
        </View>
      );
    },
    [item],
  );
  const _keyExtractor = (item: {id: any}) => item + item.id;
  return (
    <FlatList
      data={item}
      renderItem={_renderItem}
      keyExtractor={_keyExtractor}
    />
  );
}
const styles = StyleSheet.create({
  parentContainer: {
    width: normalize(343),
    height: normalize(443),
    borderRadius: normalize(10),
    marginVertical: normalize(10),
    marginHorizontal: normalize(16),
    paddingHorizontal: normalize(16),
  },
  cardHeaderContainer: {
    flexDirection: 'row',
    marginVertical: normalize(16),
  },
  profileText: {
    marginStart: normalize(12),
  },
  titleImg: {
    width: '100%',
    height: normalize(185),
    borderRadius: normalize(10),
  },
  commentContainer: {
    flexDirection: 'row',
  },
  profileIcon: {
    width: normalize(35),
    height: normalize(35),
  },
  headingTextStyle: {
    fontSize: normalize(14),
    lineHeight: normalize(18),
    fontFamily: Fonts.muliBold,
  },
  timeTextStyle: {
    opacity: 0.3,
    fontSize: normalize(10),
    lineHeight: normalize(13),
    fontFamily: Fonts.muliSemiBold,
  },
  titleTextStyle: {
    fontSize: normalize(14),
    lineHeight: normalize(18),
    marginBottom: normalize(8),
    fontFamily: Fonts.muliSemiBold,
  },
  likeContainer: {
    flexDirection: 'row',
    marginVertical: normalize(10),
  },
  likeTextStyle: {
    fontSize: normalize(12),
    lineHeight: normalize(15),
    fontFamily: Fonts.muliBold,
    marginHorizontal: normalize(8),
  },
  numberOfCommentText: {
    opacity: 0.3,
    fontSize: normalize(12),
    lineHeight: normalize(15),
    marginBottom: normalize(8),
    fontFamily: Fonts.muliBold,
  },
  commentIcon: {
    width: normalize(25),
    height: normalize(25),
  },
  commnetVisibleStyle: {
    marginBottom: 10,
    marginLeft: normalize(16),
  },
  commentUserStyle: {
    fontSize: normalize(10),
    lineHeight: normalize(13),
    fontFamily: Fonts.muliBold,
  },
  commentBodyStyle: {
    fontSize: normalize(12),
    lineHeight: normalize(15),
    fontFamily: Fonts.muliRegular,
  },
  postCommentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputSty: {
    width: '80%',
    height: normalize(35),
    padding: normalize(8),
    backgroundColor: 'white',
    borderRadius: normalize(5),
    marginHorizontal: normalize(10),
  },
  horiztontalIconStyle: {
    marginStart: 'auto',
    width: normalize(24),
    height: normalize(24),
  },
});
