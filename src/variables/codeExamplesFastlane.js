const CodeExamplesFastlane = {
  installFastlane: `brew install fastlane`,
  bundleInstall: `sudo bundle install`,
  fastlaneInit: `fastlane init`,
  createGemfile: `touch Gemfile && code Gemfile`,
  gemfileContent: `
  source "https://rubygems.org"
  gem "fastlane"
  `,
};

export { CodeExamplesFastlane };
