import React from "react";
import PropTypes from "prop-types";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dreamlet from "./Dreamlet";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function DreamletList(props){
  useFirestoreConnect([
    { collection: 'dreamlets' }
  ]);

  const dreamlets = useSelector(state => state.firestore.ordered.dreamlets);

  if (isLoaded(dreamlets)) {
    return (
      <React.Fragment>
        <Container>
        <hr/>
        {dreamlets.map((dreamlet) => {
          return <Dreamlet
            whenDreamletClicked = { props.onDreamletSelection }
            title={dreamlet.title}
            description={dreamlet.description}
            id={dreamlet.id}
            key={dreamlet.id}/>
        })}
        </Container>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Dreaming...</h3>
      </React.Fragment>
    )
  }
}

DreamletList.propTypes = {
  ondreamletSelection: PropTypes.func
};

export default DreamletList;