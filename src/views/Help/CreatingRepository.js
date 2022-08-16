import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

import { CodeExamplesCreatingRepository } from "../../variables/codeExamplesCreatingRepository.js";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

//= ==============================================================================================
function CreatingRepository() {
  const refCreatingRepositories = useRef(null);
  const refVinculatingProjectsToRepositories = useRef(null);

  useScrollToAnchorByParams({
    refCreatingRepositories,
    refVinculatingProjectsToRepositories,
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
                <h5 className="title">Criação de novos repositórios</h5>
                <p className="text-muted">
                  A estruturação dos projetos é definida por uma stack de
                  qualidade que aborda vários aspectos.
                </p>
              </CardHeader>

              <CardBody>
                <p>
                  <h6>
                    <a>
                      A respeito da criação de novos repositórios no bitbucket
                    </a>
                  </h6>
                  <h7 ref={refCreatingRepositories} class="font-weight-bold">
                    Criando repositórios no bitbucket
                  </h7>
                  <p>
                    Os repositórios são criados seguindo uma configuração
                    espécifica na plataforma do bitbucket, tal configuração pode
                    ser observada nas imagens abaixo:
                  </p>

                  <div>
                    <img
                      height="45%"
                      width="45%"
                      alt="..."
                      src={require("assets/img/creating_repository_img1.png")}
                    />
                  </div>

                  <br />

                  <div>
                    <img
                      height="45%"
                      width="45%"
                      alt="..."
                      src={require("assets/img/creating_repository_img2.png")}
                    />
                  </div>

                  <br />

                  <h7
                    ref={refVinculatingProjectsToRepositories}
                    class="font-weight-bold"
                  >
                    Vinculando o projeto ao repositório do Bitbucket
                  </h7>

                  <p>
                    Depois de termos o projeto criado em nossa máquina e termos
                    o repositório criado podemos vicular o projeto ao
                    repositório executando o comando abaixo:
                  </p>

                  <pre>
                    <SyntaxHighlighter
                      language="js"
                      style={a11yDark}
                      PreTag="div"
                      children={
                        CodeExamplesCreatingRepository.vinculatingProjectToRepository
                      }
                    />
                  </pre>

                  <p>
                    Substituindo{" "}
                    <h7 class="text-muted">{"<repository_link>"}</h7> pelo link
                    real do projeto encontrado no bitbucket após criar o
                    projeto.
                  </p>

                  <p>
                    Depois disso podemos seguir com o fluxo normal de commits.
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
                    Criação de novos repositórios:
                  </a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="A respeito da criação de novos repositórios no bitbucket"
                        onClick={() =>
                          changeAnchorLink("refCreatingRepositories")
                        }
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Vinculando o projeto ao repositório do Bitbucket"
                        onClick={() =>
                          changeAnchorLink(
                            "refVinculatingProjectsToRepositories"
                          )
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

export default CreatingRepository;
