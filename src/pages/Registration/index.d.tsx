import { NavigationProp, ParamListBase } from '@react-navigation/native';

namespace _ {
  export interface Props {
    navigation: NavigationProp<ParamListBase>;
  }
}

export namespace stylesProps {
  export interface Text {
    variant: 'title' | 'footer' | 'create' | 'footerLink';
  }

  export type ButtonType = {
    active: boolean;
  };
}

export default _;
