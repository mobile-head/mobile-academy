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
import { EVOLOG_COMERCIAL_OVERVIEW } from "../../assets/videos/consts.js";

const EvologComercial = () => {
  const appSupport = {
    Android: {
      available: true,
      version: "13.33.10",
    },
    iOS: {
      available: true,
      version: "1.9.3",
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
                <h5 className="title">Evolog Comercial</h5>

                <p className="text-muted">
                  Overview do aplicativo Evolog Comercial
                </p>
              </CardHeader>

              <CardBody>
                <hr class="mt-2" />
                <p>
                  <h6>
                    <a id="title1">Presentation</a>
                  </h6>

                  <p>
                    O Evolog Comercial é uma ferramenta gerencial-administrativa
                    que proporciona uma série de métricas e estatística à
                    respeito do armazenamento, das entregas, das notas entre
                    outros dados relevantes dos itens em estoque.
                  </p>
                </p>

                <hr class="mt-4" />
                <p>
                  <h6>
                    <a id="title1">Funções e Funcionalidade</a>
                  </h6>

                  <p>
                    Permite que o usuário busque pelas notas de determinado
                    cliente ou por uma nota em específico.
                  </p>
                  <p>
                    Dependendo de quantas notas foram selecionadas no momento da
                    filtragem, exibe dados sobre quantas foram recusadas,
                    atrasadas e quantas estão dentro dos conformes.
                  </p>
                  <p>
                    Aqui, o ShimmerPlaceholder é utilizado fortemente por conta
                    da quantidade de dados que devem ser requeridos e carregados
                    da API.
                  </p>
                  <p>
                    Pode ser testado mesmo em produção pois os dados que são
                    guardados em banco de dados à partir do Evolog Comercial não
                    possuem impacto no processo de produção da Bravo.
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
              <CardBody>
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
                  <source src={EVOLOG_COMERCIAL_OVERVIEW} type="video/mp4" />
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

export default EvologComercial;
