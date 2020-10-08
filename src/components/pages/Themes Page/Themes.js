import React from 'react';
import { InfoSection } from '../..';
import {homeObjOne, homeObjTwo} from './Data';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />

    </>
  )
}

export default Home;
