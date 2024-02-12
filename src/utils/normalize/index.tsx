import { Dimensions, PixelRatio } from 'react-native';
import typ from './index.d';

const baseWidth = 411; // Moto e20
const baseHeight = 841;

let { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const setDimensions = ({ height, width }: typ.setDimensions) => {
  screenHeight = height;
  screenWidth = width;
};

const sizeX = (value: number, minSize = 0, maxDiff = 4) => {
  const nearestSize = Math.round(PixelRatio.roundToNearestPixel((value * screenWidth) / baseWidth));
  let newSize = nearestSize < minSize ? minSize : nearestSize;
  if (newSize > value + maxDiff) newSize = value + maxDiff;
  if (value > 0 && minSize >= 0 && newSize < 0) newSize = 0;
  return newSize;
};

const size = (value: number, minSize = 0, maxDiff = 4) => {
  const nearestSize = Math.round(PixelRatio.roundToNearestPixel((value * screenHeight) / baseHeight));
  let newSize = nearestSize < minSize ? minSize : nearestSize;
  if (newSize > value + maxDiff) newSize = value + maxDiff;
  return newSize;
};

const fontSize = (value: number, minSize = 10, maxDiff = 4) => {
  const result = size(value, minSize, maxDiff);
  return result;
};

const Normalize = { setDimensions, fontSize, size, sizeX };

export { Normalize };
