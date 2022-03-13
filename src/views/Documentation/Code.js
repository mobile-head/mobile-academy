/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";

// reactstrap components
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExamples } from "../../variables/codeExamples";

class Code extends Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="9">
              <Card>
                <CardHeader>
                  <CardTitle>Documentação dos aplicativos</CardTitle>
                  <p className="text-muted">
                    Padrões e boas práticas que devem ser seguidos nos projetos
                    mobile
                  </p>

                  <h5>Em relação ao código</h5>
                </CardHeader>

                <CardBody>
                  <p>
                    <h6>
                      <a id="tip1">
                        - O uso de constantes deve ser aproveitado
                      </a>
                    </h6>

                    <p class="font-weight-bold">Bad Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.badP1}
                      />
                    </pre>

                    <p class="font-weight-bold">Best Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.bestP1}
                      />
                    </pre>
                  </p>

                  <p class="mt-5">
                    <h6>
                      <a id="tip2">- Mantenha o código bem edentado</a>
                    </h6>

                    <p class="font-weight-bold">Bad Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.badP2}
                      />
                    </pre>

                    <p class="font-weight-bold">Best Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.bestP2}
                      />
                    </pre>
                  </p>

                  <p class="mt-5">
                    <h6>
                      <a id="tip3">
                        - Separe os métodos com espaços e margens horizontais
                      </a>
                    </h6>

                    <p class="font-weight-bold">Bad Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.badP3}
                      />
                    </pre>

                    <p class="font-weight-bold">Best Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.bestP3}
                      />
                    </pre>
                  </p>

                  <p class="mt-5">
                    <h6>
                      <a id="tip4">- Ordene os métodos por importância</a>
                    </h6>

                    <p>
                      Chamada de hooks (UseEffect, useCallback, etc) devem vir
                      primeiro, por terem extrema influência no fluxo da
                      aplicação.
                    </p>

                    <p class="font-weight-bold">Bad Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.badP4}
                      />
                    </pre>

                    <p class="font-weight-bold">Best Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.bestP4}
                      />
                    </pre>
                  </p>

                  <p class="mt-5">
                    <h6>
                      <a id="tip5">
                        - Evite o uso excessivo de console.logs no projeto
                      </a>
                    </h6>

                    <p>
                      Todos nós utilizamos console.logs para debugar o código e
                      encontrar erros, porém procure criar o hábito de apagar
                      todos os console.logs que não são mais usados, isso ajuda
                      com que outros desenvolvedores ou você mesmo, consiga
                      enxergar os logs realmente necessários de um modo muito
                      mais fácil.
                    </p>
                  </p>

                  <p class="mt-5">
                    <h6>
                      <a id="tip6">
                        - Evite a utilização de hardcode ao definir estilos
                      </a>
                    </h6>

                    <p class="font-weight-bold">Bad Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.badP5}
                      />
                    </pre>

                    <p class="font-weight-bold">Best Practice</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.bestP5}
                      />
                    </pre>
                  </p>

                  <p class="mt-5">
                    <h6>
                      <a id="tip6">- Preze sempre a reutilização de código</a>
                    </h6>

                    <p>
                      Sempre que um estilo for utilizado em mais de um arquivo
                      do projeto, crie um <b>StyledComponents</b> para ele.
                    </p>

                    <p>
                      <b>OBS.:</b> Os píxels utilizados dentro de um componente{" "}
                      <b>styled</b> são automaticamente convertidos para
                      píxels-independentes-de-densidade, "dp". Por isso, aqui a
                      utilização da unidade "px" é válida.
                    </p>

                    <p class="font-weight-bold">Exemplo de StyledComponents</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.bestP6}
                      />
                    </pre>

                    <p>
                      Sempre que um grupo de components e estilos tiverem a
                      necessidade de serem reutilizados, crie um{" "}
                      <b>Component</b>.
                    </p>

                    <p class="font-weight-bold">Exemplo de Components</p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamples.bestP7}
                      />
                    </pre>
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
                    <a className="text-muted" href="#tip1">
                      - O uso de constantes deve ser aproveitado
                    </a>
                  </p>

                  <p>
                    <a className="text-muted" href="#tip2">
                      - Mantenha o código bem edentado
                    </a>
                  </p>

                  <p>
                    <a className="text-muted" href="#tip3">
                      - Separe os métodos com espaços e margens horizontais
                    </a>
                  </p>

                  <p>
                    <a className="text-muted" href="#tip4">
                      - Ordene os métodos por importância
                    </a>
                  </p>

                  <p>
                    <a className="text-muted" href="#tip5">
                      - Evite o uso excessivo de console.logs no projeto
                    </a>
                  </p>

                  <p>
                    <a className="text-muted" href="#tip6">
                      - Evite a utilização de hardcode ao definir estilos
                    </a>
                  </p>

                  <p>
                    <a className="text-muted" href="#tip7">
                      - Preze sempre a reutilização de código
                    </a>
                  </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Code;
