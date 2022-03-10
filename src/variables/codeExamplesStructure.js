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
};

export { CodeExamplesStructure };
