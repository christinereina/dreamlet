import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewKombuchaForm(props){

  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value,quantity: event.target.quantity.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewKombuchaFormSubmission}
        buttonText="add new kombucha"
        />
    </React.Fragment>
  );
}

NewKombuchaForm.propTypes = {
  onNewKombuchaCreation: PropTypes.func
};

export default NewKombuchaForm;