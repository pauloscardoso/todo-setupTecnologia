import { NavigationContainerRef } from '@react-navigation/native';
import * as React from 'react';
// import GlobalProps from 'src/global/types/index.d';

const navigationRef = React.createRef<NavigationContainerRef<GlobalProps.all>>();

const navigateRoot = {
  navigate: (name: GlobalProps.all, params?: GlobalProps.all) => {
    if (navigationRef.current) navigationRef.current?.navigate(name, params);
  },
  getCurrentRoute: () => navigationRef.current?.getCurrentRoute(),
};

export { navigateRoot, navigationRef };
