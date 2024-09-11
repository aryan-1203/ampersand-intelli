import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center my-0 my-md-2">
          <Col className="order-2 order-sm-1" sm={8}>
            <p className="text-sm-start text-center mt-2 mt-sm-0">All rights reserved. Ampersand VC </p>
          </Col>
          <Col sm={4} className="text-sm-end text-center mb-2 mb-sm-0 order-1 order-sm-2">
            <img src="image/footer-logo.png" alt="All rights reserved. Ampersand VC" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
