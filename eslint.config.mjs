import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import reactCompiler from 'eslint-plugin-react-compiler';
import tseslint from 'typescript-eslint';
import globals from 'globals';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  [
    ...compat.extends("next/core-web-vitals", "next/typescript"), {
      plugins: {
        'react-compiler': reactCompiler,
      },
      rules: {
        'react-compiler/react-compiler': 'error',
      },
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          project: ['./tsconfig.json'],
          tsconfigRootDir: import.meta.dirname
        },
      },
    }
  ],
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked
);
