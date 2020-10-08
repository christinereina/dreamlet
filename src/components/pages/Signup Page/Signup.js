import React from "react";
import firebase from "firebase/app";
import { Button } from '../../globalStyles';
import { Link } from 'react-router-dom';


function Signup(){ 
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      console.log("successfully signed up!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }
    function doSignIn(event) {
      event.preventDefault();
      const email = event.target.signinEmail.value;
      const password = event.target.signinPassword.value;
      firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
        console.log("Successfully signed in!");
      }).catch(function(error) {
        console.log(error.message);
      });
    }

      function doSignOut() {
        firebase.auth().signOut().then(function() {
          console.log("Successfully signed out!");
        }).catch(function(error) {
          console.log(error.message);
        });  
  } 

  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button type='submit'>Sign up</button>
      </form>

      <Link to='/Signin'>  
         <Button> Login</Button>
      </Link>


  </React.Fragment>
)
  }

export default Signup;