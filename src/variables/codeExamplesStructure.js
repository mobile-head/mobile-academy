const CodeExamplesStructure = {
  initProject: `npx react-native init ProjectName`,
  initProjectWithTemplate: `npx react-native init ProjectName --template https://github.com/Kalebesamuel/react-native-template`,
  androidManifestExample: `<?xml version="1.0" encoding="utf-8"?>
  <manifest xmlns:android="http://schemas.android.com/apk/res/android"
      xmlns:tools="http://schemas.android.com/tools"
      package="com.comercial">
  
      <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
      <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
      <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
  
      <application android:usesCleartextTraffic="true" tools:targetApi="28" tools:ignore="GoogleAppIndexingWarning" />
  </manifest>
  `,
  valuesXmlExample: `<resources>
  <string name="app_name">DEV Project Name</string>
  <string name="CodePushDeploymentKey">GBrDEnAEgiRE2jbyB082K_lnzHHP4HHWx9AsL</string>

  <string name="appCenterCrashes_whenToSendCrashes" moduleConfig="true" translatable="false">DO_NOT_ASK_JAVASCRIPT</string>
  <string name="appCenterAnalytics_whenToEnableAnalytics" moduleConfig="true" translatable="false">ALWAYS_SEND</string>
</resources>
`,
  projectExtReactBefore: `project.ext.react = [
    entryFile: "index.js",
    enableHermes: false,
]    `,
  projectExtReactAfter: `project.ext.react = [
    entryFile: "index.js",
    enableHermes: false,  // clean and rebuild if changing

    devDisabledInStaging: true,
    bundleInStaging: true,

    devDisabledInDev: true,
    bundleInDev: true,

    devDisabledInQas: true,
    bundleInQas: true,

    devDisabledInPrd: true,
    bundleInPrd: true,
]`,
  defaultConfigBefore: `
    defaultConfig {
        applicationId "com.comercial"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 34
        versionName "13.33.12"
        multiDexEnabled true
    }
`,
  defaultConfigAfter: `
    defaultConfig {
        applicationId "com.comercial"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 34
        versionName "13.33.12"
        multiDexEnabled true
    
        resValue "string", "build_config_package", "com.comercial"
        manifestPlaceholders = [label: 'MyApp']
    }
`,
  signingConfigBefore: ` signingConfigs {
  debug {
      storeFile file('debug.keystore')
      storePassword 'android'
      keyAlias 'androiddebugkey'
      keyPassword 'android'
  }
  release {
      if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
          storeFile file(MYAPP_RELEASE_STORE_FILE)
          storePassword MYAPP_RELEASE_STORE_PASSWORD
          keyAlias MYAPP_RELEASE_KEY_ALIAS
          keyPassword MYAPP_RELEASE_KEY_PASSWORD
      }
  }`,
  signingConfigAfter: `signingConfigs {
    debug {
        storeFile file('debug.keystore')
        storePassword 'android'
        keyAlias 'androiddebugkey'
        keyPassword 'android'
    }
    release {
        if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
            storeFile file(MYAPP_RELEASE_STORE_FILE)
            storePassword MYAPP_RELEASE_STORE_PASSWORD
            keyAlias MYAPP_RELEASE_KEY_ALIAS
            keyPassword MYAPP_RELEASE_KEY_PASSWORD
        }
    }
    dev {
        storeFile file('debug.keystore')
        storePassword 'android'
        keyAlias 'androiddebugkey'
        keyPassword 'android'
    }
    qas {
        storeFile file('debug.keystore')
        storePassword 'android'
        keyAlias 'androiddebugkey'
        keyPassword 'android'
    }
    prd {
        storeFile file('debug.keystore')
        storePassword 'android'
        keyAlias 'androiddebugkey'
        keyPassword 'android'
    }
}`,
  buildTypesBefore: ` buildTypes {
  debug {
      matchingFallbacks = ['debug', 'release']

      signingConfig signingConfigs.debug
      signingConfig signingConfigs.release
      minifyEnabled enableProguardInReleaseBuilds          
  }
  release {
      // Caution! In production, you need to generate your own keystore file.
      // see https://facebook.github.io/react-native/docs/signed-apk-android.
      signingConfig signingConfigs.debug
      minifyEnabled enableProguardInReleaseBuilds
      proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
      signingConfig signingConfigs.release
  }
}`,
  buildTypesAfter: `buildTypes {
  debug {
      // Se esta linha não existir é importante que seja adicionada
      matchingFallbacks = ['debug', 'release']

      signingConfig signingConfigs.debug
      signingConfig signingConfigs.release
      minifyEnabled enableProguardInReleaseBuilds          
  }
  release {
      // Caution! In production, you need to generate your own keystore file.
      // see https://facebook.github.io/react-native/docs/signed-apk-android.
      signingConfig signingConfigs.debug
      minifyEnabled enableProguardInReleaseBuilds
      proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
      signingConfig signingConfigs.release
  }
  dev {
      // ---- Nos permite herdar as configurações de debug
      initWith debug
      // ---- Definimos o sufixo do package id da aplicação
      applicationIdSuffix ".dev"
      manifestPlaceholders = [label: 'Project Name Dev']
  }
  qas {
      initWith debug
      applicationIdSuffix ".qas"
      manifestPlaceholders = [label: 'Project Name Qas']
  }
  prd {
      initWith debug
      applicationIdSuffix ".prd"
      manifestPlaceholders = [label: 'Project Name Prd']
  }
}`,
  configFileContent: `export * from './env';`,
  envFileContent: `export { env } from './prd'`,
  devFileExample: `export const env = {
    // ---- Nome do ambiente
    NAME: 'DEV',
    // ---- Protocolo caso tenha ambientes http e https
    PROTOCOL: 'HTTPS',
    // ---- Host para qual o ambiente deve apontar
    HOST_NAME: 'api.evolog.com.br',
    // ---- Porta referente ao server a qual o ambiente pertence. (Somente necessário se o app realizar chamadas no Server)
    PORT_SERVER: '3000',
    // ---- Porta referente ao app-server
    PORT_APP_SERVER: '3050',
};`,
  packageJsonCommands: `"run:android:dev": "node ./scripts/prepareEnvDevelopment.js dev android && yarn android --appIdSuffix dev --variant dev",
"run:android:qas": "node ./scripts/prepareEnvDevelopment.js qas android && yarn android --appIdSuffix qas --variant qas",
"run:android:prd": "node ./scripts/prepareEnvDevelopment.js prd android && yarn android --appIdSuffix prd --variant prd",`,
  runAppExample: `yarn run:android:dev`,
};

export { CodeExamplesStructure };
