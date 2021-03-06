module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
  },
  "extends": [
    "google",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parserOptions": {
    "ecmaVersion": 11,
  },
  "rules": {
    "quotes": ["error", "double"],
  },
};
