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
import React, { Component } from "react";

// reactstrap components
import {
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    CardTitle,
} from "reactstrap";

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
/* Use `…/dist/cjs/…` if you’re not in ESM! */
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// core components
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";

import { CodeExamples } from '../../variables/codeExamples';

class Mac extends Component {


    render() {

        return (
            <>
                <PanelHeader size="sm" />
                <div className="content">
                    <Row>
                        <Col md="9">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Workspace Preparation - Mac OS</CardTitle>
                                    <p className="text-muted">
                                        Ações necessárias para configurar o ambiente de trabalho Mac
                                    </p>

                                    {/* <h5>Em relação ao código</h5> */}
                                </CardHeader>

                                <CardBody>
                                    <p>
                                        <h6><a id="tip1">- O uso de constantes deve ser aproveitado</a></h6>

                                        <p class="font-weight-bold">Bad Practice</p>
                                        <pre>
                                            <SyntaxHighlighter language="js" style={a11yDark} PreTag="div" children={CodeExamples.badP1} />
                                        </pre>

                                        <p class="font-weight-bold">Best Practice</p>
                                        <pre>
                                            <SyntaxHighlighter language="js" style={a11yDark} PreTag="div" children={CodeExamples.bestP1} />
                                        </pre>
                                    </p>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col md="3">
                            <Card className="card-user">
                                <CardHeader>
                                    <CardTitle>Guia Rápido</CardTitle>
                                </CardHeader>

                                <CardBody>
                                    <p>
                                        <a className="text-muted" href="#tip1">
                                            - O uso de constantes deve ser aproveitado
                                        </a>
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

export default Mac;
