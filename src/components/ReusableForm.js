import React from "react";
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ReusableForm(props){
  return (
    <React.Fragment>
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={props.formSubmissionHandler}>
            <Form.Group>
              <Form.Control type='text' name='title' placeholder='Title' defaultValue={props.defaultTitle} />
            </Form.Group>  
            <Form.Group>
              <Form.Control as="textarea" rows="7" name='description' placeholder='Description' defaultValue={props.defaultDescription} />
            </Form.Group>
            <Button variant='info' type='submit'>{props.buttonText}</Button>
          </Form>
        </Col>  
      </Row>
    </Container>    
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  defaultTitle: PropTypes.string,
  defaultDescription: PropTypes.string,
};

export default ReusableForm;