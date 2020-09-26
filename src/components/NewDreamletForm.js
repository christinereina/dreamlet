import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewDreamletForm(props){

  function handleNewDreamletFormSubmission(event) {
    event.preventDefault();
    props.onNewDreamletCreation({
      title: event.target.title.value, 
      description: event.target.description.value, 
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewDreamletFormSubmission}
        buttonText="add new Dreamlet"
        />
    </React.Fragment>
  );
}

NewDreamletForm.propTypes = {
  onNewDreamletCreation: PropTypes.func
};

export default NewDreamletForm;