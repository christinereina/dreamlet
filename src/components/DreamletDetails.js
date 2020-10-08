import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function DreamletDetails(props){
  const { dreamlet, onClickingDelete } = props;

  return (
    <React.Fragment>
      <Container>
        <Row>
      <Col md={8}>
      <h2>{dreamlet.title}</h2>
      <h4>{dreamlet.description}</h4>
      {/* <Button onClick={ props.onClickingEdit }>Edit</Button>
      <Button onClick={() => onClickingDelete(dreamlet.id)}>Delete</Button> */}
      <hr/>
      </Col>  
      </Row>
    </Container> 
    </React.Fragment>
  );
}

DreamletDetails.propTypes = {
  dreamlet: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default DreamletDetails;