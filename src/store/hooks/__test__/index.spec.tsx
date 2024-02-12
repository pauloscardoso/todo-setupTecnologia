import { useAppActions, useAppSelector } from '..';

describe('Component hooks', () => {
  it('Should create custom redux hooks', () => {
    expect(useAppSelector).toEqual(expect.any(Function));
    expect(useAppActions).toEqual(expect.any(Function));
  });
});
