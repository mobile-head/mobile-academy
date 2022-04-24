import React from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeExamples } from "variables/codeExamples";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

//= ==============================================================================================
const Logica = () => {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="9">
            <Card>
              <CardHeader>
                <h5 className="title">Logic</h5>

                <p className="text-muted">
                  Possui a visão e detalhes de como a parte lógica de um
                  componente React-Native deve ser escrita e organizada
                </p>
              </CardHeader>

              <CardBody>
                <div id="basic-structure" style={styles.itemContainer}>
                  <h3 style={styles.itemTitle}>Estrutura Básica</h3>
                  <p style={styles.itemText}>
                    Visa proporcionar uma visão geral de um arquivo lógico de
                    componente e de como ele deve ser estruturado a fim de
                    facilitar a leitura e iterações posteriores.
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.Help.Logic.BasicStructure[0]}
                  />
                </div>
                <div style={styles.itemContainer}>
                  <h3 style={styles.itemTitle}></h3>
                  <p style={styles.itemText}></p>
                </div>
                <div style={styles.itemContainer}>
                  <h3 style={styles.itemTitle}></h3>
                  <p style={styles.itemText}></p>
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
                  <a className="text-muted" href="#basic-structure">
                    - Estrutura Básica
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
  cardHeaderBreadcrumb: {
    fontSize: "1rem",
    fontWeight: "100",
    color: "#888",
  },
  cardHeaderTitle: {
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#444",
  },
  itemContainer: {},
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

export default Logica;
