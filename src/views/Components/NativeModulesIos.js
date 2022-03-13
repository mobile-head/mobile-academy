import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeExamples } from "variables/codeExamples";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { StyleSheet } from "utils";
import style from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

// import icons from "variables/icons";

const NativeModulesIos = () => {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h4 className="title">Módulos Nativos</h4>
                <p style={styles.fadedText}>
                  Os módulos nativos têm o propósito de trazer mais performance
                  e opções para o programador no que diz respeito a
                  disponibilidade de funcionalidades. Apesar da extensão e da
                  quantidade de pacotes disponíveis para javascript, deve-se
                  considerar a performance da aplicação e a disponibilidade para
                  Android e iOS destas, chegando à conclusão sobre a utilização
                  ou não de módulos nativos que devem ser, por sua vez,
                  desenvolvidos em código Java e Swift.
                </p>
              </CardHeader>
              <CardBody>
                <h4 className="title">iOS</h4>
                <h5 style={styles.hightlightedSubtitle}>Bridge / Ponte</h5>
                <p style={styles.fadedText}>
                  A ponte é a conexão entre código nativo e código em
                  JavaScript, visto que a aplicação que roda no dispositivo é
                  criada através de um "pacote de código JavaScript". Como
                  modificamos esse pacote com código nativo? Através da ponte.
                </p>
                <br />
                <h6 style={styles.topic}>BridgingHeader.h</h6>
                <p style={styles.topicDescription}>
                  É o header que declara os pacotes em Objective-C que
                  precisaremos para realizar a ponte da aplicação.
                  <br /> <b>OBS.:</b> Pode ser criado e linkado{" "}
                  <b>automaticamente</b> criando um arquivo Swift qualquer
                  dentro do escopo do projeto principal utilizando o Xcode.
                </p>
                <pre>
                  <SyntaxHighlighter
                    language="objectivec"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.NativeModules.Ios.Bridge[0]}
                  />
                </pre>
                <br />
                <h6 style={styles.topic}>RCTBridge.m</h6>
                <p style={styles.topicDescription}>
                  É o arquivo no qual serão mapeadas as classes e métodos
                  nativos que serão utilizados dentro do JavaScript.
                </p>
                <pre>
                  <SyntaxHighlighter
                    language="objectivec"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.NativeModules.Ios.Bridge[1]}
                  />
                </pre>
                <br />
                <h6 style={styles.topic}>ExampleClass.swift</h6>
                <p style={styles.topicDescription}>
                  Um exemplo de classe em Swift que será exposta para o
                  javascript em React-Native.
                </p>
                <pre>
                  <SyntaxHighlighter
                    language="swift"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.NativeModules.Ios.Bridge[2]}
                  />
                </pre>
                <br />
                <h6 style={styles.topic}>ExampleEventEmitter.swift</h6>
                <p style={styles.topicDescription}>
                  Um exemplo de classe em Swift que disparará eventos para o
                  React-Native e será utilizada também como módulo exportado.
                </p>
                <pre>
                  <SyntaxHighlighter
                    language="swift"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.NativeModules.Ios.Bridge[3]}
                  />
                </pre>
                <br />
                <h6 style={styles.topic}>No JavaScript</h6>
                <p style={styles.topicDescription}>
                  Um exemplo de classe em Swift que será exposta para o
                  javascript em React-Native.
                </p>
                <pre>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.NativeModules.Ios.Bridge[4]}
                  />
                </pre>
                <br />
                <h5 style={styles.hightlightedSubtitle}>
                  BackgroundLocationService
                </h5>
                <p style={styles.fadedText}>
                  É o serviço desenvolvido para responder à pergunta "As viagens
                  dos motoristas são longas. O que acontece se colocarem a
                  aplicação em segundo plano?". Com ele, a aplicação continua
                  recebendo atualizações de posição e sincronizando com as
                  tabelas do banco de dados sempre que possível.
                </p>
                <div class="container-fluid">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <h5
                        style={styles.listTitle}
                        class="list-group-item-heading"
                      >
                        <i className="now-ui-icons files_box" />
                        Assets
                      </h5>
                      <p class="list-group-item-text" className="text-muted">
                        Contém structs auxiliares e constantes.
                      </p>
                    </li>
                    <li class="list-group-item">
                      <h5
                        style={styles.listTitle}
                        class="list-group-item-heading"
                      >
                        <i className="now-ui-icons files_paper" />
                        Base/ExternalModule
                      </h5>
                      <p class="list-group-item-text" className="text-muted">
                        É uma classe base que facilita a implementação de
                        módulos externos. Dessa forma, ao invés de
                        reimplementarmos os métodos essenciais, só extendemos a
                        classe.
                      </p>
                    </li>
                    <li class="list-group-item">
                      <h5
                        style={styles.listTitle}
                        class="list-group-item-heading"
                      >
                        <i className="now-ui-icons files_paper" />
                        Base/RNEventEmitterBase
                      </h5>
                      <p class="list-group-item-text" className="text-muted">
                        Declara uma base para classe emissora de eventos. Para
                        utilizar, basta extender em uma nova classe.
                      </p>
                    </li>
                    <li class="list-group-item">
                      <h5
                        style={styles.listTitle}
                        class="list-group-item-heading"
                      >
                        <i className="now-ui-icons location_world" />
                        Helpers/InternetConnectionManager
                      </h5>
                      <p class="list-group-item-text" className="text-muted">
                        Auxilia basicamente a detectarmos se um dispositivo
                        possui conectividade com a internet de maneira estática.
                      </p>
                    </li>
                    <li class="list-group-item">
                      <h5
                        style={styles.listTitle}
                        class="list-group-item-heading"
                      >
                        <i className="now-ui-icons location_compass-05" />
                        Helpers/LocationManager
                      </h5>
                      <p class="list-group-item-text" className="text-muted">
                        Responsável por retornar atualizações de localização
                        através do método getCurrentLocation com callback.
                      </p>
                    </li>
                    <li class="list-group-item">
                      <h5
                        style={styles.listTitle}
                        class="list-group-item-heading"
                      >
                        <i className="now-ui-icons tech_mobile" />
                        Helpers/NotificationManager
                      </h5>
                      <p class="list-group-item-text" className="text-muted">
                        Facilita a criação de notificações através do
                        scheduleNotification, que recebe a struct-modelo
                        NotificationData.
                      </p>
                    </li>
                    <li class="list-group-item">
                      <h5
                        style={styles.listTitle}
                        class="list-group-item-heading"
                      >
                        <i className="now-ui-icons location_compass-05" />
                        CurrentLocation
                      </h5>
                      <p class="list-group-item-text" className="text-muted">
                        Implementação final do método getCurrentLocation com
                        ponte para React-Native que auxilia na recuperação dos
                        dados de localização atuais.
                      </p>
                    </li>
                    <li class="list-group-item">
                      <h5
                        style={styles.listTitle}
                        class="list-group-item-heading"
                      >
                        <i className="now-ui-icons ui-2_time-alarm" />
                        LocationModule {"->"} LocationManager
                      </h5>
                      <p class="list-group-item-text" className="text-muted">
                        Módulo central do BackgroundService, aonde são passados
                        os dados que aparecerão nas notificações para o usuário
                        e aonde o serviço é iniciado. <br />
                        <br /> Em Swift, o serviço inicia uma BackgroundTask e é
                        mantido rodando através de um ScheduledTimer, que roda a
                        cada X segundos. Sempre que roda, ele utiliza o
                        CurrentLocation para pegar a localização atual e envia
                        para a aplicação React-Native através de um evento
                        utilizando o SwiftEventEmitter. Além disso, sempre que
                        roda, ele dispara novamente a notificação com os dados
                        da viagem no dispositivo do usuário utilizando o
                        NotificationManager.
                      </p>
                    </li>
                    <li class="list-group-item">
                      <h5
                        style={styles.listTitle}
                        class="list-group-item-heading"
                      >
                        <i className="now-ui-icons location_world" />
                        NetworkModule {"->"} NetworkState
                      </h5>
                      <p class="list-group-item-text" className="text-muted">
                        O método startNetworkWatching inicia um serviço básico
                        que dispara eventos através do SwiftEventEmitter sempre
                        que são detectadas alterações na rede e na conectividade
                        com a internet.
                      </p>
                    </li>
                    <li class="list-group-item">
                      <h5
                        style={styles.listTitle}
                        class="list-group-item-heading"
                      >
                        <i className="now-ui-icons loader_refresh" />
                        SwiftEventEmitter
                      </h5>
                      <p class="list-group-item-text" className="text-muted">
                        É a implementação final do emissor de eventos que será
                        utilizado ao redor de todos os módulos nativos. Utiliza
                        extensão da classe RNEventEmitterBase.
                      </p>
                    </li>
                  </ul>
                </div>
                <br />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

const styles = {
  fadedText: {
    color: "#777",
    fontSize: "0.9rem",
    paddingLeft: 5,
    paddingRight: 5,
  },
  subtitle: {
    fontSize: "1rem",
  },
  hightlightedSubtitle: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#444",
  },
  topic: {
    fontSize: "0.8rem",
    fontWeight: 500,
    textTransform: "none",
  },
  topicDescription: {
    fontSize: "0.8rem",
    fontWeight: 500,
    textTransform: "none",
    color: "#999",
  },
  listTitle: {
    gap: "0.75rem",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: "1.2rem",
  },
};

export default NativeModulesIos;
