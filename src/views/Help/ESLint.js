import React, { Component } from "react";

// reactstrap components
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExamplesESLint } from "../../variables/codeExamplesESLint.js";

class ESLint extends Component {
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

                  <h5>Configurando o ESLint</h5>
                </CardHeader>

                <CardBody>
                  <p>
                    <h6>
                      <a id="ESLint">
                        A respeito do auxílio do Code Review utilizando o ESLint
                      </a>
                    </h6>
                    <h7 id="whyESLint" class="font-weight-bold">
                      O que é e porque usar o ESLint
                    </h7>
                    <p>
                      O ESLint nos auxilia com o Code Review, ele pode ser
                      configurado com regras prontas, existem vários pacotes
                      prontos de outras empresas que podem ser utilizados para
                      agilizar a definição de nossas regras, podemos editar
                      algumas regras desses pacotes por meio de parametros,
                      alterando seu comportamento ou a desabilitando. O ESLint
                      nos permite criar nossas próprias regras também. o ESLint
                      pode nos ajudar com:
                    </p>
                    <ul>
                      <li>
                        <h7>
                          Manter um padrão de código entre todo o time e todos
                          os projetos, já que conseguimos definir regras sobre o
                          nosso código.
                        </h7>
                      </li>
                      <li>
                        <h7>
                          Nos ajudar a encontrar erros como uso de uma variável
                          que não foi declarada, ou uma tag que não foi fechada
                          de forma correta.
                        </h7>
                      </li>
                      <li>
                        <h7>
                          Quando integrado com o{" "}
                          <a target="_blank" href="/admin/help/Husky">
                            <h7 class="text-muted">Husky</h7>
                          </a>{" "}
                          podemos impedir que commits subam para a branch remota
                          com erros sem serem resolvidos.
                        </h7>
                      </li>
                    </ul>
                    <h7>
                      Conseguimos saber mais sobre o ESLint e como utilizá-lo
                      através do link abaixo:
                    </h7>
                    <br />
                    <a href="https://eslint.org/" target="_blank">
                      {" "}
                      <h7 class="text-muted">
                        - Conhecendo mais sobre o ESLint
                      </h7>
                    </a>
                    <br />
                    <br />
                    <br />
                    <p>
                      <h7 id="ESLintIntegration" class="font-weight-bold">
                        Integrando o ESLint com o projeto
                      </h7>

                      <p>
                        Adicione as seguintes pacotes dentro de devDependecies
                        no package.json do projeto:
                      </p>

                      <pre>
                        <SyntaxHighlighter
                          language="js"
                          style={a11yDark}
                          PreTag="div"
                          children={CodeExamplesESLint.dependencies}
                        />
                      </pre>

                      <p id="nibble">
                        Ainda dentro de package.json adicione dentro de scripts
                        seguinte comando:
                      </p>

                      <pre>
                        <SyntaxHighlighter
                          language="js"
                          style={a11yDark}
                          PreTag="div"
                          children={CodeExamplesESLint.nibbleScript}
                        />
                      </pre>

                      <p>
                        Agora precisamos definir as pastas/arquivos que o ESLint
                        deve ignorar em suas verificações, para isso crie na
                        raiz do projeto um arquivo chamado{" "}
                        <h7 class="text-muted">.eslintignore</h7>, que será
                        responsável por armazenar essa configuração. Por
                        enquanto vamos adicionar dentro desse arquivo somente o
                        node_modules, porque não queremos o ESLint verifique
                        nada na biblioteca de terceiros:
                      </p>

                      <pre>
                        <SyntaxHighlighter
                          language="js"
                          style={a11yDark}
                          PreTag="div"
                          children={CodeExamplesESLint.eslintignore}
                        />
                      </pre>

                      <p>
                        Agora vamos criar nosso arquivo principal de
                        configuração na raiz do projeto chamado{" "}
                        <h7 class="text-muted">.eslintrc.json</h7> que nos
                        permite definir os puglins, pacotes de regras, editar
                        essas regras, dentre outras configurações. Esse arquivo
                        deve ter a seguinte configuração:
                      </p>

                      <pre>
                        <SyntaxHighlighter
                          language="js"
                          style={a11yDark}
                          PreTag="div"
                          children={CodeExamplesESLint.eslintRc}
                        />
                      </pre>

                      <p>
                        Podemos verificar o cada regra realiza pesquisando o
                        nome delas ou o nome dos pacotes que as nossas
                        configurações estão extendendo.
                      </p>
                    </p>
                    <br />
                    <h7 id="ESLintVSCodeIntegration" class="font-weight-bold">
                      Integrando o ESLint ao VSCode
                    </h7>
                    <p>
                      Precisamos fazer com que o ESLint consiga ter influência
                      sobre o VSCode, para exibir erros e nos ajudar a
                      resolvê-lo, para isso precisamos instalar a extensão
                      ESLint no VSCode, a extensão pode ser instalada pelo link
                      abaixo.
                    </p>
                    <a
                      target="_blank"
                      href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
                    >
                      <h7 class="text-muted">- Instalar ESLint no VSCode</h7>
                    </a>
                    <br /> <br />
                    <p>
                      Após instalarmos a extensão do ESLint e ela estar
                      habilitada, precisamos ir para o arquivo de configurações
                      do VSCode, que pode ser acessado apertando{" "}
                      <h7 class="text-muted">Command + P</h7> no Mac, ou{" "}
                      <h7 class="text-muted">Ctrl + P</h7> no windows, será
                      aberto um modal, digite
                      <h7 class="text-muted"> {"> "}Open Settings</h7> e clique
                      na opção{" "}
                      <h7 class="text-muted">
                        Preferences: Open Settings {"("}JSON{")"}
                      </h7>
                      :
                    </p>
                    <div>
                      <img
                        height="30%"
                        alt="..."
                        src={require("assets/img/OpenSettingsVsCode.png")}
                      />
                    </div>
                    <br />
                    <br />
                    <p>
                      No arquivo <h7 class="text-muted">settings.json</h7> que
                      será aberto, coloque a seguinte configuração:
                    </p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesESLint.settingsJsonESLint}
                      />
                    </pre>
                    <p>
                      Feito isso reinicie o VSCode e já conseguiremos aproveitar
                      o ESLint com nossas configurações.
                    </p>
                    <br />
                    <h7 id="ESLintUse" class="font-weight-bold">
                      Utilizando o ESLint
                    </h7>
                    <p>
                      Para vermos o ESLint em ação podemos habilitar a
                      visualização do terminal de Problems no VSCode, clicando
                      em <h7 class="text-muted">View {">>"} Problems:</h7>
                    </p>
                    <div>
                      <img
                        height="30%"
                        alt="..."
                        src={require("assets/img/ViewsProblem.png")}
                      />
                    </div>
                    <br />
                    <br />
                    <p>
                      Vamos fazer alguma mudança no código para forçar que o
                      ESLint acuse algum erro para que seja mostrado em
                      <h7 class="text-muted"> Problems</h7>.
                    </p>
                    <div>
                      <img
                        height="30%"
                        alt="..."
                        src={require("assets/img/viewingProblem.png")}
                      />
                    </div>
                    <br />
                    <p>
                      O ESLint sublinha de vermelho os lugares onde são
                      identificados erros e de amarelo os lugares onde são
                      identificados avisos, que são apenas pontos de atenção.
                      Acima vemos um código onde duas linhas foram comentadas de
                      forma proposital a disparar um erro devido uma regra
                      chamada <h7 class="text-muted">no-undef</h7> que define
                      que uma variável só pode ser usada se existir uma
                      declaração anterior dela, nesse caso a declaração de{" "}
                      <h7 class="text-muted">lastRowElements</h7> não pode ser
                      encontrada e caímos na regra, no terminal de Problems
                      podemos observar que o ESLint é capaz de nos mostrar qual
                      o erro, qual a regra e nos direcionar para este erro de
                      forma rápida.
                    </p>
                    <br />
                    <h7 id="ErrorResolve" class="font-weight-bold">
                      Resolvendo erros
                    </h7>
                    <p>
                      Ao clicar encima do erro e acessar as opções, temos
                      algumas possibilidades que vão depender de qual erro
                      estamos falando, alguns erros possuem uma espécie de
                      auto-fix, esse tipo de erro pode ser corrigido
                      automaticamente pelo ESLint, os erros sem o auto-fix
                      geralmente vão ter simplesmente a opção de desabiitar a
                      regra para a linha, desabilitar a regra para o arquivo, ou
                      de ver a documentação da regra que nos redireciona para
                      uma página na web onde temos acesso ao que significa essa
                      regra e as opções que ela nos permite configurar no
                      .eslintrc.json.
                    </p>
                    <div>
                      <img
                        height="30%"
                        alt="..."
                        src={require("assets/img/ErrorSolution.png")}
                      />
                    </div>
                    <br />
                    <p>
                      Entendendo a regra conseguimos chegar a solução do erro,
                      descomentando a declaração das variáveis o ESLint atualiza
                      o terminal de Problems não mostrando mais nenhum erro:
                    </p>
                    <div>
                      <img
                        height="30%"
                        alt="..."
                        src={require("assets/img/ErrorSolved.png")}
                      />
                    </div>
                    <br />
                    <p>
                      Podemos também resolvermos problemas que tenham auto-fix
                      vinculado a regra a partir de uma biblioteca chamada{" "}
                      <h7 class="text-muted">nibble</h7> que nos ajuda a
                      gerenciar os erros identificados pelo ESLint, essa
                      ferramenta é extremamente efetiva em projetos com muito
                      códgo onde estamos usando o ESLint pela primeira vez,
                      esses projetos podem apresentar uma quantidade de erros
                      muito alta que dificulta a resolução dos erros de forma
                      manual. Se já foi adicionado o{" "}
                      <a href="#nibble">
                        <h7 class="text-muted">script do nibble</h7>
                      </a>{" "}
                      na sessão 'Integrando o ESLint com o projeto', então só
                      precisamos executar o comando abaixo no terminal do
                      projeto:
                    </p>
                    <pre>
                      <SyntaxHighlighter
                        language="js"
                        style={a11yDark}
                        PreTag="div"
                        children={CodeExamplesESLint.runningNibble}
                      />
                    </pre>
                    <p>Será exibido algo semelhante a isto:</p>
                    <div>
                      <img
                        height="30%"
                        alt="..."
                        src={require("assets/img/NibbleInAction1.png")}
                      />
                    </div>
                    <br />
                    <p>
                      Ao selecionarmos o erro e apertarmos Enter, veremos uma
                      mensagem semelhante a esta:
                    </p>
                    <div>
                      <img
                        height="30%"
                        alt="..."
                        src={require("assets/img/NibbleInAction2.png")}
                      />
                    </div>
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
                      - A respeito do auxílio do Code Review utilizando o ESLint
                    </a>
                    <ul>
                      <li>
                        <a
                          className="text-muted"
                          href="#createProjectsWithoutTemplate"
                        >
                          O que é e porque usar o ESLint
                        </a>
                      </li>
                      <li>
                        <a className="text-muted" href="#ESLintIntegration">
                          Integrando o ESLint com o projeto
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-muted"
                          href="#ESLintVSCodeIntegration"
                        >
                          Integrando o ESLint ao VSCode
                        </a>
                      </li>

                      <li>
                        <a className="text-muted" href="#ESLintUse">
                          Utilizando o ESLint
                        </a>
                      </li>

                      <li>
                        <a className="text-muted" href="#ErrorResolve">
                          Resolvendo erros
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

export default ESLint;
