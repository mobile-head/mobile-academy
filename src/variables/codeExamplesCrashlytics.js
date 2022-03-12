const CodeExamplesCrashlytics = {
  installDependencies: `npm install appcenter appcenter-analytics appcenter-crashes --save-exact`,
  appSecretExample: `{
    "app_secret": "{Your app secret here}"
}`,
  whenToSend: `<string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
<string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>`,
};

export { CodeExamplesCrashlytics };
