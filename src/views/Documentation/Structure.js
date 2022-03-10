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

class Structure extends Component {
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

                  <h5>Em relação a estruturação</h5>
                </CardHeader>

                <CardBody>
                  <p>
                    <h6>- A respeito da criação de novos projetos mobile</h6>
                    <h7 class="font-weight-bold">
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
                    <h7 class="font-weight-bold">
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
                        href="https://github.com/Kalebesamuel/react-native-template"
                        target="_blank"
                      >
                        divisão de ambientes
                      </a>{" "}
                      em DEV/QAS/PRD, configurações do{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://github.com/Kalebesamuel/react-native-template"
                        target="_blank"
                      >
                        commitzen,
                      </a>{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://github.com/Kalebesamuel/react-native-template"
                        target="_blank"
                      >
                        ESLint,
                      </a>{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://github.com/Kalebesamuel/react-native-template"
                        target="_blank"
                      >
                        Prettier,
                      </a>{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://github.com/Kalebesamuel/react-native-template"
                        target="_blank"
                      >
                        Husky,
                      </a>{" "}
                      <a
                        class="list-group-item-text"
                        className="text-muted"
                        href="https://github.com/Kalebesamuel/react-native-template"
                        target="_blank"
                      >
                        Bitbucket Pipeline,
                      </a>{" "}
                      dentre outras configurações que serão abordadas por aqui.
                      Opte sempre preferencialmente por iniciar projetos atráves
                      deste template, para que não seja necessário realizar as
                      configurações manualmente.
                    </p>
                    <hr />
                    <h6>
                      - A respeito da configuração de novos projetos mobile
                    </h6>
                    <p>
                      Se o projeto foi criado atráves do template essas
                      configurações já foram realizadas e essa parte pode ser
                      pulada, porém é interessante rever essa sessão para
                      entender o porque de cada ferramenta e como elas funcionam
                      para que seja possível solucinar determinadas situações,
                      realizar manutenções e entender como e porque o projeto se
                      commporta como ele se comporta e absorver o máximo dessas
                      configurações para facilitar o desenvolvimento.
                    </p>
                    <h7 class="font-weight-bold">
                      O porque e para que ter a uma divisão de ambientes
                    </h7>
                    <p>
                      A divisão de ambientes em DEV/QAS/PRD não acontece somente
                      em relação ao servidor mas também em relação aos apps a
                      nível de código nativo e código voltado ao react-native
                      puramente.
                    </p>
                    <h7 class="text-muted">
                      1. A divisão de ambientes define váriaveis de ambientes
                      para cada ambiente criando a possibilidade de usar
                      configurações de forma customizadas para cada ambiente.
                    </h7>
                    <br />
                    <h7 class="text-muted">
                      2. Dificulta a possibilidade de subir .aab's para a Play
                      Store por exemplo apontando para o ambiente errado, DEV ou
                      QAS ao invés de PRD.
                    </h7>
                    <br />
                    <h7 class="text-muted">
                      3. Permite já executar o projeto no ambiente desejado.
                    </h7>
                    <br />
                    <h7 class="text-muted">
                      4. Permite ter uma aab/apk de cada ambiente no mesmo
                      dispostiivo sem a necessidade de desinstalar nenhuma apk
                      de um ambiente para instalar a outra.
                    </h7>
                    <br /> <br />
                    <p class="font-weight-bold">
                      Realizando a configuração de divisão de ambientes
                    </p>
                    <p>
                      Dentro da pasta <h7 class="text-muted">android/src/</h7>{" "}
                      será encontrado duas pastas{" "}
                      <h7 class="text-muted">main</h7> e{" "}
                      <h7 class="text-muted">debug.</h7> Criaremos mais três
                      pastas sendo elas,{" "}
                      <h7 class="text-muted">dev, qas e prd.</h7> A estutura de
                      pasta deve ficar assim:
                    </p>
                    <div className="image">
                      <img
                        alt="..."
                        src={require("assets/img/EnvironmentSpliting.png")}
                      />
                    </div>
                    <br />
                    <p>
                      O conteúdo destas pasta pode ser o mesmo da pasta{" "}
                      <h7 class="text-muted">debug</h7>, com a pasta res
                      encontrado dentro da pasta{" "}
                      <h7 class="text-muted">main</h7> porém com alguns detalhes
                      a parte, dentro do AndroidManifest a tag manifest deve
                      conter a propriedade package que deve ser igual ao
                      bundleId do projeto que pode ser encontrado dentro da
                      pasta <h7 class="text-muted">main</h7> na tag manifest na
                      propriedade <h7 class="text-muted">package</h7>. O código
                      deve ficar semelhante a isto:
                    </p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesStructure.androidManifestExample}
                      />
                    </pre>
                  </p>
                </CardBody>
              </Card>
            </Col>

            <Col
              md="3"
              style={{ position: "fixed", top: "50px", right: "0px" }}
            >
              <Card className="card-user">
                <CardHeader>
                  <CardTitle>Guia Rápido</CardTitle>
                </CardHeader>

                <CardBody>
                  <p>
                    <a className="text-muted" href="#link1">
                      - Sistemas Utilizados
                    </a>
                  </p>
                  <p>
                    <a className="text-muted" href="#link2">
                      - InstantClient
                    </a>
                  </p>
                  <p>
                    <a className="text-muted" href="#link3">
                      - Configuração das variáveis de ambiente
                    </a>
                  </p>
                  <p>
                    <a className="text-muted" href="#link4">
                      - Preparação do Ambiente de Trabalho
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

export default Structure;
