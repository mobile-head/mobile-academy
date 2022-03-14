const CodeExamplePrettier = {
  installPrettier: `yarn add prettier --dev`,
  prettierConfiguration: `
  {
    "arrowParens": "always",
    "bracketSpacing": true,
    "jsxBracketSameLine": false,
    "jsxSingleQuote": false,
    "quoteProps": "as-needed",
    "singleQuote": true,
    "semi": true,
    "printWidth": 100,
    "useTabs": false,
    "tabWidth": 4,
    "trailingComma": "es5",
    "bracketSameLine": true
  }
  `,
  settingsJsonPrettier: `
  // ---- Define o prettier como estilizador default do VSCode
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // ---- Define que o prettier será ativado sempre que um arquivo foi salvo
  "editor.formatOnSave": true,
  `,
};

export { CodeExamplePrettier };
