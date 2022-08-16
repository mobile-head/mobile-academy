const CodeExamplesGeneratingApkAab = {
  generatingApkDev: `cd android && ./gradlew clean && ./gradlew assembleDev && `,
  generatingApkQas: `cd android && ./gradlew clean && ./gradlew assembleQas`,
  generatingApkPrd: `cd android && ./gradlew clean && ./gradlew assemblePrd`,
  generatingApkRelease: `cd android && ./gradlew clean && ./gradlew assembleRelease`,
  generatingAab: `cd android && ./gradlew clean && ./gradlew bundleRelease`,
};

export { CodeExamplesGeneratingApkAab };
