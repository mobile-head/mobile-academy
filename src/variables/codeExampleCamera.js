const CodeExampleCamera = {
  cameraBarCodeExample: `<RNCamera barCodeTypes={[RNCamera.Constants.BarCodeType.qr]} />`,

  cameraExample: `<RNCamera
  ref={(ref) => {
      camera = ref;
  }}
  style={{
      flex: 1,
  }}
  onPictureTaken={() => handleLoading()}
  barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
  type={type}
  defaultTouchToFocus
  autoFocus={RNCamera.Constants.AutoFocus.on}
  androidCameraPermissionOptions={{
      title: 'Permissão para utilizar a camera',
      message: 'Nós precisamos da sua permissão para utilizar a camera',
      buttonPositive: 'Aceitar o acesso',
      buttonNegative: 'Cancelar',
  }}
  onBarCodeRead={onBarRead}
  ratio="16:9"
  fixOrientation>
  <BarcodeMask
      closeCamera={() => closeCamera()}
      width={width}
      height={height}
      edgeColor="#F57C00"
      showAnimatedLine={animatedLine}
  />
  {capture ? (
      loading ? (
          <View style={styles.containerBtn}>
              <ActivityIndicator size="large" color="white" />
          </View>
      ) : (
          <View style={styles.containerBtn}>
              <TouchableOpacity style={styles.flipButton} onPress={() => takePicture()}>
                  <Icon name="camera" size={35} color={Colors.primary} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.flipExit} onPress={() => closeCamera()}>
                  <Icon name="times" size={35} color={Colors.white} />
              </TouchableOpacity>
          </View>
      )
  ) : null}
</RNCamera>`,
};

export { CodeExampleCamera };
