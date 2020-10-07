import React from 'react'
import { FooterContainer, Footer, FooterSubHeading, FooterSubText, Form, FormInput } from './Footer.elements';
import { Button } from '../globalStyles';


const footer = () => {
  return (
    <FooterContainer>
      <Footer>
        <FooterSubHeading>
          Learn more about Dreamlet
          <FooterSubText>
            You can find the creator here:
          </FooterSubText>
          <Form>
            <FormInput name="email" type="email" placeholder="Your Email" />
              <Button fontBig>Notify Me</Button>
          </Form>
        </FooterSubHeading>
      </Footer>
      
    </FooterContainer>
  )
}

export default footer
