import { NavigationProp, ParamListBase } from '@react-navigation/native';

namespace _ {
  export interface Props {
    navigation: NavigationProp<ParamListBase>;
  }

  export type UserData = {
    id: string;
    email: string;
    fullName: string;
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
