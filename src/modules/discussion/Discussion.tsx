import React, {useState} from 'react';
import {normalize} from '../../utils/Dimensions';
import RenderFlatlist from './RenderFlatlist';
import {CustomHeader2} from '../../components';
import {Color, Fonts, LocalImages, String, Mocks} from '../../utils';
import {View, Text, ImageBackground, StyleSheet, FlatList} from 'react-native';
/**
 *
 * @returns
 */
const Discussion = () => {
  const [limit, setLimit] = useState(5);
  const [data, setData] = useState(Mocks.discussionData);
  const _keyExtractor = (item: {id: any}) => item + item.id;
  const _ListEmptyComponent = () => {
    return (
      <View>
        <Text>No Data!!!!!</Text>
      </View>
    );
  };
  /**
   *
   * @param param0
   * @returns
   */
  const _renderItem = ({item}: any) => {
    return (
      <RenderFlatlist
        id={item.id}
        time={item.time}
        image={item.image}
        title={item.title}
        heading={item.heading}
        isLiked={item.isLiked}
        likeCount={item.likeCount}
        handleLikeCounter={handleLike}
        commentDetail={item.commentDetail}
        numberOfComments={item.numberOfComments}
      />
    );
  };
  /**
   *
   */

  const _onEndReached = () => {
    let newData = Mocks.discussionData.slice(limit, limit + 5);
    setData([...data, ...newData]);
    setLimit(limit + 5);
  };

  /**
   * @return function
   */

  const handleLike = (id: number) => {
    let index = data.findIndex((current: any) => current.id === id);
    let newData = [...data];
    newData[index].isLiked = !newData[index].isLiked;
    setData([...newData]);
  };
  return (
    <ImageBackground
      source={LocalImages.background}
      imageStyle={styles.imgBackgroundStyle}
      style={styles.parentContainer}>
      <CustomHeader2
        title={String.discussion}
        image1={LocalImages.seachIcon}
        image2={LocalImages.mailIcon}
        image3={LocalImages.profileIcon}
      />
      <FlatList
        data={data}
        renderItem={_renderItem}
        keyExtractor={_keyExtractor}
        onEndReached={_onEndReached}
        ListEmptyComponent={_ListEmptyComponent}
      />
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: Color.pureWhite,
  },
  imgBackgroundStyle: {
    opacity: 0.2,
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: normalize(50),
    marginHorizontal: normalize(15),
  },
  headingTextStyle: {
    fontSize: normalize(20),
    fontFamily: Fonts.muliBold,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: normalize(140),
  },
  headerIconStyle: {
    width: normalize(25),
    height: normalize(25),
    margin: normalize(6),
  },
  headerSearchIconStyle: {
    width: normalize(20),
    height: normalize(20),
    margin: normalize(6),
  },
});
export default React.memo(Discussion);
