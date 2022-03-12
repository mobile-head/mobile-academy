const CodeExamplesCodePush = {
  codePushDeploymentKey: `
    ...
    <string name="CodePushDeploymentKey">dBrMEAnEfiRe2jbrB0O2K_lnzHhP4HHWx9Asw</string>
    ...
    `,
  codePushInstall: `
    yarn add react-native-code-push
    `,
  codePushDependecies: `
    ...
    implementation project(path: ':react-native-code-push')
    ...
  `,
  codePushApply: `
    ...
    apply from: "../../node_modules/react-native-code-push/android/codepush.gradle"
    ...
`,
  codePushSettingsGradle: `
    ...
    include ':app', ':react-native-code-push'
    project(':react-native-code-push').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-code-push/android/app')
    ...
`,
  codePushMainApplicationImport: `
    ...
    import com.microsoft.codepush.react.CodePush;
    ...
`,
  codePushGetJsBundle: `
    ...
    @Override
    protected String getJSBundleFile() {
        return CodePush.getJSBundleFile();
    }
    ...
`,
  releaseCodeExamples: `
    "android:dev:release": "appcenter codepush patch -a ownerName/ProjectName-Android dev --disabled && appcenter codepush release-react -a ownerName/ProjectName-Android -d dev -m -t '*'",
    "android:qas:release": "appcenter codepush patch -a ownerName/ProjectName-Android dev --disabled && appcenter codepush release-react -a ownerName/ProjectName-Android -d qas -m -t '*'",
    "android:prd:release": "appcenter codepush patch -a ownerName/ProjectName-Android dev --disabled && appcenter codepush release-react -a ownerName/ProjectName-Android -d prd -m -t '*'",

    "ios:dev:release": "appcenter codepush patch -a ownerName/ProjectName-Ios dev --disabled && appcenter codepush release-react -a ownerName/ProjectName-Ios -d dev -m -t '*'",
    "ios:qas:release": "appcenter codepush patch -a ownerName/ProjectName-Ios dev --disabled && appcenter codepush release-react -a ownerName/ProjectName-Ios -d qas -m -t '*'",
    "ios:prd:release": "appcenter codepush patch -a ownerName/ProjectName-Ios dev --disabled && appcenter codepush release-react -a ownerName/ProjectName-Ios -d prd -m -t '*'",
`,
  undoReleaseExamples: `
    "android:dev:undoLastRelease": "appcenter codepush rollback -a ownerName/ProjectName-Android dev",
    "android:qas:undoLastRelease": "appcenter codepush rollback -a ownerName/ProjectName-Android qas"
    "android:prd:undoLastRelease": "appcenter codepush rollback -a ownerName/ProjectName-Android prd"

    "ios:dev:undoLastRelease": "appcenter codepush rollback -a ownerName/ProjectName-Ios dev",
    "ios:qas:undoLastRelease": "appcenter codepush rollback -a ownerName/ProjectName-Ios qas"
    "ios:prd:undoLastRelease": "appcenter codepush rollback -a ownerName/ProjectName-Ios prd"
`,
  undoLastRelease: `
    yarn android:dev:undoLastRelease
`,
  releasingNewVersion: `
    yarn android:dev:release --description "EVOLOG-0000 - Melhoria na performance de busca..."
`,
  importCodePushReactNative: `
    import codePush from 'react-native-code-push';
`,
  exportCodePushReactNative: `
    export default codePush({
        checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
    })(App);
`,
};

export { CodeExamplesCodePush };
