const CodeExamplesESLint = {
  dependencies: `
    "@babel/core": "^7.8.6",
    "@babel/eslint-parser": "^7.15.7",
    "@babel/runtime": "^7.8.4",
    "@react-native-community/eslint-config": "^0.0.7",
    "@typescript-eslint/eslint-plugin": "^4.32.0",
    "@typescript-eslint/parser": "^4.32.0",
    "eslint": "^6.8.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-config-prettier": "^8.3.0",
    "eslint-nibble": "^7.0.0",
    "eslint-plugin-import": "^2.24.2",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.26.1",
    "eslint-plugin-react-hooks": "^4.2.0",
    "eslint-plugin-react-native": "^3.11.0",
    "react-rxjs": "^3.0.0-alpha.6",
    "rxjs-compat": "^6.6.7"
    `,
  nibbleScript: `
    "nibble": "eslint-nibble ../NOME_DA_PASTA_DO_APP/",
    `,
  eslintignore: `node_modules/`,
  eslintRc: `
  {
    "env": {
        "node": true,
        "es2020": true
    },
    // ---- Pacotes de regras que estamos extendendo
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "airbnb/hooks",
        "prettier",
        "airbnb-base",
        "plugin:import/typescript"
    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    // ---- Adição de puglins
    "plugins": ["react", "react-native"],
    // ---- Edição das regras
    "rules": {
        // allow .js files to contain JSX code
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],

        // prevent eslint to complain about the "styles" variable being used before it was defined
        "no-use-before-define": ["error", { "variables": false, "functions": false }],

        // ignore errors for the react-navigation package
        "react/prop-types": ["off", { "ignore": ["navigation", "navigation.navigate"] }],

        "import/no-extraneous-dependencies": ["off"],

        "react-hooks/rules-of-hooks": "off",

        "no-console": "off",

        "import/extensions": "off",

        "import/no-unresolved": ["off", { "caseSensitive": false }],

        "operator-linebreak": "off",

        "linebreak-style": "off",

        "global-require": "off",

        // Allow 130 characteres by line
        "max-len": ["error", 130],

        // Indent with 4 spaces
        "indent": ["off", 4],

        // Indent JSX with 4 spaces
        "react/jsx-indent": ["off"],

        // Indent props with 4 spaces
        "react/jsx-indent-props": ["off"],

        "eol-last": "off",

        "space-before-function-paren": "error",

        "block-spacing": "error",

        "space-before-blocks": "error",

        "arrow-spacing": ["error", { "before": true, "after": true }],

        "import/prefer-default-export": "off",

        "curly": "off",

        "object-curly-newline": "off",

        "nonblock-statement-body-position": "off",

        "implicit-arrow-linebreak": "off",

        "no-unused-expressions": "off",

        "eqeqeq": ["off"],

        "no-async-promise-executor": ["off"],

        "no-param-reassign": "off",

        "react-hooks/exhaustive-deps": "off",

        "no-confusing-arrow": "off",

        "react/jsx-no-bind": "off",

        "comma-dangle": "off",

        "no-await-in-loop": "off",

        "consistent-return": "off",

        "no-plusplus": "off",

        // "no-console": "off",

        "prefer-destructuring": "warn",

        "function-paren-newline": "off",

        "array-callback-return": "off"
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".ts", ".tsx", ".native.js"],
                "moduleDirectory": ["node_modules", "src/", "application/components/"]
            }
        }
    }
}
  `,
  settingsJsonESLint: `
    // ---- Tenta resolver possíveis problemas que foram identificados quando o arquivo for salvo   
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    },
    // ---- Habilita a task do lint, veremos como executá-la depois
    "eslint.lintTask.enable": true,
  `,
  runningNibble: `yarn nibble`,
};

export { CodeExamplesESLint };
