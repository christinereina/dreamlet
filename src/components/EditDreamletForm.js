import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';

function EditDreamletForm (props) {
  const { dreamlet } = props;
  const firestore = useFirestore();

  function handleEditDreamletFormSubmission(event) {
    event.preventDefault();
    props.onEditDreamlet();
    const propertiesToUpdate = {
      title: event.target.title.value,
      description: event.target.description.value
    }
    return firestore.update({collection: 'dreamlets', doc: dreamlet.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditDreamletFormSubmission}
        buttonText="Update Dreamlet" 
        defaultTitle={dreamlet.title}
        defaultDescription={dreamlet.description} />
    </React.Fragment>
  );
}

EditDreamletForm.propTypes = {
  onEditDreamlet: PropTypes.func,
  defaultTitle: PropTypes.string,
  defaultDescription: PropTypes.string
};

export default EditDreamletForm;