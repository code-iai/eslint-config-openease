module.exports = {
    globals: {
        MyGlobal: true,
    },
    env: {
        browser: false,
        commonjs: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    extends: [
        './rules/best-practices',
        './rules/errors',
        './rules/node',
        './rules/style',
        './rules/variables',
        './rules/es6',
        './rules/imports',
    ].map(require.resolve),
    rules: {
        strict: 'error',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.js',
                    '.jsx'
                ]
            }
        }
    }
};
