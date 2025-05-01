import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        process: true,
        Express: true
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'no-console': 'warn',
      'no-undef': 'error',
      'no-unused-vars': 'off', // desativado em favor da regra do TypeScript
      'no-use-before-define': 'error',
      'prefer-const': 'error',
    },
  },
];