import React from 'react';
import { InfoSection } from '../..';
import {homeObjOne, homeObjTwo} from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
    </>
  )
}

export default Home;
