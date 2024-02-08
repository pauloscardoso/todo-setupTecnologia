const theme = {
  colors: {
    text_title: '#291717',
    text_sub_title: '#847D7D',
    text_label_component: '#574D4D',
    text_input_place_holder: '#B8B4B4',
    red_primary: '#E8153F',
    red_secondary: '#DD002C',

    white: '#FFFFFF',
    background: '#F5F5F5',
    grayMedium: '#DEDEDE',
    grayLight: '#F4F4F4',
    gray: '#C4C4C4',
    grayDarkLight: '#868686',
    grayDark: '#4D4D4D',
    redUltraLight: '#FFC6C6',
    redLight: '#FF7B7B',
    error: '#FE040C',
    yellow: '#FEB804',
    orange: '#FE6D04',
    green: '#1EB21E',
    grayDarkMedium: '#222222',
    black: '#000000',
  },
  borderRadius: '10px',
  fontFamily: {
    bold: 'Figtree-Bold',
    medium: 'Figtree-Medium',
    regular: 'Figtree-Regular',
  },
  fontPadding: {
    top: '3px',
  },
};

export default theme;

export type ThemeProps = typeof theme;
