import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ReactPlayer from "react-player";
import { EVOLOG_MOTORISTA_OVERVIEW } from "../../assets/videos/consts.js";

const EvologChecklist = () => {
  const appSupport = {
    Android: {
      available: true,
      version: "3.16.11",
    },
    iOS: {
      available: true,
      version: "1.1.1",
    },
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="8">
            <Card>
              <CardHeader>
                <h5 className="title">Evolog Checklist</h5>

                <p className="text-muted">
                  Overview do aplicativo Evolog Checklist
                </p>
              </CardHeader>

              <CardBody>
                <hr class="mt-2" />
                <p>
                  <h6>
                    <a id="title1">Presentation</a>
                  </h6>

                  <p>
                    O Evolog Checklist é uma aplicação responsável pelo controle
                    dos status dos elementos indisponíveis para que haja uma
                    viagem segura dentre outras coisas que podem ser analisadas
                    fazendo-se o uso de checklists de verificação.
                  </p>
                </p>

                <hr />

                <h6>
                  <a>Acesso</a>
                </h6>

                <p>
                  Para acessar o Evolog Checklist é necessário ter uma conta
                  ativa no Evolog.
                </p>

                <hr class="mt-4" />
                <p>
                  <h6>
                    <a id="title1">Funções e Funcionalidade</a>
                  </h6>

                  <p>
                    O Evolog Checklist em vários módulos que estão vinculado aos
                    módulos/produtos do Evolog, então temos um módulo no
                    aplicativo chamado "Hora-Certa" que está vinculado ao módulo
                    Hora-Certa do Evolog.
                  </p>

                  <p>
                    O fluxo deste aplicativo depende do módulo que é
                    selecionado, cada um terá sua própria forma de criar/iniciar
                    um checklist. Hoje os únicos módulos dentro do aplicativo
                    que estão ativos são Tracking e Hora-Certa.
                  </p>

                  <p>
                    Parte do fluxo deste aplicativo também depende dos
                    parâmetros que são definidos durante o seu cadastro.
                    Tornando um dos aplicativos mais dinâmicos em nossa store.
                  </p>

                  <p>
                    Não é um aplicativo com muitos usuários, seu público alvo
                    são os colaboradores responsáveis por fazerem os checklists
                    de verificação para os veículos e motoristas.
                  </p>
                </p>

                <hr class="mt-4" />
                <p>
                  <h6>
                    <a id="title1">Suporte</a>
                  </h6>

                  <p>Conta com dezenas de usuários.</p>

                  {Object.keys(appSupport).map((v) => {
                    return (
                      <div style={styles.supportIndicator}>
                        <div
                          style={{
                            ...styles.supportIndicatorChild,
                            ...styles.supportIndicatorStatus,
                            backgroundColor: appSupport[v].available
                              ? "green"
                              : "red",
                          }}
                        >
                          <i
                            style={{
                              ...styles.supportIndicatorChild,
                              ...styles.supportIndicatorStatusIcon,
                              backgroundColor: appSupport[v].available
                                ? "green"
                                : "red",
                            }}
                            className={
                              appSupport[v].available
                                ? "now-ui-icons media-1_button-play"
                                : "now-ui-icons media-1_button-pause"
                            }
                          />
                        </div>
                        <p
                          style={{
                            ...styles.supportIndicatorChild,
                            ...styles.supportIndicatorPlatform,
                          }}
                        >
                          {v}
                        </p>
                        <p
                          style={{
                            ...styles.supportIndicatorChild,
                            ...styles.supportIndicatorVersion,
                          }}
                        >
                          {appSupport[v].version}
                        </p>
                      </div>
                    );
                  })}
                  <p style={styles.tinyText}>
                    *Última atualização em 18/04/2022
                  </p>
                </p>
              </CardBody>
            </Card>
          </Col>

          <Col md="4">
            <Card className="card-use">
              <CardBody
                style={{ alignItems: "center", justifyContent: "center" }}
              >
                <video
                  id="video"
                  class="z-depth-1"
                  width="300px"
                  height="550px"
                  autoPlay
                  loop
                  controls
                  muted
                >
                  <source src={EVOLOG_MOTORISTA_OVERVIEW} type="video/mp4" />
                </video>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

const styles = {
  supportIndicator: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    border: "2px solid #eee",
    width: 300,
    height: 50,
    marginBottom: 10,
  },
  supportIndicatorChild: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  supportIndicatorStatus: {
    width: 40,
    border: "none",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  supportIndicatorStatusIcon: {
    backgroundColor: "white",
    color: "white",
    fontWeight: "bold",
    border: "none",
    fontSize: "1rem",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  supportIndicatorPlatform: {
    width: 180,
    paddingTop: 15,
  },
  supportIndicatorVersion: {
    width: 80,
    paddingTop: 15,
  },
  tinyText: {
    fontSize: "0.7rem",
    fontWeight: "normal",
  },
};

export default EvologChecklist;
