import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ButtonLink from "../../components/Buttons/ButtonLink";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExamples } from "../../variables/codeExamples";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function Code() {
  const refConsts = useRef(null);
  const refEdent = useRef(null);
  const refMargin = useRef(null);
  const refOrder = useRef(null);
  const refAvoidConsoles = useRef(null);
  const refAvoidHardcode = useRef(null);
  const refCodeReuse = useRef(null);

  useScrollToAnchorByParams({
    refConsts,
    refEdent,
    refMargin,
    refOrder,
    refAvoidConsoles,
    refAvoidHardcode,
    refCodeReuse,
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
                <h5 className="title">Code Rules</h5>
                <p className="text-muted">
                  Padrões e boas práticas que devem ser seguidos nos projetos
                  mobile
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a ref={refConsts} id="tip1">
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
                  <hr />
                  <h6>
                    <a ref={refEdent} id="tip2">
                      - Mantenha o código bem edentado
                    </a>
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
                    <hr />
                    <a ref={refMargin} id="tip3">
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
                  <hr />
                  <h6>
                    <a ref={refOrder} id="tip4">
                      - Ordene os métodos por importância
                    </a>
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
                  <hr />
                  <h6>
                    <a ref={refAvoidConsoles} id="tip5">
                      - Evite o uso excessivo de console.logs no projeto
                    </a>
                  </h6>

                  <p>
                    Todos nós utilizamos console.logs para debugar o código e
                    encontrar erros, porém procure criar o hábito de apagar
                    todos os console.logs que não são mais usados, isso ajuda
                    com que outros desenvolvedores ou você mesmo, consiga
                    enxergar os logs realmente necessários de um modo muito mais
                    fácil.
                  </p>
                </p>

                <p class="mt-5">
                  <hr />
                  <h6>
                    <a ref={refAvoidHardcode} id="tip6">
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
                  <hr />
                  <h6>
                    <a ref={refCodeReuse} id="tip6">
                      - Preze sempre a reutilização de código
                    </a>
                  </h6>

                  <p>
                    Sempre que um estilo for utilizado em mais de um arquivo do
                    projeto, crie um <b>StyledComponents</b> para ele.
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
                    necessidade de serem reutilizados, crie um <b>Component</b>.
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
                  <a className="text-muted">Code Rules:</a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O uso de constantes deve ser aproveitado"
                        onClick={() => changeAnchorLink("refConsts")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Mantenha o código bem edentado"
                        onClick={() => changeAnchorLink("refEdent")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Separe os métodos com espaços e margens horizontais"
                        onClick={() => changeAnchorLink("refMargin")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Ordene os métodos por importância"
                        onClick={() => changeAnchorLink("refOrder")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Evite o uso excessivo de console.logs no projeto"
                        onClick={() => changeAnchorLink("refAvoidConsoles")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Evite a utilização de hardcode ao definir estilos"
                        onClick={() => changeAnchorLink("refAvoidHardcode")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Preze sempre a reutilização de código"
                        onClick={() => changeAnchorLink("refCodeReuse")}
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

export default Code;
