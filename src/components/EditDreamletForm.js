import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditDreamletForm(props){
  const { dreamlet, onEditDreamlet } = props;

  function handleEditDreamletFormSubmission(event) {
    onEditDreamlet({
      title: event.target.title.value, 
      description: event.target.description.value, 
      id: dreamlet.id
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
          formSubmissionHandler={handleEditDreamletFormSubmission}
          buttonText='Update Dreamlet'
          defaultTitle={dreamlet.title}
          defaultDescription={dreamlet.description} />
  </React.Fragment>
  );
}

EditDreamletForm.propTypes = {
  dreamlet: PropTypes.object,
  onEditDreamlet: PropTypes.func
};

export default EditDreamletForm;
