const CodeExamplePipeline = {
  bitbucketYml: `image: node:10.15.3

    # Definição dos passos da nossa pipeline
    definitions:
        steps:
            - step: &prepare # Passo responsável por preparar o nosso ambiente
                  name: 'Environment preparation' # Nome do passo
                  image: node:10.15.3 # Podemos trabalhar com imagens de docker
                  caches: # Uso de cache para reduzir o tempo de execução da build
                      - node
                      - gradle
    
                  script: # Scripts que serão executados em sequência
                      - npm install
                      - npm install react-native-reanimated@2.2.0
                      - npm i --global yarn
                      - npm i -g react-native-cli
    
            - step: &buildQas # Passo responsável por realizar a build do app
                  name: 'Build'
                  image: mingc/android-build-box:latest # Docker image contendo o que precisamos para gera uma apk
                  deployment: qas # Nosso ambiente de deployment
                  caches:
                      - node
                  script:
                      - node ./scripts/setEnv.js qas
                      - cd ./android
                      - chmod +x gradlew
                      - ./gradlew clean
                      - ./gradlew assembleQas
                      - ls -R
                      - export APP_VERSION=$(node ../scripts/exportAppVersion.js)
                      - printenv | grep APP_VERSION
                      - mv app/build/outputs/apk/qas/app-qas.apk app/build/outputs/apk/qas/app-qas-$(node ../scripts/exportAppVersion.js).apk
                      - pipe: atlassian/bitbucket-upload-file:0.1.2 # Realiza upload da apk para página de Downloads do repositório
                        variables:
                            BITBUCKET_USERNAME: $BITBUCKET_USERNAME
                            BITBUCKET_APP_PASSWORD: $BITBUCKET_APP_PASSWORD
                            FILENAME: app/build/outputs/apk/qas/app-qas-$(node ../scripts/exportAppVersion.js).apk
                  artifacts:
                      - app/build/outputs/apk/qas/app-qas-$(node ../scripts/exportAppVersion.js).apk
    
            - step: &buildPrd
                  name: Build
                  image: mingc/android-build-box:latest
                  deployment: prd
                  caches:
                      - node
                  script:
                      - node ./scripts/setEnv.js prd
                      - cd ./android
                      - chmod +x gradlew
                      - ./gradlew clean
                      - ./gradlew assembleRelease
                      - ls -R
                      - export APP_VERSION=$(node ../scripts/exportAppVersion.js)
                      - printenv | grep APP_VERSION
                      - mv app/build/outputs/apk/release/app-release.apk app/build/outputs/apk/release/app-release-$(node ../scripts/exportAppVersion.js).apk
                      - pipe: atlassian/bitbucket-upload-file:0.1.2
                        variables:
                            BITBUCKET_USERNAME: $BITBUCKET_USERNAME
                            BITBUCKET_APP_PASSWORD: $BITBUCKET_APP_PASSWORD
                            FILENAME: app/build/outputs/apk/release/app-release-$(node ../scripts/exportAppVersion.js).apk
                  artifacts:
                      - app/build/outputs/apk/release/app-release-$(node ../scripts/exportAppVersion.js).apk
    
    # Chamada dos nossos passos pra cada branch, a branch dev não irá disparar a pipeline
    pipelines:
        branches:
            qas:
                - step: *prepare
                - step: *buildQas
    
            master:
                - step: *prepare
                - step: *buildPrd
    `,
};

export { CodeExamplePipeline };
