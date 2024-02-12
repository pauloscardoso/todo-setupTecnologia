import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { ButtonView, Container, Title, ViewIcon } from './styles';
import typ from './index.d';

const Button: React.FC<typ.Props> = ({
  children,
  iconLeft,
  iconRight,
  backgroundColor,
  styleViewIcon,
  opacity,
  activeOpacity,
  bold,
  color,
  hitSlop,
  disabled,
  loading,
  styleText,
  testID,
  ...props
}) => {
  const { colors } = useTheme();

  const backgroundButton = React.useMemo(() => {
    if (disabled) return colors.gray;
    if (backgroundColor) return backgroundColor;
    return colors.red_primary;
  }, [disabled, colors, backgroundColor]);

  const colorText = React.useMemo(() => {
    if (disabled) return colors.grayDarkLight;
    if (color) return color;
    return colors.white;
  }, [color, disabled, colors]);

  const Children = React.useCallback(() => {
    if (typeof children === 'string') {
      return (
        <>
          {iconLeft && !loading && (
            <ViewIcon left style={styleViewIcon} testID="button-viewIconLeft">
              {React.cloneElement(iconLeft, { color: colorText })}
            </ViewIcon>
          )}
          <Title bold={bold} color={colorText} style={styleText}>
            {children}
          </Title>
          {loading && (
            <ViewIcon testID="button-loading" style={styleViewIcon}>
              <ActivityIndicator size="small" color={colorText} accessibilityHint="loading" />
            </ViewIcon>
          )}
          {iconRight && !loading && (
            <ViewIcon style={styleViewIcon} testID="button-viewIconRight">
              {React.cloneElement(iconRight, { color: colorText })}
            </ViewIcon>
          )}
        </>
      );
    }
    if (children) {
      return <ButtonView testID="button-touchable">{children}</ButtonView>;
    }
    return null;
  }, [children, iconLeft, loading, styleViewIcon, colorText, bold, styleText, iconRight]);

  return (
    <Container
      {...props}
      testID={testID || 'button-container'}
      background={backgroundButton}
      loading={loading}
      disabled={disabled || loading}
      opacity={opacity}
      activeOpacity={activeOpacity ?? 0.8}
      hitSlop={hitSlop}
    >
      <Children />
    </Container>
  );
};

export default Button;
