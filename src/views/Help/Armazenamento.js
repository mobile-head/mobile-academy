import React from "react";

// reactstrap components
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CodeExamples } from "variables/codeExamples";

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

const Armazenamento = () => {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md="9">
            <Card>
              <CardHeader>
                <p style={styles.cardHeaderBreadcrumb}>Help /</p>
                <h2 style={styles.cardHeaderTitle}>Armazenamento</h2>
                <p style={styles.itemText}>
                  Visa detalhar a implementação dos diferentes meios de
                  armazenamento numa aplicaç˜1ao React-Native e suas
                  finalidades.
                </p>
              </CardHeader>

              <CardBody>
                <div id="react-redux" style={styles.itemContainer}>
                  <h3 style={styles.itemTitle}>React Redux</h3>
                  <p style={styles.itemText}>
                    O redux é uma forma de armazenamento que guarda todo o
                    componente da aplicação como um state que ele controla e
                    sobre o qual ele aplica melhorias de performance
                    automaticamente. Ele possui como base de funcionamento 3
                    atores: Stores, Reducers e Actions.
                  </p>
                  <h4 style={styles.itemSubtitle}>Store</h4>
                  <p style={styles.itemSubtext}>
                    É aonde é guardada toda a árvore salva da aplicação como
                    state. A forma como nós implementamos o Redux utiliza o
                    pacote 'redux-persist', que permite que tenhamos os states
                    salvos mesmo que fechemos a aplicação.
                  </p>
                  <p style={styles.itemSubtext}>
                    A store geralmente é criada no arquivo '@store/index.js', da
                    seguinte forma:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.Help.Armazenamento.ReactRedux[0]}
                  />
                  <h4 style={styles.itemSubtitle}>Reducers</h4>
                  <p style={styles.itemSubtext}>
                    Reducers são funções que recebem o estado atual e uma
                    payload disparada pelo useDispatch e tratam como a payload
                    será implementada ao state atual. Podem ser utilizados
                    múltiplos reducers em uma store.
                  </p>
                  <p style={styles.itemSubtext}>
                    A forma como implementamos os reducers da aplicação hoje,
                    que geralmente ficam em '@store/reducers/index.js', é:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.Help.Armazenamento.ReactRedux[1]}
                  />
                  <h4 style={styles.itemSubtitle}>Actions</h4>
                  <p style={styles.itemSubtext}>
                    Actions são funcões que recebem as payloads (dados passados
                    pelo usuário) e identificam qual área do state o usuário
                    quer alterar.
                  </p>
                  <p style={styles.itemSubtext}>
                    A forma como as actions são implementadas, em
                    '@store/actions/index.js', é:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.Help.Armazenamento.ReactRedux[2]}
                  />
                  <h4 style={styles.itemSubtitle}>Implementação final e uso</h4>
                  <p style={styles.itemSubtext}>
                    Para se colocar em vigor um contexto com Redux, deve-se
                    encapsular o componente principal do aplicativo com a Store
                    (react-redux) e o PersistGate (redux-persist), da seguinte
                    forma:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.Help.Armazenamento.ReactRedux[3]}
                  />
                </div>
                <div id="react-usememo" style={styles.itemContainer}>
                  <h3 style={styles.itemTitle}>React useMemo</h3>
                  <p style={styles.itemText}></p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.Help.Armazenamento.ReactUseMemo[0]}
                  />
                </div>
                <div id="react-usecontext" style={styles.itemContainer}>
                  <h3 style={styles.itemTitle}>React useContext</h3>
                  <p style={styles.itemText}></p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={
                      CodeExamples.Help.Armazenamento.ReactUseContext[0]
                    }
                  />
                </div>
                <div id="async-storage" style={styles.itemContainer}>
                  <h3 style={styles.itemTitle}>AsyncStorage</h3>
                  <p style={styles.itemText}></p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.Help.Armazenamento.AsyncStorage[0]}
                  />
                </div>
                <div id="sqlite" style={styles.itemContainer}>
                  <h3 style={styles.itemTitle}>SQLite</h3>
                  <p style={styles.itemText}></p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExamples.Help.Armazenamento.SQLite[0]}
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
                  <a className="text-muted" href="#react-redux">
                    - React Redux
                  </a>
                </p>
                <p>
                  <a className="text-muted" href="#basic-structure">
                    - React useMemo
                  </a>
                </p>
                <p>
                  <a className="text-muted" href="#basic-structure">
                    - React useContext
                  </a>
                </p>
                <p>
                  <a className="text-muted" href="#basic-structure">
                    - AsyncStorage
                  </a>
                </p>
                <p>
                  <a className="text-muted" href="#basic-structure">
                    - SQLite
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
  itemSubtitle: {
    fontSize: "1rem",
    color: "#555",
    fontWeight: "bold",
  },
  itemSubtext: {
    fontSize: "0.8rem",
    color: "#888",
  },
};

export default Armazenamento;
