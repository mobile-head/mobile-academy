import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

// import icons from "variables/icons";

const NativeModulesAndroid = () => {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col md={12}>
            <Card>
              <CardHeader>
                <h4 className="title">Módulos Nativos</h4>
                <p className="description">
                  Os módulos nativos têm o propósito de trazer mais performance
                  e opções para o programador no que diz respeito a
                  disponibilidade de funcionalidades. Apesar da extensão e da
                  quantidade de pacotes disponíveis para javascript, deve-se
                  considerar a performance da aplicação e a disponibilidade para
                  Android e iOS destas, chegando à conclusão sobre a utilização
                  ou não de módulos nativos que devem ser, por sua vez,
                  desenvolvidos em código Java e Swift.
                </p>
              </CardHeader>
              <CardBody>
                <h4 className="title">Android</h4>
                <h5 className="subtitle">Bridge / Ponte</h5>
                <h5 className="description"></h5>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default NativeModulesAndroid;
