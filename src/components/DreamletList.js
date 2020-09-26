import React from "react";
import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dreamlet from "./Dreamlet";

function DreamletList(props){

  return (
  <React.Fragment> 
    <Container>
    <Row>
      <Col xs={{ order: 'first' }}>
          {Object.values(props.dreamletList).map((dreamlet) => {
            return <Dreamlet
              whenDreamletClicked = { props.onDreamletSelection }
              title={dreamlet.title}
              description={dreamlet.description}
              id={dreamlet.id}
              key={dreamlet.id}/>
          })}
        </Col>  
      </Row>
    </Container> 
  </React.Fragment>
  );
}

 DreamletList.propTypes = {
    dreamletList: PropTypes.object,
    onDreamletSelection: PropTypes.func
  };

export default DreamletList;