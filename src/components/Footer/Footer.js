import React from 'react'
import { FooterContainer, Footer, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink } from './Footer.elements';
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
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle> About Us </FooterLinkTitle>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle> About Us </FooterLinkTitle>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle> Contact Us </FooterLinkTitle>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle> Social Media </FooterLinkTitle>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> How it Works</FooterLink>
            <FooterLink to='sign-up'> Terms of Service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      {/* <SocialMedia>
        <SocialMediaWrap>
          
        </SocialMediaWrap>
      </SocialMedia> */}
    </FooterContainer>
  )
}

export default footer;
