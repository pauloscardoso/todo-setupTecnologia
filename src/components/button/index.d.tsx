import { Insets,StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';

namespace ButtonProps {
  export interface Props extends TouchableOpacityProps {
    children?: React.ReactNode;
    iconLeft?: JSX.Element | null;
    iconRight?: JSX.Element | null;
    backgroundColor?: string;
    bold?: boolean;
    color?: string;
    disabled?: boolean;
    loading?: boolean;
    styleText?: StyleProp<TextStyle>;
    styleViewIcon?: StyleProp<ViewStyle>;
    hitSlop?: Insets;
    opacity?: number;
  }
}

export default ButtonProps;
