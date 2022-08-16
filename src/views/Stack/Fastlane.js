import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesFastlane } from "../../variables/codeExamplesFastlane";
import { CodeExamplesESLint } from "../../variables/codeExamplesESLint";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function Fastlane() {
  const refWhyFastlane = useRef(null);
  const refIntegratingFastlaneToProject = useRef(null);
  const refIntegratingFastlaneToAndroid = useRef(null);
  const refIntegratingFastlaneToIos = useRef(null);
  const refESLintInAction = useRef(null);
  const refUsingESLint = useRef(null);
  const refResolvingErrors = useRef(null);

  useScrollToAnchorByParams({
    refWhyFastlane,
    refIntegratingFastlaneToProject,
    refIntegratingFastlaneToAndroid,
    refIntegratingFastlaneToIos,
    refESLintInAction,
    refUsingESLint,
    refResolvingErrors,
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
                <h5 className="title">Configurando o Fastlane</h5>
                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a id="ESLint">
                      A respeito das possíveis automatizações utilizando
                      Fastlane
                    </a>
                  </h6>
                  <h7
                    ref={refWhyFastlane}
                    id="whyESLint"
                    class="font-weight-bold"
                  >
                    O que é e porque usar o Fastlane
                  </h7>
                  <p>
                    O Fastlane é uma ferramenta com inúmeras funcionalidades que
                    nos possibilitam a automatização de diversas tarefas
                    vinculadas a processos que acontecem no universo mobile
                    tanto no Android quanto no iOS. Utilizando o Fastlane
                    conseguimos automatizar tarefas tais como:
                  </p>
                  <ul>
                    <li>
                      <h7>
                        Automatização de todo o fluxo de deploy para a App
                        Store, considerando a geração de profile, certificados e
                        outros itens necessários até o momento do upload do ipa
                        para o testflight.
                      </h7>
                    </li>
                    <li>
                      <h7>
                        Automatização de todo o fluxo de deploy para a Play
                        Store, neste caso já é necessário ter subido pelo menos
                        uma versão na Play Store de forma manual antes de
                        utilzar esta funcionalidade.
                      </h7>
                    </li>
                    <li>
                      <h7>
                        Além disso é possível fazer outras diversas tarefas que
                        antes seriam manuais utilizando plugins disponíveis para
                        o fastlane.
                      </h7>
                    </li>
                  </ul>
                  <h7>
                    Conseguimos saber mais sobre o Fastlane e como utilizá-lo
                    através do link abaixo:
                  </h7>
                  <br />
                  <a href="https://docs.fastlane.tools/" target="_blank">
                    {" "}
                    <h7 class="text-muted">
                      - Conhecendo mais sobre o Fastlane
                    </h7>
                  </a>
                  <br />
                  <br />
                  <br />
                  <hr />
                  <p>
                    <h7
                      ref={refIntegratingFastlaneToProject}
                      id="ESLintIntegration"
                      class="font-weight-bold"
                    >
                      Integrando o Fastlane com o projeto
                    </h7>

                    <p>Adicione o fastlane a sua máquina:</p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.installFastlane}
                      />
                    </pre>

                    <p>
                      Adicione um arquivo chamado{" "}
                      <h7 class="text-muted">Gemfile</h7> na raiz do projeto e o
                      abra:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.createGemfile}
                      />
                    </pre>

                    <p>Adicione o seguinte conteúdo dentro deste arquivo:</p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.gemfileContent}
                      />
                    </pre>

                    <p>
                      Adicione as dependências padrão do fastlane, este comando
                      deve ser executado na raiz do projeto, sempre que houver a
                      adição de algum plugin no projeto e o fastlane for
                      utilizado dentro de alguma máquina diferente, já que os
                      pacotes instalados não são versionados:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.bundleInstall}
                      />
                    </pre>

                    <br />
                    <hr />

                    <h7
                      ref={refIntegratingFastlaneToAndroid}
                      id="ESLintIntegration"
                      class="font-weight-bold"
                    >
                      Integrando o Fastlane ao Android
                    </h7>

                    <p id="nibble">
                      Navegue para a pasta android/ e inicialize o fastlane com
                      o comando abaixo:
                    </p>

                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesFastlane.fastlaneInit}
                      />
                    </pre>

                    <p id="nibble">
                      Após isso serão solicitadas algumas perguntas para
                      configurar o Fastlane no projeto:
                    </p>

                    <dl>
                      <dt>
                        <h7 class="text-muted">
                          1. Package Name (com.krausefx.app)
                        </h7>{" "}
                      </dt>
                      <dd>
                        Informe o package name do projeto que pode ser
                        encontrado dentro de{" "}
                        <h7 class="text-muted">
                          android/app/src/main/AndroidManifest.xml
                        </h7>{" "}
                        na propriedade <h7 class="text-muted">package</h7>.
                      </dd>

                      <dt>
                        <h7 class="text-muted">
                          2. Path to the json secret file
                        </h7>{" "}
                      </dt>
                      <dd>
                        Informe o caminho onde está localizado o{" "}
                        <h7 class="text-muted">service account json</h7>, este
                        arquivo nos permite acessar a conta de desenvolvedor do
                        Google Play e extrair metadata e também realizarmos
                        alterações como o deploy de uma aplicação por exemplo.
                      </dd>

                      <dt>
                        <h7 class="text-muted">
                          3. Do you plan on uploading metadata, screenshots, and
                          builds to Google Play using fastlane?
                        </h7>{" "}
                      </dt>
                      <dd>Responda "y".</dd>

                      <dt>
                        <h7 class="text-muted">
                          4. Download existing metadata and setup metadata
                          management?
                        </h7>{" "}
                      </dt>
                      <dd>Responda "y".</dd>
                    </dl>
                  </p>
                  <p id="nibble">
                    No fim o Fastlane estará integrado ao projeto e teremos algo
                    semelhante a isso em nosso terminal:
                  </p>
                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/fastlane-android-questions-2.png")}
                    />
                  </div>
                  <br />
                  <hr />
                  <h7
                    ref={refIntegratingFastlaneToIos}
                    id="ESLintIntegration"
                    class="font-weight-bold"
                  >
                    Integrando o Fastlane ao iOS
                  </h7>
                  <p id="nibble">
                    Navegue para a pasta ios/ e inicialize o fastlane com o
                    comando abaixo:
                  </p>
                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={CodeExamplesFastlane.fastlaneInit}
                    />
                  </pre>
                  <p id="nibble">
                    Após isso serão solicitadas algumas perguntas para
                    configurar o Fastlane no projeto:
                  </p>
                  <dl>
                    <dt>
                      <h7 class="text-muted">
                        1. What would you like to use fastlane for? <br />
                        1. 📸 Automate screenshots <br />
                        2. 👩‍✈️ Automate beta distribution to TestFlight <br />
                        3. 🚀 Automate App Store distribution <br />
                        4. 🛠 Manual setup - manually setup your project to
                        automate your tasks
                      </h7>{" "}
                    </dt>
                    <dd>
                      Informe a opção 4. (
                      <h7 class="text-muted">
                        Manual setup - manually setup your project to automate
                        your tasks
                      </h7>
                      )
                    </dd>

                    <dt>
                      <h7 class="text-muted">2. Select Scheme</h7>{" "}
                    </dt>
                    <dd>Escolha sempre o scheme que não seja de tvOS.</dd>

                    <dt>
                      <h7 class="text-muted">
                        3. Please enter your Apple ID developer credentials
                        <br />
                        Apple ID Username:
                      </h7>{" "}
                    </dt>
                    <dd>
                      Informe o apple id que é o email que você utiliza para
                      logar na App Store Connect.
                    </dd>

                    <dt>
                      <h7 class="text-muted">
                        4. Would you like fastlane to manage your app's
                        metadata?
                      </h7>{" "}
                    </dt>
                    <dd>Responda "y".</dd>
                  </dl>
                  <p id="nibble">
                    No fim o Fastlane estará integrado ao projeto e teremos algo
                    semelhante a isso em nosso terminal:
                  </p>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/fastlane-ios-questions-1.png")}
                    />
                  </div>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/fastlane-ios-questions-2.png")}
                    />
                  </div>

                  <div>
                    <img
                      height="30%"
                      alt="..."
                      src={require("assets/img/fastlane-ios-questions-3.png")}
                    />
                  </div>
                  <hr />

                  <br />
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
                  <a className="text-muted" href="#ESLint">
                    - A respeito das possíveis automatizações utilizando
                    Fastlane
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="O que é e porque usar o Fastlane"
                        onClick={() => changeAnchorLink("refWhyFastlane")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o Fastlane com o projeto"
                        onClick={() =>
                          changeAnchorLink("refIntegratingFastlaneToProject")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o Fastlane ao Android"
                        onClick={() =>
                          changeAnchorLink("refIntegratingFastlaneToAndroid")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Integrando o Fastlane ao iOS"
                        onClick={() =>
                          changeAnchorLink("refIntegratingFastlaneToIos")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="ESLint em ação"
                        onClick={() => changeAnchorLink("refESLintInAction")}
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

export default Fastlane;
