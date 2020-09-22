import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';
import KombuchaDetails from './KombuchaDetails';
import EditKombuchaForm from './EditKombuchaForm';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKombucha: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedKombucha != null) {
      this.setState({
        selectedKombucha: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = {
        type: 'TOGGLE_FORM'
      }
      dispatch(action);
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleChangingSelectedKombucha = (id) => {
    const selectedKombucha = this.props.masterKombuchaList[id];
    this.setState({selectedKombucha: selectedKombucha});
  }

  handleEditingKombucha = (kombuchaToEdit) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, flavor, quanity } = kombuchaToEdit;
    const action = {
      type: 'ADD_KOMBUCHA',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quanity: quanity,
      id: id
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedKombucha: null
    });
  }

  handleAddNewKombuchaToList = (newKombucha) => {
    const { dispatch } = this.props;
    const { name, brand, price, flavor, quanity, id  } = newKombucha;
    const action = {
      type: 'ADD_KOMBUCHA',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quanity: quanity,
      id: id
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }

  handleDeletingKombucha = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KOMBUCHA',
      id: id
    }
    dispatch(action);
    this.setState({selectedKombucha: null});
  }

  //this has not been updated and has no test and has not been refactored with redux
  handleKombuchaPurchaseClick = (purchaseKombucha) => {
    const { dispatch } = this.props;
    const { id, name, brand, price, flavor, quanity } = purchaseKombucha;
    const action = {
      type: 'ADD_KOMBUCHA',
      name: name,
      brand: brand,
      price: price,
      flavor: flavor,
      quanity: quanity,
      id: id
    }
    const selectedKombucha = this.props.masterKombuchaList[id];
    if (selectedKombucha.quantity !== 0) {
      selectedKombucha.quantity--;
    }
    dispatch(action);
      this.setState({
        purchaseKombucha: purchaseKombucha,
        editing: false,
        selectedKombucha: null
      });
  }

  render() {     
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing ) {
      currentlyVisibleState = <EditKombuchaForm kombucha = {this.state.selectedKombucha} onEditKombucha = {this.handleEditingKombucha}/>
      buttonText ="See All Kombucha";
    } else if (this.state.selectedKombucha != null) {
      currentlyVisibleState = <KombuchaDetails kombucha = {this.state.selectedKombucha} onClickingDelete = {this.handleDeletingKombucha} onClickingEdit = {this.handleEditClick} onClickingPurchase = {this.handleKombuchaPurchaseClick}/>
      buttonText ="See All Kombucha";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKombuchaForm onNewKombuchaCreation={this.handleAddNewKombuchaToList} />;
      buttonText = "go back";
    } else {
      currentlyVisibleState = <KombuchaList kombuchaList={this.props.masterKombuchaList} onKombuchaSelection={this.handleChangingSelectedKombucha} />;
      buttonText = "add kombucha";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Button variant='info' onClick={this.handleClick}>{buttonText}</Button>
      </React.Fragment>
    );
  }
}

KombuchaControl.propTypes = {
  masterKombuchaList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterKombuchaList: state.masterKombuchaList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
KombuchaControl = connect(mapStateToProps)(KombuchaControl);

export default KombuchaControl;