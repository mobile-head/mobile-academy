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

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesGeneratingApkAab } from "../../variables/codeExamplesGeneratingApkAab";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function GeneratingApkAab() {
  const refGeneratingApks = useRef(null);
  const refGeneratingAabs = useRef(null);

  useScrollToAnchorByParams({
    refGeneratingApks,
    refGeneratingAabs,
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
                <h5 className="title">Gerando apk's e aab's</h5>
                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="newProjects">
                      A respeito da geração de apk's e aab's
                    </a>
                  </h6>
                  <h7 ref={refGeneratingApks} class="font-weight-bold">
                    Gerando apk's
                  </h7>
                  <p>
                    As apk's (Android Package Application's) são arquivos
                    executáveis onde conseguimos compilar nosso projeto para
                    android e enviá-lo para outros usuários instalarem em seus
                    dispositivos Android e testarem a aplicação.
                  </p>

                  <p>
                    Dado que em nossos projetos nós trabalhamos com divisão de
                    ambientes, nós podemos gerar uma apk para cada ambiente,
                    tendo a possibilidade de herdar as configurações daquele
                    ambiente, na tabela abaixo observamos como lidar com esses
                    pontos:
                  </p>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Environment</th>
                        <th>Command</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>DEV</td>
                        <td>
                          <pre>
                            <SyntaxHighlighter
                              language="js"
                              style={a11yDark}
                              PreTag="div"
                              children={
                                CodeExamplesGeneratingApkAab.generatingApkDev
                              }
                            />
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>QAS</td>
                        <td>
                          <pre>
                            <SyntaxHighlighter
                              language="js"
                              style={a11yDark}
                              PreTag="div"
                              children={
                                CodeExamplesGeneratingApkAab.generatingApkQas
                              }
                            />
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>PRD</td>
                        <td>
                          <pre>
                            <SyntaxHighlighter
                              language="js"
                              style={a11yDark}
                              PreTag="div"
                              children={
                                CodeExamplesGeneratingApkAab.generatingApkPrd
                              }
                            />
                          </pre>
                        </td>
                      </tr>
                      <tr>
                        <td>Release</td>
                        <td>
                          <pre>
                            <SyntaxHighlighter
                              language="js"
                              style={a11yDark}
                              PreTag="div"
                              children={
                                CodeExamplesGeneratingApkAab.generatingApkRelease
                              }
                            />
                          </pre>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                  <br />

                  <h7 ref={refGeneratingAabs} class="font-weight-bold">
                    Gerando aab's
                  </h7>
                  <p>
                    As aab's (Android App Bundle) são arquivos que são
                    utilizados para lançamento de versões na PlayStore, arquvios
                    apk's não são mais aceitos atualmente. Geralmente só geramos
                    aab's em modo release mesmo que haja a possibilidade de
                    gerar para ambientes diferentes, assim como as apk's. Para
                    gerar aab's podemos utilizar o seguinte comando abaixo:
                  </p>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Environment</th>
                        <th>Command</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Release</td>
                        <td>
                          <pre>
                            <SyntaxHighlighter
                              language="js"
                              style={a11yDark}
                              PreTag="div"
                              children={
                                CodeExamplesGeneratingApkAab.generatingAab
                              }
                            />
                          </pre>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </p>
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
                  <a className="text-muted" href="#newProjects">
                    A respeito da criação de novos projetos mobile:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Gerando apk's"
                        onClick={() => changeAnchorLink("refGeneratingApks")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Gerando aab's"
                        onClick={() => changeAnchorLink("refGeneratingAabs")}
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
}

export default GeneratingApkAab;
