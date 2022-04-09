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

import { CodeExamplesStructure } from "../../variables/codeExamplesStructure";

class ProjectStructure extends Component {
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
                    Documentação da padrão de projetos dos aplicativos
                  </CardTitle>
                  <p className="text-muted">
                    A estruturação dos projetos é definida por um padrão de
                    projetos que separa view e lófica
                  </p>

                  <h5 id="projectPattern">
                    Em relação ao padrão de projetos (VL)
                  </h5>
                </CardHeader>

                <CardBody>
                  <p>
                    <h6>
                      <a id="projectPatternImportance">
                        - A respeito do padrão de projetos
                      </a>
                    </h6>

                    <h7
                      id="createProjectsWithoutTemplate"
                      class="font-weight-bold"
                    >
                      Importância de padrões de projeto
                    </h7>

                    <p>
                      Padrões de projeto são essenciais principalmente quando
                      estamos trabalhando com um time, isso nos permite
                      conseguir falar a mesma linguagem, entender o código um do
                      outro sem a necessidade de um grande esforço, nos
                      proporciona uma forma organizada de gerenciar nossos
                      componentes, telas, configurações, etc. Isso mostra o
                      valor de desenvolver seguindo um padrão objetivo e
                      coerente, além disso, um padrão de projeto pode melhorar a
                      velocidade e facilidade de resoluções de demandas de forma
                      exponencial. Com isso temos benefícios tais como:
                    </p>

                    <ul>
                      <li>Aumenta a mantenabilidade do código;</li>
                      <li>Mais fácil de testar;</li>
                      <li>Aumento da produção;</li>
                      <li>
                        Elimina duplicação de código promovendo a reutilização.
                      </li>
                    </ul>

                    <br />
                    <br />

                    <h7 id="commomPattern" class="font-weight-bold">
                      Tudo junto e misturado: Um pouco sobre o padrão comum
                    </h7>

                    <p>
                      É comum na arquitetura de projetos popular do react-native ser mantido a view e a logic no mesmo lugar, bem diferente da arquitetura padrão para Android Nativo (Java/Kotlin) por exemplo, que mantém toda a parte visual em xml's e toda a parte lógica de forma separada e ainda de forma segregada.
                    </p>

                    <br />
                    <br />

                    <h7 id="knowingVLPattern" class="font-weight-bold">
                      Conhecendo o padrão de projetos VL (View {"&"} logic)
                    </h7>

                    <p></p>
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
                    <a className="text-muted" href="#projectPattern">
                      - Conteúdo a ser definido
                    </a>
                    <ul>
                      <li>
                        <a
                          className="text-muted"
                          href="#projectPatternImportance"
                        >
                          Importância de padrões de projeto
                        </a>
                      </li>

                      <li>
                        <a className="text-muted" href="#knowingVLPattern">
                          Conhecendo o padrão de projetos VL(View {"&"} logic)
                        </a>
                      </li>

                      <li>
                        <a className="text-muted" href="#commomPattern">
                          Tudo junto e misturado: Um pouco sobre o padrão comum
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

export default ProjectStructure;
