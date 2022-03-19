const CodeExampleCommitzen = {
  installCommitzen: `yarn global add commitizen`,
  installAdapter: `yarn add cz-jira-smart-commit-validated`,
  configCommitizen: `"config": {
    "commitizen": {
      "path": "./node_modules/cz-jira-smart-commit-validated",
      "disableScopeLowerCase": false,
      "disableSubjectLowerCase": false,
      "maxHeaderWidth": 100,
      "maxLineWidth": 100,
      "defaultType": "",
      "defaultScope": "",
      "defaultSubject": "",
      "defaultBody": "",
      "defaultIssuesPrefix": "EVOLOG",
      "enableMultiIssuesIdByCommit": false
    }
  }`,
  commitWithoutMessage: `git commit`,
  integrateCommitzenWithHusky: `npx husky add .husky/prepare-commit-msg "exec < /dev/tty && node_modules/.bin/cz --hook || true"`,
};

export { CodeExampleCommitzen };
