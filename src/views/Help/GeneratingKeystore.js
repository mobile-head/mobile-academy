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

import { CodeExampleKeystore } from "../../variables/codeExampleKeystore";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function GeneratingKeystore() {
  const refGeneratingKeystore = useRef(null);
  const refSettingUpKeystores = useRef(null);

  useScrollToAnchorByParams({
    refGeneratingKeystore,
    refSettingUpKeystores,
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
                <h5 className="title">Gerando keystore</h5>
                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="newProjects">A respeito da geração de keystores</a>
                  </h6>
                  <h7 ref={refGeneratingKeystore} class="font-weight-bold">
                    Gerando keystores
                  </h7>
                  <p>
                    As keystores são arquivos utilizados para definir uma
                    assinatura para cada aplicação, para que a aplicação suba
                    para a playstore com sucesso é necessária que ela esteja
                    assinada, caso contrário não será possível.
                  </p>

                  <p>
                    Vamos realizar a criação da{" "}
                    <h7 class="text-muted">keystore</h7> utilizando os comandos
                    abaixo:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExampleKeystore.generatingKeystore}
                    />
                  </pre>

                  <p>
                    Após executar este comando precisaremos responder algumas
                    perguntadas que ficarão registradas na chave e também
                    definirão determinadas propriedades, abaixo segue as
                    perguntas e os exemplos das respostas utilizados em nossos
                    projetos:
                  </p>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Question</th>
                        <th>Answer</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Enter keystore password</td>
                        <td>Ex: bravolog</td>
                      </tr>
                      <tr>
                        <td>What is your first and last name?</td>
                        <td>Kalebe Moraes</td>
                      </tr>
                      <tr>
                        <td>What is the name of your organizational unit?</td>
                        <td>Evolog</td>
                      </tr>
                      <tr>
                        <td>What is the name of your organization?</td>
                        <td>Bravo</td>
                      </tr>
                      <tr>
                        <td>What is the name of your City or Locality?</td>
                        <td>Uberaba</td>
                      </tr>
                      <tr>
                        <td>What is the name of your State or Province?</td>
                        <td>Minas Gerais</td>
                      </tr>
                      <tr>
                        <td>What is the name of your State or Province?</td>
                        <td>Minas Gerais</td>
                      </tr>
                      <tr>
                        <td>
                          What is the two-letter country code for this unit?
                        </td>
                        <td>BR</td>
                      </tr>
                      <tr>
                        <td>
                          Is CN=Kalebe Moraes, OU=Evolog, O=Bravo, L=Uberaba,
                          ST=Minas Gerais, C=BR correct? [no]
                        </td>
                        <td>yes</td>
                      </tr>
                    </tbody>
                  </Table>

                  <p>
                    Em seguida vamos adicionar a{" "}
                    <h7 class="text-muted">keystore</h7> dentro da pasta{" "}
                    <h7 class="text-muted">android/app</h7>.
                  </p>

                  <h7 ref={refSettingUpKeystores} class="font-weight-bold">
                    Configurando as keystores
                  </h7>

                  <p>
                    Agora podemos configurar a keystore dentro do projeto dentro
                    do arquivo <h7 class="text-muted">gradle.properties</h7>,
                    vamos adicionar o seguinte conteúdo que deve ser substituído
                    de acordo com as configurações informadas no momento da
                    criação da keystore:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExampleKeystore.gradlePropertiesKeystore}
                    />
                  </pre>

                  <p>
                    Assim a keystore já estará configurada para ser utilizada no
                    lançamento das nossas versões na PlayStore.
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
                    A respeito da geração de keystores:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Gerando keystores"
                        onClick={() =>
                          changeAnchorLink("refGeneratingKeystore")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Configurando as keystores"
                        onClick={() =>
                          changeAnchorLink("refSettingUpKeystores")
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
}

export default GeneratingKeystore;
