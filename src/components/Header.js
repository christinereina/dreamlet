import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header(){
  return (
  <React.Fragment>
    <Container>
      <Row>
      <Col md={{ span: 6, offset: 4 }}>
        <h1 className="header">Dreamlet - where the dreams go</h1>
      </Col>  
      </Row>
    </Container>    
    </React.Fragment>    
  );
}

export default Header;