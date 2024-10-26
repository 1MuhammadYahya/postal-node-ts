import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';

export default [
    js.configs.recommended,
    {
        plugins: {
            jsdoc: jsdoc,
        },
        languageOptions: {
            sourceType: 'module',
            ecmaVersion: 2022,
            env: {
                node: true,
                es6: true,
            },
        },
        rules: {
            ...jsdoc.configs['flat/recommended'].rules,
            'jsdoc/check-alignment': 'error',
            'jsdoc/check-param-names': 'error',
            'jsdoc/check-tag-names': 'error',
            'jsdoc/check-types': 'error',
            'jsdoc/require-param': 'error',
            'jsdoc/require-returns': 'error',
        },
    },
];