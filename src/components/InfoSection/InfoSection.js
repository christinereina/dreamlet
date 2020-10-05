
import React from 'react'
import { Container } from '../globalStyles';
import {InfoSec, InfoRow, InfoColumn, TextWrapper} from './InfoSection.elements';

const InfoSection = ({ lightBg, imgStart }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>Home Page</TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
      
    </>
  );
};

export default InfoSection;