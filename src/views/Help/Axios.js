import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

import { CodeExampleAxios } from "../../variables/codeExampleAxios";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

//= ==============================================================================================
const Axios = () => {
  const refAdd = useRef(null);
  const refCreate = useRef(null);
  const refMiddleware = useRef(null);
  const refExample = useRef(null);

  useScrollToAnchorByParams({
    refAdd,
    refCreate,
    refMiddleware,
    refExample,
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
                <h5 className="title">Axios</h5>

                <p className="text-muted">
                  Muitos projetos na internet precisam interagir com uma API
                  REST em algum ponto em seu desenvolvimento. O Axios é um
                  cliente HTTP leve baseado no serviço <label>$http</label>{" "}
                  dentro do Angular.js v1.x e é semelhante à API Fetch nativa do
                  JavaScript. O Axios é baseado em promessas, o que oferece a
                  capacidade de aproveitar o <label>async</label> e{" "}
                  <label>await</label> do JavaScript para um código assíncrono
                  mais legível. Também é possível interceptar e cancelar
                  solicitações, e existe uma proteção integrada do lado do
                  cliente contra a falsificação de solicitações entre sites.
                </p>
              </CardHeader>

              <CardBody>
                <div id="react-redux">
                  <h7 ref={refAdd} id="add" class="text-muted font-weight-bold">
                    Adicionando o Axios ao projeto
                  </h7>

                  <p>
                    Para adicionar o Axios ao projeto, abra seu terminal e mude
                    o diretório nele para o seu projeto, em seguida, execute
                    este comando para instalar o Axios:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleAxios.installAxiosNpm}
                  />
                  <p>Ou:</p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleAxios.installAxiosYarn}
                  />
                  <br />

                  <h7
                    ref={refCreate}
                    id="create"
                    class="text-muted font-weight-bold"
                  >
                    Criação de um Axios
                  </h7>

                  <p>Primeiro vamos criar uma instância do Axios:</p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleAxios.cratingAxios
                      .replaceAll("]", "`")
                      .replaceAll("|", "$")}
                  />
                  <br />

                  <h7
                    ref={refMiddleware}
                    id="middleware"
                    class="text-muted font-weight-bold"
                  >
                    Middleware
                  </h7>

                  <p>
                    Para criarmos um Middleware nós precisamos fazer uma função
                    de Request:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleAxios.middlewareRequest}
                  />
                  <p>E depois uma função de Response:</p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleAxios.middlewareResponse}
                  />
                  <br />

                  <h7
                    ref={refExample}
                    id="example"
                    class="text-muted font-weight-bold"
                  >
                    Exemplo de Requisição
                  </h7>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleAxios.example}
                  />
                  <br />
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
                  <a className="text-muted">Axios:</a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Adicionar Axios"
                        onClick={() => changeAnchorLink("refAdd")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Criação de um Axios"
                        onClick={() => changeAnchorLink("refCreate")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Middleware"
                        onClick={() => changeAnchorLink("refMiddleware")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Exemplo de Requisição"
                        onClick={() => changeAnchorLink("refExample")}
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

const styles = {};

export default Axios;
