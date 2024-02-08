import { PixelRatio } from 'react-native';

const normalizeFontScale = (size: number) => Math.round(size / PixelRatio.getFontScale());
const normalizeFont = (size: number) => `${Math.round(size / PixelRatio.getFontScale())}px`;

export { normalizeFontScale, normalizeFont };
