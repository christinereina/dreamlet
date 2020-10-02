import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'


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
      <ReusableForm
        formSubmissionHandler={addDreamletToFirestore}
        buttonText="Add Dreamlet"
        />
    </React.Fragment>
  );
}

NewDreamletForm.propTypes = {
  onNewDreamletCreation: PropTypes.func
};

export default NewDreamletForm;