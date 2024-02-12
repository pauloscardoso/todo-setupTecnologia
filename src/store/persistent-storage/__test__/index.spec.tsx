import { persistentStorages } from '..';

describe('Component listStorage', () => {
  it('Should load list of states that will persist', () => {
    expect(persistentStorages).toEqual(['auth', 'installation', 'todos']);
  });
});
