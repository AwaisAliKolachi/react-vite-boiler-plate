// lint-staged.config.js

module.exports = {
    '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
    '*.{json,md}': ['prettier --write'],
  };