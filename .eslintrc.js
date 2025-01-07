module.exports = {
  env: {
    node: true, // Node.js 환경을 설정하여 module을 인식
    es2020: true, // 최신 ECMAScript 기능을 사용
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', // 'import'와 'export' 사용을 위해 module로 설정
    ecmaFeatures: {
      jsx: true, // JSX 사용을 위한 설정
    },
  },
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    semi: 'error',
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
  },
  ignorePatterns: ['dist/', 'node_modules/'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
