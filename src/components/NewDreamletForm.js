import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';
// import Container from 'react-bootstrap/Container';
import { Container } from './globalStyles';

function NewDreamletForm(props){

  const firestore = useFirestore();

  function addDreamletToFirestore(event) {
    event.preventDefault();
    
    props.onNewDreamletCreation();
      
      return firestore.collection('dreamlets').add(
        {
          title: event.target.title.value, 
          description: event.target.description.value
        }
    );
  }

  return (
    <React.Fragment>
      <Container>
      <ReusableForm
        formSubmissionHandler={addDreamletToFirestore}
        buttonText="Add Dreamlet"
        />
        </Container>
    </React.Fragment>
  );
}

NewDreamletForm.propTypes = {
  onNewDreamletCreation: PropTypes.func
};

export default NewDreamletForm;