const {join} = require('path');


module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  overrides: [
    {
      files: ['*.ts'],
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
      ],
      plugins: ['import'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.base.json',
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.base.json',
          },
        },
      },
      rules: {
        '@typescript-eslint/explicit-member-accessibility': [
          'error',
          {
            accessibility: 'explicit',
            overrides: { constructors: 'no-public' },
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/order': [
          'error',
          {
            alphabetize: { order: 'asc' },
            'newlines-between': 'always',
            groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          },
        ],
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'max-len': 'off',
        'sort-imports': [
          'error',
          {
            ignoreCase: true,
            ignoreDeclarationSort: true,
          },
        ],
        'spaced-comment': ['off'],
      },
    },
  ],
};
