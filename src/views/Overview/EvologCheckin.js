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

const EvologCheckin = () => {
  const appSupport = {
    Android: {
      available: true,
      version: "0.3.0",
    },
    iOS: {
      available: true,
      version: "0.2.2",
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
                <h5 className="title">Evolog Checkin</h5>

                <p className="text-muted">
                  Overview do aplicativo Evolog Checkin
                </p>
              </CardHeader>

              <CardBody>
                <hr class="mt-2" />
                <p>
                  <h6>
                    <a id="title1">Presentation</a>
                  </h6>

                  <p>
                    O Evolog Checkin é uma das aplicações mais novas que temos,
                    sua principal função é realizar o Pré-Checkin dos motoristas
                    no armazém.
                  </p>
                </p>

                <hr />

                <h6>
                  <a>Acesso</a>
                </h6>

                <p>
                  Para acessar o Evolog Checkin é necessário ter um cadastro
                  ativo como motorista no Evolog e ter o acesso liberado pelo
                  gestor.
                </p>

                <hr class="mt-4" />
                <p>
                  <h6>
                    <a>Funções e Funcionalidade</a>
                  </h6>

                  <p>
                    Este aplicativo é responsável pela visualização de
                    agendamentos disponíveis em que um motorista tem a
                    possibilidade de realizar um pré-checkin.
                  </p>

                  <p>
                    Sempre que o motorista efeturar a ação de pré-checkin é
                    gerado o comprovante que o mesmo poderá a apresentar na
                    portaria.
                  </p>

                  <p>
                    O Evolog Checkin também consegue, quando a rota da posição
                    atual do motorista até o armazém for iniciada transmitir sua
                    posição em tempo real e realizar o Check-In automático
                    quando for identificado que o motorista entrou no raio do
                    armazém.
                  </p>

                  <p>Este aplicativo ainda não teve Go Live.</p>
                </p>

                <hr class="mt-4" />
                <p>
                  <h6>
                    <a id="title1">Suporte</a>
                  </h6>

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

export default EvologCheckin;
