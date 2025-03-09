import pluginJs from '@eslint/js';
import mantine from 'eslint-config-mantine';
import pluginReact from 'eslint-plugin-react';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    ...mantine,
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            '@typescript-eslint/consistent-type-imports': 'error',
            '@typescript-eslint/no-duplicate-enum-values': 'error'
        }
    },
    { settings: { react: { version: 'detect' } } },
    globalIgnores(['dist', 'node_modules', 'wailsjs'])
]);
