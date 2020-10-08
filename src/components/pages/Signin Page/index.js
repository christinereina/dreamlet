import React from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './Signin.elements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to='/'>Dreamlet</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your Dreamlet account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default SignIn;
