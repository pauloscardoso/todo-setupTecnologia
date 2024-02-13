module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/__test__/setup-files.js'],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', './__test__/helpers'],
  modulePathIgnorePatterns: ['mocks'],
};
