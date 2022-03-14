const CodeExmpleHusky = {
  installHusky: `yarn add husky --dev`,
  initHusky: `npx husky-init && yarn`,
  addHuskyActions: `npx husky add .husky/pre-commit "yarn lint-staged"`,
  installLintStaged: `yarn add lint-staged --dev`,
  lintStaged: `
  ...

  "lint-staged": {
    "*/.{js, jsx, ts, tsx}": [
        "yarn eslint",
        "yarn prettier --write"
    ]
  },

  ...
  `,

  scriptsToHusky: `
  "prettier:check": "prettier --config .prettierrc --check \"application/**/*.{js}\"",
  `,
};

export { CodeExmpleHusky };
