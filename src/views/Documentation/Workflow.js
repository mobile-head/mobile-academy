import React, { Component } from "react";

// reactstrap components
import { Row, Col, Card, CardBody, CardHeader, CardTitle } from "reactstrap";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExampleEvents } from "../../variables/codeExampleEvents.js";

class Workflow extends Component {
  render() {
    return (
      <>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md="9">
              <Card>
                <CardHeader>
                  <CardTitle>
                    Documentação do fluxo de trabalho Mobile Bravo
                  </CardTitle>
                  <p className="text-muted">
                    Definição do fluxo de trabalho seguido no mobile
                  </p>

                  <h5 id="projectPattern">Em relação ao workflow do mobile</h5>
                </CardHeader>

                <CardBody>
                  <p>
                    <h6>
                      <a id="mobileOverview">
                        - A respeito do workflow do mobile
                      </a>
                    </h6>

                    <h7 id="workflowOverview" class="font-weight-bold">
                      Definição e visão geral
                    </h7>

                    <p>
                      Definição do fluxo de trabalho seguido no mobile que visa
                      mostrar como funciona o processo desde o momento do
                      nascimento de uma demanda até o deploy da versão nas
                      webstores ou até mesmo pelo codePush.
                    </p>

                    <p>
                      Tendo um fluxo de trabalho bem organizado e definido em
                      processos estruturados conseguimos criar um ambiente de
                      desenvolvimento seguro, com fácil adaptação e entendimento
                      do que fazer quando novas demandas chegarem ao time, o
                      trabalho também se torna mais simples de ser revisado.
                    </p>

                    <h7 id="newDemands" class="font-weight-bold">
                      Demandas: Quem são, onde vivem, de que se alimentam?
                    </h7>

                    <p>As demandas podem chegar pelas seguintes direções:</p>
                    <ul>
                      <li>Reuniões formais;</li>
                      <li>Reuniões informais;</li>
                      <li>Emails de clientes;</li>
                      <li>Necessidade interna do time (Melhorias internas);</li>
                      <li>Por líderes, time de PO e outros.</li>
                    </ul>

                    <p>As demandas também podem ser classificadas em:</p>

                    <dl>
                      <dt>
                        <h7 class="text-muted">Primária</h7>
                      </dt>
                      <dd>
                        Demandas primárias são as que vem do cliente, ou que tem
                        um impacto muito forte e positivo no cliente, a essas
                        demandas devemos sempre darmos prioridade visando
                        terminá-las o mais rápido possível.
                      </dd>
                      <dt>
                        <h7 class="text-muted">Secundária</h7>
                      </dt>
                      <dd>
                        Já as tarefas secundárias, geralmente se tratam de
                        tarefas internas do time que visam melhorar nossos
                        processos de trabalho trazendo qualidade para o time,
                        visa também criar novas ferramentas, gerar informação
                        precisa sobre eventos que precisamos manter
                        conhecimento, essas tarefas entram em ação sempre que
                        tarefas primárias estão aguardando alguma
                        aprovação/informação para continuarmos o
                        desenvolvimento, ou quando estamos muito travados em
                        tarefas primárias e precisamos respirar uma nova demanda
                        pra esfriar a cabeça, ou até mesmo após o horário comum
                        de serviço caso necessário e/ou haja o desejo do
                        integrante do time.{" "}
                      </dd>
                    </dl>

                    <h7 id="workflowJira" class="font-weight-bold">
                      Workflow do Jira
                    </h7>

                    <p>
                      Agora que temos uma visão geral das demandas, vamos
                      entender algumas regras sobre o Jira que é nosso sistema
                      de gerenciamento de projetos.
                    </p>

                    <h7 class="text-muted">Regras das demandas no Jira:</h7>
                    <ul>
                      <li>
                        Cada demanda deve estar vinculada a um Jira, assim
                        conseguiremos rastreá-la;
                      </li>
                      <li>
                        Se alguma demanda tem uma informação confusa e o time de
                        TI de forma global não tem entendimento do processo a
                        ser desenvolvido é necessário que a demanda seja passada
                        para time de requisitos fazer recolhimento e
                        documentação das informações, assim os desenvolvedores
                        conseguirão entender;
                      </li>
                      <li>
                        Demandas que ofendem processos de segurança, e tornam o
                        ambiente do Evolog inseguro devem ser respondidas
                        reforçando a necessidade de segurança no ambiente
                        corporativo, promovendo sensibilização e educação o
                        KeyUser;
                      </li>
                    </ul>
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
                    <a className="text-muted" href="#mobileOverview">
                      - A respeito do workflow do mobile
                    </a>
                    <ul>
                      <li>
                        <a className="text-muted" href="#workflowOverview">
                          Definição e visão geral
                        </a>
                      </li>
                      <li>
                        <a className="text-muted" href="#newDemands">
                          Demandas: Quem são, onde vivem, de que se alimentam?
                        </a>
                      </li>
                      <li>
                        <a className="text-muted" href="#workflowJira">
                          Worflow do Jira
                        </a>
                      </li>
                      <li>
                        <a className="text-muted" href="#workflowGit">
                          Worflow do Bitbucket
                        </a>
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
}

export default Workflow;
