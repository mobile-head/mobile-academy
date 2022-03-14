import React from "react";

// reactstrap components
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeExamples } from "variables/codeExamples";

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

const Navegacao = () => {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="9">
            <Card>
              <CardHeader>
                <p style={styles.cardHeaderBreadcrumb}>Help /</p>
                <h2 style={styles.cardHeaderTitle}>Navegacao</h2>
                <p style={styles.itemText}></p>
              </CardHeader>

              <CardBody>
                <div id="first" style={styles.itemContainer}>
                  <h3 style={styles.itemTitle}></h3>
                  <p style={styles.itemText}></p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    //children={CodeExamples.Help.Navegacao.[0]}
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
                  <a className="text-muted" href="#first">
                    - item
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

export default Navegacao;
