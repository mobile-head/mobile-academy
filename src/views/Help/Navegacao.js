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

import { CodeExampleNavigation } from "../../variables/codeExampleNavigation";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

//= ==============================================================================================
const Navegacao = () => {
  const refStore = useRef(null);
  const refReducer = useRef(null);
  const refAction = useRef(null);
  const refReduxWrapper = useRef(null);
  const refChangingValues = useRef(null);
  const refViewingReduxStateValues = useRef(null);

  useScrollToAnchorByParams({
    refStore,
    refReducer,
    refAction,
    refReduxWrapper,
    refChangingValues,
    refViewingReduxStateValues,
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
                <h5 className="title">Navigation</h5>

                <p className="text-muted">
                  Implementação e casos de uso de hooks para lidar com navegação
                </p>
              </CardHeader>

              <CardBody>
                <div id="react-redux">
                  <h6 id="reactRedux">Navigation</h6>
                  <p>
                    O react-native contém inúmeras formas de definirmos um fluxo
                    de navegação, cada uma impactando em como lidaremos com o
                    fluxo de navegação da nossa aplicação.
                  </p>

                  <p>
                    A melhor forma é trabalharmos com o conceito de Stack's,
                    utilizando Stack's conseguimos definir um agrupamento de
                    screens. Image um cenário onde temos uma aplicação que
                    possui telas que só podem ser acessadas quando o usuário não
                    estiver autenticado e de outro lado telas que só podem ser
                    acessadas quando o usuário estiver autenticado,
                    conseguiriamos então definir o seguinte fluxo abaixo:
                  </p>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Stack Não Autenticada</th>
                        <th>Stack Autenticada</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Sign In</td>
                        <td>Home</td>
                        {/* <td>Sign Up</td> */}
                      </tr>
                      <tr>
                        <td>Sign Up</td>
                        <td>Profile</td>
                      </tr>
                      <tr>
                        <td>Forgot Password</td>
                        <td>Settings</td>
                      </tr>
                    </tbody>
                  </Table>

                  <p>
                    Assim defimos corretamente quais screens o usuário terá
                    acesso baseado no seu status de conexão, esse é apenas um
                    dos casos de uso em que podemos utilizar o conceito de
                    Stack's.
                  </p>

                  <br />
                  <h7
                    ref={refStore}
                    id="store"
                    class="text-muted font-weight-bold"
                  >
                    Indo pro código - Implementando Stacks
                  </h7>

                  <p>
                    Vamos criar duas stacks de acordo com a tela acima, vamos
                    começar pela stack NotAuth que terá nossas screens que não
                    necessitam de autenticação. Teremos algo assim:
                  </p>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleNavigation.notAuth}
                  />

                  <br />

                  <p>Criaremos a stack que necessita de autenticação também:</p>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleNavigation.auth}
                  />
                  <br />
                  <br />
                </div>

                <br />
                <h7
                  ref={refViewingReduxStateValues}
                  class="text-muted font-weight-bold"
                >
                  Gerenciando as stacks
                </h7>

                <p>Em desenvolvimento</p>
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
                  <a className="text-muted">React Redux:</a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Store"
                        onClick={() => changeAnchorLink("refStore")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Reducers"
                        onClick={() => changeAnchorLink("refReducer")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Actions"
                        onClick={() => changeAnchorLink("refAction")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Encapsulamento"
                        onClick={() => changeAnchorLink("refReduxWrapper")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Mudando os valores dos states do redux"
                        onClick={() => changeAnchorLink("refChangingValues")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Visualizando os valores do redux"
                        onClick={() =>
                          changeAnchorLink("refViewingReduxStateValues")
                        }
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

export default Navegacao;
