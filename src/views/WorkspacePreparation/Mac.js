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
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeExamples } from "variables/codeExamples";

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

const Mac = () => {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="9">
            <Card>
              <CardHeader>
                <CardTitle>Workspace Preparation - Mac OS</CardTitle>
                <p className="text-muted">
                  Ações necessárias para configurar o ambiente de trabalho Mac
                </p>

                {/* <h5>Em relação ao código</h5> */}
              </CardHeader>

              <CardBody>
                <div id="aplicacoes">
                  <h3 style={styles.itemTitle}>Aplicações</h3>
                  <p style={styles.itemText}>
                    Instale as aplicações a seguir no seu Mac respeitando as
                    versões e certifique-se de que todas elas aparecem na pasta
                    "/Applications". O processo de instalação de pacotes (que
                    não possuem instalador) pede para que se arraste o ícone da
                    aplicação para dentro da pasta applications.
                  </p>
                  <div class="container-fluid">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          Xcode - Última Versão
                        </h5>
                        <p class="list-group-item-text" className="text-muted">
                          Instalado através da App Store.
                        </p>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          VSCode - Última Versão
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://code.visualstudio.com/"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                      <li class="list-group-item ">
                        <h5 class="list-group-item-heading">
                          Java - Última Versão
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://www.java.com/en/download/"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          NodeJS - 10.17.0
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://nodejs.org/download/release/v10.17.0/node-v10.17.0.pkg"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          Android Studio - Última Versão
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://developer.android.com/studio?hl=pt-BR"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">Python - 2.7.15</h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://www.python.org/ftp/python/2.7.15/python-2.7.15-macosx10.9.pkg"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          DBeaver Community Edition - Última Versão
                        </h5>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://dbeaver.io/files/dbeaver-ce-latest-x86_64-setup.exe"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="utilitarios">
                  <h3 style={styles.itemTitle}>Utilitários</h3>
                  <p style={styles.itemText}></p>
                  <div class="container-fluid">
                    <ul class="list-group">
                      <li class="list-group-item ">
                        <h5 class="list-group-item-heading">
                          Git - Última Versão
                        </h5>
                        <p class="list-group-item-text" className="text-muted">
                          Em máquinas Mac, o Git já costuma vir instalado e pode
                          ser ativado através do comando:
                          <pre> git version</pre>
                          Se por algum motivo não estiver instalado, instale
                          através do link:
                        </p>
                        <a
                          class="list-group-item-text"
                          className="text-muted"
                          href="https://sourceforge.net/projects/git-osx-installer/files/git-2.23.0-intel-universal-mavericks.dmg/download?use_mirror=autoselect"
                          target="_blank"
                        >
                          - Download
                        </a>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">Yarn - 1.22.5</h5>
                        <p class="list-group-item-text" className="text-muted">
                          Com o NodeJS instalado, execute o comando:
                          <pre> sudo npm install --global yarn@1.22.5 </pre>E
                          depois verifique a instalação com:
                          <pre> yarn --version </pre>
                        </p>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">Homebrew</h5>
                        <p class="list-group-item-text" className="text-muted">
                          Em um terminal, rode o comando:
                          <pre>
                            /bin/bash -c "$(curl -fsSL
                            https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
                          </pre>
                        </p>
                      </li>
                      <li class="list-group-item">
                        <h5 class="list-group-item-heading">
                          Emulador Android - API 28/30
                        </h5>
                        <h6>Pode ser instalado a partir do Android Studio</h6>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="variaveis-ambiente">
                  <h3 style={styles.itemTitle}>Variáveis de ambiente</h3>
                  <p style={styles.itemText}>
                    Crie um arquivo chamado ".zshrc" no diretório do seu usuário
                    utilizando o utilitário "nano" do terminal:
                  </p>
                  <SyntaxHighlighter
                    language="bash"
                    style={a11yDark}
                    PreTag="div"
                    children={
                      CodeExamples.WorkspacePreparation.Mac
                        .EnvironmentVariables[0]
                    }
                  />
                  <p style={styles.itemText}>
                    Preencha o arquivo "~/.zshrc" com o seguinte conteúdo e
                    depois o salve apertando control+O e ENTER:
                  </p>
                  <SyntaxHighlighter
                    language="bash"
                    style={a11yDark}
                    PreTag="div"
                    children={
                      CodeExamples.WorkspacePreparation.Mac
                        .EnvironmentVariables[1]
                    }
                  />
                  <p style={styles.itemText}>
                    E depois atualize suas variáveis de ambiente ativas com o
                    comando:
                  </p>
                  <SyntaxHighlighter
                    language="bash"
                    style={a11yDark}
                    PreTag="div"
                    children={
                      CodeExamples.WorkspacePreparation.Mac
                        .EnvironmentVariables[2]
                    }
                  />
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col
            md="3"
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
                  <a className="text-muted" href="#aplicacoes">
                    - Aplicações
                  </a>
                </p>
                <p>
                  <a className="text-muted" href="#utilitarios">
                    - Utilitários
                  </a>
                </p>
                <p>
                  <a className="text-muted" href="#variaveis-ambiente">
                    - Variáveis de Ambiente
                  </a>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

const styles = {
  itemTitle: {
    fontSize: "1.1rem",
    color: "#444",
    fontWeight: "bold",
    marginBottom: "1rem",
    marginTop: "2rem",
  },
  itemText: {
    fontSize: "0.9rem",
    color: "#777",
  },
};

export default Mac;
