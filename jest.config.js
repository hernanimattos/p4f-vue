const path = require('path');

module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  rootDir: path.resolve(__dirname, './'),
  setupFiles: ['<rootDir>/tests/setup.js']
};
