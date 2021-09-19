/*!

=========================================================
* Now UI Dashboard React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
import ReactPlayer from 'react-player';
import { EVOLOG_MOTORISTA_OVERVIEW } from "../../assets/videos/consts.js";

class EvologMotorista extends React.Component {

    render() {
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
                                        <h6><a id="title1">Presentation</a></h6>

                                        <p>
                                            O Evolog Motorista é uma aplicação responsável pelo acompanhamento de
                                            transporte de cargas.
                                        </p>
                                    </p>

                                    <hr class="mt-4" />
                                    <p>
                                        <h6><a id="title1">Flow</a></h6>

                                        <p>
                                            Seu fluxo é dinâmico e contém diversas regras de negócio baseado em sua
                                            operação.
                                        </p>

                                        <p>
                                            O Evolog Motorista acompanha a carga desde sua busca pelo motorista, até o
                                            momento da entrega ao cliente final.
                                        </p>

                                        <p>
                                            O usuário consegue acompanhar todas as paradas que precisa fazer, por ordem de
                                            prioridade.
                                        </p>

                                        <p>
                                            Sempre que o motorista chega no seu ponto de parada, ele informa que chegou, em seguida
                                            caso se trate de uma viagem típica deve fazer o scaner do canhoto, para que seja registrado
                                            no banco.
                                        </p>

                                        <p>
                                            Ao ser feito o scaner de todos os canhotos, de cada uma das paradas, a viagem é finalizada.
                                        </p>
                                    </p>

                                    <hr class="mt-4" />
                                    <p>
                                        <h6><a id="title1">Users</a></h6>

                                        <p>
                                            Seus usuários são os próprios motoristas.
                                        </p>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col md="4">
                            <Card className="card-use">
                                <CardBody>
                                    <video id="video" class="z-depth-1" width="300px" height="550px" autoPlay loop controls muted>
                                        <source src={EVOLOG_MOTORISTA_OVERVIEW} type="video/mp4" />
                                    </video>
                                </CardBody>

                            </Card>
                        </Col>
                    </Row>
                </div>
            </>
        );
    }
}

export default EvologMotorista;
