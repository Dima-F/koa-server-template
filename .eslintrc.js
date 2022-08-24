module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 13
    },
    "rules": {
        "no-return-await": "off",
        "comma-dangle": ["error", "never"],
        "arrow-parens": ["error", "as-needed"]
    }
};
