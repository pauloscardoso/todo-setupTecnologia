/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native';

import { ThemeProps } from 'src/global/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeProps {}
}
