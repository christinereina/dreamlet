import React from 'react'
import { FooterContainer, Footer, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink } from './Footer.elements';
import { Button } from '../globalStyles';


const footer = () => {
  return (
    <FooterContainer>
      <Footer>
        <FooterSubHeading>
         Dreamlet
          <FooterSubText>
            Join our Newsletter
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
            <FooterLink to='sign-up'> Terms of Service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle> Contact Us </FooterLinkTitle>
            <FooterLink to='sign-up'> LinkedIn</FooterLink>
            <FooterLink to='sign-up'> GitHub</FooterLink>
            <FooterLink to='sign-up'> Email</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle> Social Media </FooterLinkTitle>
            <FooterLink to='sign-up'> Instagram </FooterLink>
            <FooterLink to='sign-up'> Tik Tok </FooterLink>
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
