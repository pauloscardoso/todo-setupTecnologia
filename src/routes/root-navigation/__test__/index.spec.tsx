import { navigateRoot, navigationRef } from '../index';

describe('Component navigation-root', () => {
  beforeAll(() => {
    (navigationRef.current as object) = {
      navigate: jest.fn(),
      getCurrentRoute: jest.fn().mockReturnValue('test route'),
      isReady: jest.fn().mockReturnValue(true),
    };
  });

  it('Should run the navigate function', () => {
    navigateRoot.navigate('test', { test: 1 });
    expect(navigationRef.current?.navigate).toHaveBeenLastCalledWith('test', { test: 1 });
  });

  it('Should run the getCurrentRoute function', () => {
    expect(navigateRoot.getCurrentRoute()).toEqual('test route');
  });

  it('Should check isReady', () => {
    expect(navigateRoot.isReady()).toEqual(true);
  });

  it('Should check if navigate is null', () => {
    (navigationRef.current as GlobalProps.all) = undefined;
    navigateRoot.navigate('test', { test: 1 });
    expect(navigationRef.current?.navigate).toBeUndefined();
    expect(navigateRoot.isReady()).toBeUndefined();
  });
  it('Should check if isReady is null', () => {
    (navigationRef.current as GlobalProps.all) = undefined;
    expect(navigateRoot.isReady()).toBeUndefined();
  });
});
