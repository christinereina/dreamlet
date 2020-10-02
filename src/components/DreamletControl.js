import React from 'react';
import NewDreamletForm from './NewDreamletForm';
import DreamletList from './DreamletList';
import DreamletDetails from './DreamletDetails';
import EditDreamletForm from './EditDreamletForm';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../actions';
import { withFirestore } from 'react-redux-firebase'

class DreamletControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDreamlet: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedDreamlet != null) {
      this.setState({
        selectedDreamlet: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleChangingSelectedDreamlet = (id) => {
    this.props.firestore.get({collection: 'dreamlets', doc: id}).then((dreamlet) => {
      const firestoreDreamlet = {
        title: dreamlet.get("title"),
        description: dreamlet.get("description"),
        id: dreamlet.id
      }
      this.setState({selectedDreamlet: firestoreDreamlet });
    });
  }

  // handleEditingDreamlet = (dreamletToEdit) => {
  //   const { dispatch } = this.props;
  //   const action = a.addDreamlet(dreamletToEdit);
  //   dispatch(action);
  //   this.setState({
  //     editing: false,
  //     selectedDreamlet: null
  //   });
  // }

  handleAddNewDreamletToList  = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
  
  handleDeletingDreamlet = (id) => {
    const { dispatch } = this.props;
    const action = a.deleteDreamlet(id);
    dispatch(action);
    this.setState({selectedDreamlet: null});
  }

  render() {     
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing ) {
      currentlyVisibleState = <EditDreamletForm dreamlet = {this.state.selectedDreamlet} onEditDreamlet = {this.handleEditingDreamlet}/>
      buttonText ="See All Dreamlet";
    } else if (this.state.selectedDreamlet != null) {
      currentlyVisibleState = <DreamletDetails dreamlet = {this.state.selectedDreamlet} onClickingDelete = {this.handleDeletingDreamlet} onClickingEdit = {this.handleEditClick} onClickingPurchase = {this.handleDreamletPurchaseClick}/>
      buttonText ="See All Dreamlet";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewDreamletForm onNewDreamletCreation={this.handleAddNewDreamletToList} />;
      buttonText = "go back";
    } else {
      currentlyVisibleState = <DreamletList dreamletList={this.props.masterDreamletList} onDreamletSelection={this.handleChangingSelectedDreamlet} />;
      buttonText = "add Dreamlet";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant='info' onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

DreamletControl.propTypes = {
  masterDreamletList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterDreamletList: state.masterDreamletList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
DreamletControl = connect(mapStateToProps)(DreamletControl);

export default withFirestore(DreamletControl);