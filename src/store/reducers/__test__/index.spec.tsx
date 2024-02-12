import { reducers } from '..';

describe('Component reducers', () => {
  it('Should configure the reducer', () => {
    expect(reducers).toEqual(expect.any(Function));
  });
});
