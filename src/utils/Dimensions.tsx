import {Dimensions, PixelRatio} from 'react-native';


const {height: winHeight, width:winWidth} = Dimensions.get('window');
const scale = winWidth / 375;

export function normalize(size: number) {
  return PixelRatio.roundToNearestPixel(size * scale);
}
