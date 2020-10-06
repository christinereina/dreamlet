import React from 'react'
import { FooterContainer, Footer, FooterSubHeading, FooterSubText } from './Footer.elements';

const footer = () => {
  return (
    <FooterContainer>
      <Footer>
        <FooterSubHeading>
          Learn more about Dreamlet
          <FooterSubText>
            You can find the creator here:
          </FooterSubText>
        </FooterSubHeading>
      </Footer>
      
    </FooterContainer>
  )
}

export default footer
