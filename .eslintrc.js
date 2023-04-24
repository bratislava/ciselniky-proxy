{
  "root": true,
  "env": {
    "es2021": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 12,
    "project": "tsconfig.json",
    "sourceType": "module"
  },
  "ignorePatterns": [
    ".eslintrc.js"
  ],
  "plugins": [
    "@typescript-eslint/eslint-plugin",
    "prettier",
    "import"
  ],
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "max-classes-per-file": "off",
    "sonarjs/no-duplicate-string": "off",
    "no-restricted-syntax": "off",
    "new-cap": "off",
    "no-underscore-dangle": "off",
    "guard-for-in": "off"
  },
  "overrides": [
    {
      "files": [
        "**/*.spec.ts",
        "**/*.e2e-spec.ts",
        "**/*.spec.js",
        "**/*.e2e-spec.js"
      ],
      "env": {
        "es2021": true,
        "node": true
      },
      "plugins": [
        "@typescript-eslint/eslint-plugin",
        "sonarjs",
        "prettier",
        "import"
      ],
      "extends": [
        "plugin:@typescript-eslint/recommended",
        "prettier"
      ],
      "settings": {
        "jest": {
          "version": 27
        }
      },
      "rules": {
        "prettier/prettier": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "import/prefer-default-export": "off",
        "class-methods-use-this": "off",
        "max-classes-per-file": "off",
        "sonarjs/no-duplicate-string": "off",
        "no-restricted-syntax": "off",
        "new-cap": "off",
        "no-underscore-dangle": "off",
        "guard-for-in": "off"
      }
    }
  ]
}
