import theme from '..';

describe('Component Theme of Global', () => {
  it('Should export the parameters', () => {
    expect(theme).toEqual({
      colors: expect.any(Object),
    });
  });
});
