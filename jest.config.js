module.exports = {
  preset: 'react-native',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/__test__/setup-files.js'],
  // setupFilesAfterEnv: ['<rootDir>/__test__/jest-setup-after.js'],
  "setupFilesAfterEnv": ["@testing-library/react-native/extend-expect"],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  moduleDirectories: ['node_modules', './__test__/helpers'],
  modulePathIgnorePatterns: ['mocks'],
  // moduleNameMapper: {
  //   '\\.svg': '<rootDir>/__test__/jest-svg-mock.js',
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
  //     '<rootDir>/__test__/assetsTransformer.js', // mock para extensões
  // },
  // coveragePathIgnorePatterns: ['\\.d.tsx', '<rootDir>/src/components/icon/index.tsx'],
};
