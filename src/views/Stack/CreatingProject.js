import React, { Component } from "react";

// reactstrap components
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExamplesStructure } from "../../variables/codeExamplesStructure";

class CreatingProject extends Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="9">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Documentação da estruturação dos projetos
                  </CardTitle>
                  <p className="text-muted">
                    A estruturação dos projetos é definida por uma stack de
                    qualidade que aborda vários aspectos.
                  </p>

                  <h5>Criação de novos projetos</h5>
                </CardHeader>

                <CardBody>
                  <p>
                    <h6>
                      <a id="newProjects">
                        A respeito da criação de novos projetos mobile
                      </a>
                    </h6>
                    <h7
                      id="createProjectsWithoutTemplate"
                      class="font-weight-bold"
                    >
                      Criando projetos sem template
                    </h7>
                    <p>
                      Os projetos são criados utilizando o react-native-cli:
                    </p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesStructure.initProject}
                      />
                    </pre>
                    <h7
                      id="createProjectsWithTemplate"
                      class="font-weight-bold"
                    >
                      Criando projetos com template
                    </h7>
                    <p>
                      Os projetos também podem ser criados utilizando o template
                      padrão utilizado na Bravo:
                    </p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesStructure.initProjectWithTemplate}
                      />
                    </pre>
                    <p>
                      Este{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://github.com/Kalebesamuel/react-native-template"
                        target="_blank"
                      >
                        template
                      </a>{" "}
                      conta com a grande parte das bibliotecas usadas em todos
                      os projetos, junto com styledComponents, components,{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://developer.android.com/studio/build/build-variants"
                        target="_blank"
                      >
                        divisão de ambientes
                      </a>{" "}
                      em DEV/QAS/PRD, configurações do{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://commitizen-tools.github.io/commitizen/"
                        target="_blank"
                      >
                        commitizen,
                      </a>{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://eslint.org/"
                        target="_blank"
                      >
                        ESLint,
                      </a>{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://prettier.io/"
                        target="_blank"
                      >
                        Prettier,
                      </a>{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://typicode.github.io/husky/#/"
                        target="_blank"
                      >
                        Husky,
                      </a>{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://bitbucket.org/product/br/features/pipelines"
                        target="_blank"
                      >
                        Bitbucket Pipeline,
                      </a>{" "}
                      dentre outras configurações que serão abordadas por aqui.
                      Opte sempre preferencialmente por iniciar projetos atráves
                      deste template, para que não seja necessário realizar as
                      configurações manualmente.
                    </p>
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
                      - A respeito da criação de novos projetos mobile
                    </a>
                    <ul>
                      <li>
                        <a
                          className="text-muted"
                          href="#createProjectsWithoutTemplate"
                        >
                          Criando projetos sem template
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#createProjectsWithTemplate"
                        >
                          Criando projetos com template
                        </a>
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
}

export default CreatingProject;
