import { reduxStorage } from '../index';

describe('Storage', () => {
  test('setItem should return a resolved promise with value true', () => {
    const key = 'testKey';
    const value = 'testValue';

    return expect(reduxStorage.setItem(key, value)).resolves.toBe(true);
  });

  test('setItem should call AsyncStorage.setItem with correct key and value', () => {
    const mockAsyncStorageSetItem = jest.fn();
    reduxStorage.setItem = mockAsyncStorageSetItem;

    const key = 'testKey';
    const value = 'testValue';

    reduxStorage.setItem(key, value);

    expect(mockAsyncStorageSetItem).toHaveBeenCalledWith(key, value);
  });

  test('getItem with valid key', async () => {
    const key = 'validKey';
    const expectedValue = 'someValue';
    jest.spyOn(reduxStorage, 'getItem').mockResolvedValue(expectedValue);
    const result = await reduxStorage.getItem(key);
    expect(result).toBe(expectedValue);
  });

  test('getItem with invalid key', async () => {
    const key = 'invalidKey';
    jest.spyOn(reduxStorage, 'getItem').mockResolvedValue(null);
    const result = await reduxStorage.getItem(key);
    expect(result).toBe(null);
  });

  test('getItem with key having null value', async () => {
    const key = 'keyWithNullValue';
    jest.spyOn(reduxStorage, 'getItem').mockResolvedValue(null);
    const result = await reduxStorage.getItem(key);
    expect(result).toBe(null);
  });

  test('removing an existing item from AsyncStorage', async () => {
    const key = 'existingKey';
    await reduxStorage.removeItem(key);
    expect(await reduxStorage.getItem(key)).toBe(null);
  });

  test('attempting to remove a non-existing item from AsyncStorage', async () => {
    const key = 'nonExistingKey';
    await reduxStorage.removeItem(key);
    expect(await reduxStorage.getItem(key)).toBe(null);
  });
});
