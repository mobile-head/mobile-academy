import React, { useRef } from "react";

import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ReduxExamples } from "../../variables/codeExamplesRedux";
import { useScrollToAnchorByParams, useChangeAnchorLink } from "utils";

import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import ButtonLink from "../../components/Buttons/ButtonLink";

//= ==============================================================================================
const Redux = () => {
  const refStore = useRef(null);
  const refReducer = useRef(null);
  const refAction = useRef(null);
  const refReduxWrapper = useRef(null);
  const refChangingValues = useRef(null);
  const refViewingReduxStateValues = useRef(null);
  const refMigrations = useRef(null);

  useScrollToAnchorByParams({
    refStore,
    refReducer,
    refAction,
    refReduxWrapper,
    refChangingValues,
    refViewingReduxStateValues,
    refMigrations,
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
                <h5 className="title">Redux</h5>

                <p className="text-muted">Implementação do Redux</p>
              </CardHeader>

              <CardBody>
                <div id="react-redux">
                  <h6 id="reactRedux">React Redux</h6>
                  <p>
                    O redux é uma forma de armazenamento que guarda todo o
                    componente da aplicação como um state que ele controla e
                    sobre o qual ele aplica melhorias de performance
                    automaticamente. Ele possui como base de funcionamento 3
                    atores: Stores, Reducers e Actions.
                  </p>
                  <br />
                  <h7
                    ref={refStore}
                    id="store"
                    class="text-muted font-weight-bold"
                  >
                    Store
                  </h7>
                  <p>
                    É aonde é guardada toda a árvore salva da aplicação como
                    state. A forma como nós implementamos o Redux utiliza o
                    pacote 'redux-persist', que permite que tenhamos os states
                    salvos mesmo que fechemos a aplicação.
                  </p>
                  <p>
                    A store geralmente é criada no arquivo '@store/index.js', da
                    seguinte forma:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={ReduxExamples.store}
                  />
                  <br />
                  <br />
                  <h7 ref={refReducer} class="text-muted font-weight-bold">
                    Reducers
                  </h7>
                  <p>
                    Reducers são funções que recebem o estado atual e uma
                    payload disparada pelo useDispatch e tratam como a payload
                    será implementada ao state atual. Podem ser utilizados
                    múltiplos reducers em uma store.
                  </p>
                  <p>
                    A forma como implementamos os reducers da aplicação hoje,
                    que geralmente ficam em '@store/reducers/index.js', é:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={ReduxExamples.reducer}
                  />
                  <br />
                  <br />
                  <h7 ref={refAction} class="text-muted font-weight-bold">
                    Actions
                  </h7>
                  <p>
                    Actions são funcões que recebem as payloads (dados passados
                    pelo usuário) e identificam qual área do state o usuário
                    quer alterar.
                  </p>
                  <p>
                    A forma como as actions são implementadas, em
                    '@store/actions/index.js', é:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={ReduxExamples.actions}
                  />
                  <br />
                  <br />
                  <h7 ref={refReduxWrapper} class="text-muted font-weight-bold">
                    Encapsulamento
                  </h7>
                  <p>
                    Para se colocar em vigor um contexto com Redux, deve-se
                    encapsular as rotas do app com a Store (react-redux) e o
                    PersistGate (redux-persist), da seguinte forma:
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={ReduxExamples.wrappper}
                  />
                  <br />
                  <br />
                  <h7
                    ref={refChangingValues}
                    class="text-muted font-weight-bold"
                  >
                    Mudando os valores dos states do redux
                  </h7>
                  <p>
                    Para mudarmos os valores dos states do nosso redux
                    precisamos importar alguns elementos importantes,
                    primeiramente importamos nossa action, depois importamos o
                    useDispatch que é um hook nativo do react-redux que
                    utilizaremos para disparar a action.
                  </p>
                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={ReduxExamples.changingState}
                  />

                  <br />
                  <p>
                    Da forma que foi implementado importamos um action chamada{" "}
                    <h7 class="text-muted">actionSetBiometricToggle</h7> que
                    recebe um payload, assim o valor que passarmos na sua
                    chamada junto com o <h7 class="text-muted">useDispatch</h7>{" "}
                    será o seu novo valor.
                  </p>

                  <br />

                  <p>
                    Pode-se haver a necessidade de mudar o state do nosso redux
                    fora do escopo de um hook ou component, dessa forma não
                    conseguiriamos utilizar os hooks do react-redux já que
                    estariámos quebrando as regras dos hooks do react-native. A
                    forma que poderiámos contornar esse problema é acessando a
                    store de forma estática e utilizando seus métodos.
                  </p>

                  <SyntaxHighlighter
                    language="js"
                    style={a11yDark}
                    PreTag="div"
                    children={ReduxExamples.changingStateStaticWay}
                  />
                  {/* <Iframe
                    id="teste"
                    width="100%"
                    height="450px"
                    position="relative"
                    url="https://api.evolog.com.br:4030"
                  /> */}
                </div>

                <br />
                <br />
                <h7
                  ref={refViewingReduxStateValues}
                  class="text-muted font-weight-bold"
                >
                  Visualizando os valores do redux
                </h7>

                <p>
                  Para visualizarmos os valors do redux podemos usar o
                  useSelector.
                </p>

                <SyntaxHighlighter
                  language="js"
                  style={a11yDark}
                  PreTag="div"
                  children={ReduxExamples.viewingReduxData}
                />

                <br />
                <p>
                  Também pode haver a necessidade de visualizar o state fora de
                  componentes e hooks, assim podemos visualizar os dados de
                  forma estática da seguinte forma:
                </p>

                <SyntaxHighlighter
                  language="js"
                  style={a11yDark}
                  PreTag="div"
                  children={ReduxExamples.viewingReduxDataStaticWay}
                />

                <br />
                <br />
                <h7 ref={refMigrations} class="text-muted font-weight-bold">
                  Realizando migrations
                </h7>

                <p>
                  O redux utilizando o redux-persist juntamente tem se o efeito
                  de persistência dos dados utilizando uma base de dados que é
                  informada a partir da propriedade{" "}
                  <h7 class="text-muted">storage</h7> dentro de{" "}
                  <h7 class="text-muted">persistConfig</h7> , os dados são então
                  salvos em uma espécie de banco de dados chave/valor. Sempre
                  que for realizada alguma mudança na estrutura desta base de
                  dados é necessário que seja realizada uma{" "}
                  <h7 class="text-muted">migration</h7> .
                </p>

                <p>
                  A migration é responsável por pegar todos os dados da base de
                  dados anterior e inserí-los dentro da base de dados na nova
                  estrutura.
                </p>

                <p>
                  Se a migration não for realizada acontecerá que sempre que
                  houver uma tentativa de visualização das novas propriedades
                  adicionadas na estrutura do redux será retornado{" "}
                  <h7 class="text-muted">undefined</h7> . Dependendo para o que
                  o valor estiver sendo utilizado, isto poderá causar efeitos
                  catastróficos no funcionamento da aplicação.
                </p>

                <p>
                  Sabendo disso vamos adicionar migrations no nosso aplicativo,
                  primeiro vamos fazer a importação dos itens necessários:
                </p>

                <SyntaxHighlighter
                  language="js"
                  style={a11yDark}
                  PreTag="div"
                  children={ReduxExamples.migrationImports}
                />

                <br />

                <p>
                  Vamos criar o sistema de versionamento das nossas migrations
                  agora, para isso vamos criar um objeto chamado migrations, que
                  terá o conteúdo abaixo, e sempre que for realizada alguma
                  mudança o número da propriedade deve ser upado.
                </p>

                <SyntaxHighlighter
                  language="js"
                  style={a11yDark}
                  PreTag="div"
                  children={ReduxExamples.migrationObject}
                />

                <br />

                <p>
                  Precisamos adicionar algumas propriedades dentro do objeto{" "}
                  <h7 class="text-muted">persistConfig</h7> para configurar as
                  migrations:
                </p>

                <SyntaxHighlighter
                  language="js"
                  style={a11yDark}
                  PreTag="div"
                  children={ReduxExamples.migrationPersistConfig}
                />

                <br />

                <p>
                  Assim controlaremos a versão de nossa base de dados através da
                  propriedade <h7 class="text-muted">version</h7>, sempre
                  mudaremos dentro do objeto{" "}
                  <h7 class="text-muted">migrations</h7> e a propriedade version
                  dentro de persistConfig.
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
                  <a className="text-muted">React Redux:</a>
                  <ul>
                    <li>
                      <ButtonLink
                        link="Store"
                        onClick={() => changeAnchorLink("refStore")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Reducers"
                        onClick={() => changeAnchorLink("refReducer")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Actions"
                        onClick={() => changeAnchorLink("refAction")}
                      />
                    </li>
                    <li>
                      <ButtonLink
                        link="Encapsulamento"
                        onClick={() => changeAnchorLink("refReduxWrapper")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Mudando os valores dos states do redux"
                        onClick={() => changeAnchorLink("refChangingValues")}
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Visualizando os valores do redux"
                        onClick={() =>
                          changeAnchorLink("refViewingReduxStateValues")
                        }
                      />
                    </li>

                    <li>
                      <ButtonLink
                        link="Realizando migrations"
                        onClick={() => changeAnchorLink("refMigrations")}
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

export default Redux;
