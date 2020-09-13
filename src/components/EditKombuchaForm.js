import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditKombuchaForm(props){
  const { kombucha } = props;

  function handleEditKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onEditKombucha({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, flavor: event.target.flavor.value, id: kombucha.id});
  }

  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditKombuchaFormSubmission} 
        buttonText="Update Kombucha" />
    </React.Fragment>
  );
}

EditKombuchaForm.propTypes = {
  onEditKombucha: PropTypes.func
};

export default EditKombuchaForm;
