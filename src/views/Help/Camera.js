import React, { useRef } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
} from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ReduxExamples } from "../../variables/codeExamplesRedux";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

import { CodeExampleCamera } from "../../variables/codeExampleCamera";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

//= ==============================================================================================
const Camera = () => {
  const refProp = useRef(null);
  const refExemplos = useRef(null);
  const refEvents = useRef(null);
  const refBarcode = useRef(null);

  useScrollToAnchorByParams({
    refProp,
    refExemplos,
    refEvents,
    refBarcode,
  });

  const changeAnchorLink = useChangeAnchorLink();

  //= ==============================================================================================
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="9">
            <Card>
              <CardHeader>
                <h5 className="title">Câmera</h5>

                <p className="text-muted">
                  Hoje em dia muitas aplicações necessitam capturar imagens de
                  alguma maneira para que possam implementar funcionalidades
                  como leitura de código de barras, cadastro de produtos em uma
                  loja virtual e até mesmo para realizar a vistoria cautelar em
                  veículos. E para desempenhar essa funcionalidade nós usamos o
                  componente <b>RNCamera</b> <b>(react-native-camera)</b>, o
                  componente mais abrangente de câmera para o React Native.
                </p>
              </CardHeader>

              <CardBody>
                <div id="react-redux">
                  <h7
                    ref={refProp}
                    id="prop"
                    class="text-muted font-weight-bold"
                  >
                    Props
                  </h7>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>autoFocus</td>
                        <td>String</td>
                        <td>
                          Use a propriedade autoFocus para especificar a
                          configuração de foco automático de sua câmera.
                          Valores: RNCamera.Constants.AutoFocus.on (padrão) ou
                          RNCamera.Constants.AutoFocus.off.
                        </td>
                      </tr>
                      <tr>
                        <td>flashMode</td>
                        <td>String</td>
                        <td>
                          Especifica o modo de flash da sua câmera. Valores:
                          RNCamera.Constants.FlashMode.off (padrão),
                          RNCamera.Constants.FlashMode.on,
                          RNCamera.Constants.FlashMode.auto ou
                          RNCamera.Constants.FlashMode.torch.
                        </td>
                      </tr>
                      <tr>
                        <td>type</td>
                        <td>String</td>
                        <td>
                          Use a propriedade type para especificar qual câmera
                          usar. Valores: RNCamera.Constants.Type.front ou
                          RNCamera.Constants.Type.back (padrão).
                        </td>
                      </tr>
                      <tr>
                        <td>zoom</td>
                        <td>Float</td>
                        <td>
                          Especifica o zoom da sua câmera. O valor 0 é sem zoom,
                          1 é o zoom máximo. Para um zoom médio, por exemplo,
                          você poderia passar 0,5. Valores: float de 0 a 1.0.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <br />

                  <h7
                    ref={refEvents}
                    id="events"
                    class="text-muted font-weight-bold"
                  >
                    Eventos Nativos
                  </h7>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>onCameraReady</td>
                        <td>
                          Função a ser chamada quando o código nativo emitir o
                          evento onCameraReady, quando a câmera estiver pronta.
                          Este evento também será acionado ao alterar as câmeras
                          (por tipo ou cameraId).
                        </td>
                      </tr>
                      <tr>
                        <td>onPictureTaken</td>
                        <td>
                          Função a ser chamada quando o código nativo emite o
                          evento onPictureTaken, quando a câmera tira uma foto,
                          mas antes de todo processamento extra acontecer. Isso
                          pode ser útil para permitir que a interface do usuário
                          tire outras fotos enquanto o processamento da imagem
                          atual ainda está ocorrendo.
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <br />

                  <h7
                    ref={refBarcode}
                    id="barcode"
                    class="text-muted font-weight-bold"
                  >
                    Bar Code
                  </h7>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>onBarCodeRead</td>
                        <td>
                          Chamará o método especificado quando um código de
                          barras for detectado na visualização da câmera.
                        </td>
                      </tr>
                      <tr>
                        <td>barCodeTypes</td>
                        <td>
                          Uma matriz de tipos de código de barras para
                          pesquisar. Padrões para todos os tipos listados acima.
                          Nenhum efeito se onBarCodeRead for indefinido.
                          Exemplo:{" "}
                          <pre>
                            <SyntaxHighlighter
                              language="js"
                              style={a11yDark}
                              PreTag="div"
                              children={CodeExampleCamera.cameraBarCodeExample}
                            />
                          </pre>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <br />

                  <h7
                    ref={refExemplos}
                    id="exemplos"
                    class="text-muted font-weight-bold"
                  >
                    Exemplo
                  </h7>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleCamera.cameraExample}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col
            style={{
              position: "fixed",
              top: "11%",
              right: "0px",
              width: "22%",
            }}
          >
            <Card className="card-user">
              <CardHeader>
                <CardTitle>Guia Rápido</CardTitle>
              </CardHeader>

              <CardBody>
                <p>
                  <a className="text-muted">FlatList:</a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Props"
                        onClick={() => changeAnchorLink("refProp")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Eventos Nativos"
                        onClick={() => changeAnchorLink("refEvents")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Bar Code"
                        onClick={() => changeAnchorLink("refBarcode")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Exemplo"
                        onClick={() => changeAnchorLink("refExemplos")}
                      />
                    </li>
                  </ul>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

const styles = {
  cardHeaderBreadcrumb: {
    fontSize: "1rem",
    fontWeight: "100",
    color: "#888",
  },
  cardHeaderTitle: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#444",
  },
  itemContainer: {},
  itemTitle: {
    fontSize: "1.1rem",
    color: "#444",
    fontWeight: "bold",
    marginBottom: "1rem",
    marginTop: "2rem",
  },
  itemText: {
    fontSize: "0.9rem",
    color: "#777",
  },
  itemSubtitle: {
    fontSize: "1rem",
    color: "#555",
    fontWeight: "bold",
  },
  itemSubtext: {
    fontSize: "0.8rem",
    color: "#888",
  },
};

export default Camera;
