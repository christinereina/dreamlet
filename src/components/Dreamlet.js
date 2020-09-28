import React from "react";
import PropTypes from "prop-types";
import DreamletSearchForm from './DreamletSearchForm';

function Dreamlet(props){
  
  return (
    <React.Fragment>
    <div onClick ={() => props.whenDreamletClicked(props.id)}>
      <h1>{props.title}</h1>
      <hr/>
    </div>
    </React.Fragment>
  );
}

Dreamlet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenDreamletClicked: PropTypes.func
};

export default Dreamlet;