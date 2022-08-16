const CodeExampleKeystore = {
  generatingKeystore: `keytool -genkey -v -alias app-name-alias -keysize 2048 -keyalg RSA -keystore app-name-release-key.keystore -validity 9999`,
  gradlePropertiesKeystore: `
  MYAPP_RELEASE_STORE_FILE=app-name-release-key.keystore
  MYAPP_RELEASE_KEY_ALIAS=app-name-alias
  MYAPP_RELEASE_STORE_PASSWORD=bravolog
  MYAPP_RELEASE_KEY_PASSWORD=bravolog`,
};

export { CodeExampleKeystore };
