import React from 'react';
import NewDreamletForm from './NewDreamletForm';
import DreamletList from './DreamletList';
import DreamletDetails from './DreamletDetails';
import EditDreamletForm from './EditDreamletForm';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from '../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';


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

  handleAddNewDreamletToList  = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
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

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingDreamletInList = (dreamletToEdit) => {
    this.setState({
      editing: false,
      selectedDreamlet: null
    });
  }
  
  handleDeletingDreamlet = (id) => {
    this.props.firestore.delete({collection: 'dreamlets', doc: id});
    this.setState({selectedDreamlet: null});
  }

  render(){
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        window.location = '/Signin'
      )
    } 
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing ) {
      currentlyVisibleState = <EditDreamletForm dreamlet = {this.state.selectedDreamlet} onEditDreamlet = {this.handleEditingDreamletInList}/>
      buttonText ="See All Dreamlet";
    } else if (this.state.selectedDreamlet != null) {
      currentlyVisibleState = <DreamletDetails dreamlet = {this.state.selectedDreamlet} onClickingDelete = {this.handleDeletingDreamlet} onClickingEdit = {this.handleEditClick} />
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
        <Container>
        {currentlyVisibleState}
        <Button variant='info' onClick={this.handleClick}>{buttonText}</Button>
        </Container>
      </React.Fragment>
    );
  }
}
}

DreamletControl.propTypes = {
  DreamletList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    DreamletList: state.DreamletList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

DreamletControl = connect(mapStateToProps)(DreamletControl);

export default withFirestore(DreamletControl);