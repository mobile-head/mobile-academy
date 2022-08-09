import React, { useRef } from "react";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
} from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ReduxExamples } from "../../variables/codeExamplesRedux";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

import { CodeExampleFlatlist } from "../../variables/codeExampleFlatlist";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

//= ==============================================================================================
const Flatlist = () => {
  const refProp = useRef(null);
  const refExemplos = useRef(null);

  useScrollToAnchorByParams({
    refProp,
    refExemplos,
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
                <h5 className="title">FlatList</h5>

                <p className="text-muted">
                  Uma interface de alto desempenho para renderizar listas
                  simples e básicas, suportando os recursos mais úteis.
                </p>
              </CardHeader>

              <CardBody>
                <div id="react-redux">
                  <h6 id="reactRedux">Flatlist</h6>
                  <p>
                    A renderização dinâmica de uma coleta de dados sempre será
                    importante à medida que você avança em sua jornada de
                    desenvolvimento de software. React Native FlatList é um
                    componente embutido usado para fazer uma lista de rolagem
                    eficiente de dados. O FlatList é benéfico de várias
                    maneiras, como renderizar uma lista de itens em uma lista de
                    tarefas, exibir uma lista de contatos em seu celular etc.
                    React Native FlatList é um componente embutido usado para
                    fazer uma lista de rolagem eficiente de dados.
                  </p>

                  <br />
                  <h7
                    ref={refProp}
                    id="prop"
                    class="text-muted font-weight-bold"
                  >
                    Props
                  </h7>

                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Descrição</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>data</td>
                        <td>Array</td>
                        <td>
                          É uma matriz de dados usada para criar a lista,
                          normalmente uma matriz de objetos.
                        </td>
                      </tr>
                      <tr>
                        <td>renderItem</td>
                        <td>Function</td>
                        <td>
                          Função que pegará um elemento individual da matriz de
                          dados e renderizará um componente.
                        </td>
                      </tr>
                      <tr>
                        <td>horizontal</td>
                        <td>Boolean</td>
                        <td>
                          Se true, renderiza os itens lado a lado
                          horizontalmente em vez de empilhados verticalmente.
                        </td>
                      </tr>
                      <tr>
                        <td>numColumns</td>
                        <td>Number</td>
                        <td>
                          Usada para converter uma lista simples em um
                          componente de lista de grade.
                        </td>
                      </tr>
                      <tr>
                        <td>keyExtractor</td>
                        <td>Function</td>
                        <td>
                          Usado para extrair uma chave exclusiva para um
                          determinado item no índice especificado. A chave é
                          usada para armazenamento em cache e como a chave de
                          reação para rastrear a reordenação de itens. O
                          extrator padrão verifica item.key, então item.id, e
                          então volta a usar o índice, como o React faz.
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <br />
                  <h7
                    ref={refExemplos}
                    id="exemplos"
                    class="text-muted font-weight-bold"
                  >
                    Exemplos de uso
                  </h7>

                  <p>
                    Primeiro vamos criar uma FlatList simples, com poucos
                    atributos:
                  </p>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleFlatlist.flatlistSimple}
                  />

                  <br />

                  <p>
                    Esse é o exemplo mais básico de uma FlatList, depois disso
                    nós podemos adicionar a prop numColumns para criar um layout
                    de grid na sua lista:
                  </p>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={CodeExampleFlatlist.flatlistColumns}
                  />
                </div>
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
                  <a className="text-muted">FlatList:</a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Props"
                        onClick={() => changeAnchorLink("refProp")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Exemplos"
                        onClick={() => changeAnchorLink("refExemplos")}
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

export default Flatlist;
