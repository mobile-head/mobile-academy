import React, { Component } from "react";

// reactstrap components
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExamplesStructure } from "../../variables/codeExamplesStructure";

class Husky extends Component {
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

                  <h5>Configurando o Husky</h5>
                </CardHeader>

                <CardBody>
                  <p>
                    <h6>
                      <a id="husky">
                        A respeito do gerenciamento de commits com o Husky
                      </a>
                    </h6>
                    <h7 id="whyHusky" class="font-weight-bold">
                      O que é e porque utilizar o Husky
                    </h7>
                    <p>
                      O git possui vários hooks que são disparados quando
                      executamos alguma ação como por exemplo executar um
                      commit. O Husky nos permite criar uma espécie de listener
                      para esses hooks e executar ações sempre que eles forem
                      ativados. Para saber mais sobre os hooks do git cheque o
                      link abaixo:
                    </p>

                    <a
                      target="_blank"
                      href="https://git-scm.com/docs/githooks#_hooks"
                    >
                      <h7 class="text-muted">- Hooks do Git</h7>
                    </a>

                    <br />

                    <p>O Husky nos fornece benéficios como:</p>

                    <ul>
                      <li>
                        Gerenciamento de quais commits podem ou não subir para a
                        branch remota.
                      </li>
                      <li>
                        Alta capacidade de integração com outra ferramentas como
                        o Prettier e o ESLint.
                      </li>
                      <li>
                        Auxilia no Code Review dando a garantia de que quando
                        usado e configurado de forma correta permita que na
                        branch remota só tenha código com nível de qualidade
                        percepéti
                      </li>
                    </ul>
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
                    <a className="text-muted" href="#husky">
                      - A respeito do gerenciamento de commits com o Husky
                    </a>
                    <ul>
                      <li>
                        <a className="text-muted" href="#whyHusky">
                          O que é e porque utilizar o Husky
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

export default Husky;
