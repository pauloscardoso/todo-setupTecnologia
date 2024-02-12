import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAppActions, useAppSelector } from 'src/store/hooks';
import { isEqual } from 'lodash';
import { Platform, UIManager } from 'react-native';

import { navigationRef } from './root-navigation';
import AuthStack from './auth';
import AppStack from './app';

const Routes: React.FC = () => {
  const [isLoading, setLoading] = React.useState(true);
  const isMounted = React.useRef(false);
  const { signIn } = useAppActions();
  const { activated } = useAppSelector(
    ({ auth }) => ({
      activated: auth?.activated,
    }),
    isEqual,
  );

  console.log('activated route =', activated);

  const loadState = React.useCallback(async () => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental)
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    if (activated === true) signIn();
    setLoading(false);
  }, [activated, signIn]);

  React.useEffect(() => {
    /* istanbul ignore if */ if (isMounted.current) return;
    loadState();
    isMounted.current = true;
  }, [loadState]);

  const Screen = React.useCallback(() => {
    if (isLoading) return null;
    if (!activated) {
      return <AuthStack />;
    }
    return <AppStack />;
  }, [isLoading, activated]);

  return (
    <NavigationContainer ref={navigationRef}>
      <Screen />
    </NavigationContainer>
  );
};

export { Routes };
