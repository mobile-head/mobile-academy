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

const EvologMotorista = () => {
  const appSupport = {
    Android: {
      available: true,
      version: "12.19.15",
    },
    iOS: {
      available: true,
      version: "12.16.15",
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
                <h5 className="title">Evolog Motorista</h5>

                <p className="text-muted">
                  Overview do aplicativo Evolog Motorista
                </p>
              </CardHeader>

              <CardBody>
                <hr class="mt-2" />
                <p>
                  <h6>
                    <a id="title1">Presentation</a>
                  </h6>

                  <p>
                    O Evolog Motorista é uma aplicação responsável pelo
                    acompanhamento e facilitação de transporte e precesso de
                    entrega de cargas.
                  </p>
                </p>

                <hr class="mt-4" />
                <p>
                  <h6>
                    <a id="title1">Funções e Funcionalidade</a>
                  </h6>

                  <p>
                    Seu fluxo é dinâmico e contém diversas regras de negócio
                    baseadas em sua operação.
                  </p>

                  <p>
                    Acompanhamento da carga desde sua busca pelo motorista, até
                    o momento da entrega ao cliente final, mantendo o controle
                    de todas as paradas que o motorista precisa realizar em
                    ordem de prioridade.
                  </p>

                  <p>
                    Sempre que o motorista chega à seu ponto de parada e informa
                    que chegou ele deve subir o escaneamento do canhoto caso
                    seja uma viagem típica.
                  </p>

                  <p>
                    Uma viagem é finalizada quando o escaneamento de todos os
                    canhotos para todas as paradas da viagem é detectado.
                  </p>
                </p>

                <hr class="mt-4" />
                <p>
                  <h6>
                    <a id="title1">Suporte</a>
                  </h6>

                  <p>Conta com mais de 1000 usuários mensais.</p>

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
                    *Última atualização em 14/03/2022
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

export default EvologMotorista;
